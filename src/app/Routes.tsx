import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Layout } from './Layout'
import { NotFound } from '../screens/NotFound'
import { Home } from '../screens/Home'
import { CartInventoryShop } from '../screens/CartInventoryShop'

export function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/shop">
            <CartInventoryShop variant="shop" />
          </Route>

          <Route exact path="/inventory">
            <CartInventoryShop variant="inventory" />
          </Route>

          <Route exact path="/shopping-cart">
            <CartInventoryShop variant="shopping-cart" />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}
