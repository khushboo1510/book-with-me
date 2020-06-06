import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Header from'./components/shared/Header';
import Routes from './Routes'
import { StateContext } from './state-context'
import store from './store'

function App() {

  return (
    <div> 
      <StateContext.Provider value={store}>
        <Router>
          <Header />
          { Routes() }
        </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
