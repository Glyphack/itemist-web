import React from 'react'
import Modal from 'react-modal';

import API from '../api/api'
import staticTexts from "../staticTexts";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render() {
    return (
      <div>
        {this.state.items.map(item => <InventoryItem info={item} key={item.pos}/>)}
      </div>
    );
  }

  componentDidMount() {
    API.get("profile/inventory/")
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data.inventory
          });
        },
        (error) => {
          console.log("error", error)
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
}


class InventoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      price: 0
    };

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleSell = this.handleSell.bind(this)
  }

  render() {
    Modal.setAppElement('body');
    return (
      <div>Item {this.props.pos} {this.props.info.name}
        <img src={this.props.info.icon_url_large} alt={this.props.info.name}/>
        <button onClick={this.handleOpenModal}>{staticTexts.sell}</button>

        <Modal
          isOpen={this.state.showModal}
          contentLabel="Sell Item"
        >
          <input value={this.state.price} onChange={e => this.setState({price: e.target.value})}/>
          <button onClick={this.handleCloseModal}>Close</button>
          <button onClick={this.handleSell}>{staticTexts.putItUpForSale}</button>
        </Modal>
      </div>
    );
  }

  handleOpenModal() {
    this.setState({showModal: true});
  }

  handleCloseModal() {
    this.setState({showModal: false});
  }

  async handleSell() {
    if (this.props.price < 1000) {
      return null
    }
    try {
      let result = await API.post("sell/", {
        "appId": this.props.info.appid,
        "contextId": this.props.info.contextid,
        "assetId": this.props.info.assetid,
        "price": this.state.price
      })
      if (result.status !== 200) {
        return null
      }
      if (result.data.success !== true) {
        return null
      }
      console.log(result.data)
      console.log(staticTexts.tradeOfferSentMessage + result.data.sellOrder.tradeOffer.offerId)
    } catch (e) {
      console.log(e)
    }
  }
}

export default Inventory
