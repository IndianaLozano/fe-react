import { FunctionComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { FeedHome } from '../../feed'
import { UsersHome } from '../../users'

import { AppNavBar } from './NavBar'

export const AppRouter: FunctionComponent = () => (
  <Router>
    <AppNavBar />
    <Switch>
      <Route path="/users">
        <UsersHome />
      </Route>
      <Route path="/">
        <FeedHome />
      </Route>
    </Switch>
  </Router>
)
