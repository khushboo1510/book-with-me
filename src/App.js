import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Header from'./components/shared/Header';
import Routes from './Routes'
import Provider from './store/Provider';
import { initStore } from './store';

const store = initStore();
const App = () => {

  return (
    <div> 
      <Provider store={store}>
        <Router>
          <Header />
          { Routes() }
        </Router>
      </Provider>
    </div>
  )
}

export default App;
