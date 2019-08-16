import React,{ Suspense, lazy } from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import container from './layout/container';
const Login = lazy(()=> import('./pages/login'))
const Err404 = lazy(()=> import('./pages/error/404'))

const App: React.SFC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/layout" component={container} />
          <Redirect from="/" exact to="/layout" />
          <Route path="/login" component={Login} />
          <Route path='/404' component={Err404}  />
          <Route component={Err404}  />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App;
