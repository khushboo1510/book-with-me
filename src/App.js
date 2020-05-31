import React from 'react';
import Header from'./components/shared/Header';
import RentalHome from './pages/RentalHome';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {

  const renderPages = () => {
    const { pathname } = window.location;
    
    switch(pathname) {
      case '/':
        return <RentalHome />;
      case '/login':
        return <Login />
      case '/register':
        return <Register />
      default:
        return <RentalHome />;
    }
  }
  return (
    <div>
      <Header />
      { renderPages() }
    </div>
  );
}

export default App;
