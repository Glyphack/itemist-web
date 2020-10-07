import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { NotFound } from '../screens/NotFound'
import { Home } from '../screens/Home'
import { Layout } from '../components/Layout'
import { Shop } from '../screens/Shop'
import { Inventory } from '../screens/Inventory'

export function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/inventory" component={Inventory} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}
