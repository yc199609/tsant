import React,{ Suspense, lazy } from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import container from './components/container';
const Login = lazy(()=> import('./pages/login'))

const App: React.SFC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/layout" component={container} />
          <Redirect from="/" exact to="/layout" />
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App;
