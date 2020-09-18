import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../screens/Home'
import Shop from '../screens/Shop'
import Inventory from '../screens/Inventory'
import NotFound from '../screens/NotFound'
import MenuModal from '../components/MenuModal'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/inventory" component={Inventory} />
        <Route component={NotFound} />
      </Switch>
      <MenuModal />
    </Router>
  )
}

export default Routes
