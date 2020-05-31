
import React from 'react'

import {
  Switch,
  Route
} from 'react-router-dom';

import RentalHome from './pages/RentalHome';
import Register from './pages/Register';
import Login from './pages/Login';

const Routes = () => {
  return (
    <div className="container bwm-container">
      <Switch>
        <Route exact path='/'>
          <RentalHome />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes;