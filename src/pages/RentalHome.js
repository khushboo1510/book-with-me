

import React from 'react';
import RentalCard from '../components/rental/RentalCard.js'
import store from '../store';

class RentalHome extends React.Component {

  state = {
    rentals: []
  }

  componentDidMount(){
    this.setState({
      rentals: store.rentals()
    })
  }
  renderRentals = (rentals) => 
    rentals.map(rental => 
      <RentalCard rental = {rental} />
    );
  

  render() {
    const {rentals} = this.state;

    return(
      <div className="card-list">
        <h1 className="page-title">Your Home All Around the World</h1>
        <div className="row">
          {this.renderRentals(rentals)}
        </div>
      </div>
    )
  }
}

export default RentalHome