import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Layout } from './Layout'
import { NotFound } from '../screens/NotFound'
import { Home } from '../screens/Home'
import { Inventory } from '../screens/Inventory'
import { Shop } from '../screens/Shop'
import { ShoppingCart } from '../screens/ShoppingCart'
import { VerifyPayment } from '../screens/VerifyPayment'

export function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shopping-cart" component={ShoppingCart} />
          <Route path="/verify-payment" component={VerifyPayment} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}
