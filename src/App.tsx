import React,{ Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const LayoutComponent = lazy(()=> import('./pages/layout'))
const Login = lazy(()=> import('./pages/login'))

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={LayoutComponent} />
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App;
