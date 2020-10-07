import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { NotFound } from '../screens/NotFound'
import { Home } from '../screens/Home'
import { Layout } from '../components/Layout'

export function Routes() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
