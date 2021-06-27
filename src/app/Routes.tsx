import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Layout } from './Layout'
import { NotFound } from '../screens/NotFound'
import { Home } from '../screens/Home'
import { Inventory } from '../screens/Inventory'
import { Shop } from '../screens/Shop'
import { ShoppingCart } from '../screens/ShoppingCart'
import { Payment } from '../screens/Payment'
import { SellsHistory } from '../screens/SellsHistory'
import { HistoryDetail } from '../components/History/HistoryDetail'

export function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shopping-cart" component={ShoppingCart} />
          <Route path="/payment/successful" component={Payment.Success} />
          <Route path="/payment/failed" component={Payment.Failed} />
          <Route path="/payment/history" component={SellsHistory} exact />
          <Route path="/payment/history/:id" component={HistoryDetail} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}
