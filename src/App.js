import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from'./components/shared/Header';
import RentalHome from './pages/RentalHome';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {

  return (
    <div>
      <Router>
        <Header />
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
      </Router>
    </div>
  );
}

export default App;
