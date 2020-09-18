import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Inventory from '../pages/Inventory'
import NotFound from '../pages/NotFound'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/inventory" component={Inventory} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
