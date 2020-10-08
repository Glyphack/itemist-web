import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Layout } from './Layout'
import { NotFound } from '../screens/NotFound'
import { Home } from '../screens/Home'
import { InventoryShop } from '../screens/InventoryShop'

export function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop">
            <InventoryShop variant="shop" />
          </Route>
          <Route exact path="/inventory">
            <InventoryShop variant="inventory" />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}
