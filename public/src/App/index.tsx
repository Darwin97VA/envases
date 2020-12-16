import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import './style.css'
import Home from '../Views/Home'
import Login from '../Views/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route component={()=><Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App