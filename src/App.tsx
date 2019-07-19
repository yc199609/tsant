import React,{ Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const Home = lazy(()=> import('./pages/home'))
const Login = lazy(()=> import('./pages/login'))

const App: React.FC = () => {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App;
