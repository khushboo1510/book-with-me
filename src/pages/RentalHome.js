

import React from 'react';
import RentalCard from '../components/rental/RentalCard.js'
import connect from '../store/connect'

class RentalHome extends React.Component {

  state = {
    rentals: []
  }

  componentDidMount(){
    const { rentals } = this.props
    this.setState({
      rentals: rentals()
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

export default connect(RentalHome)