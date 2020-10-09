import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Layout } from './Layout'
import { NotFound } from '../screens/NotFound'
import { Home } from '../screens/Home'
import { InventoryShop } from '../screens/InventoryShop'
import { ShoppingCart } from '../screens/ShoppingCart'

export function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <InventoryShop variant="shop" />
          </Route>
          <Route exact path="/inventory">
            <InventoryShop variant="inventory" />
          </Route>
          <Route exact path="/shopping-cart">
            <ShoppingCart />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}
