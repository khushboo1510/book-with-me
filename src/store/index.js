
import { rentalData } from './data';
import { createStore, combineReducers } from 'redux';

export function initStore(){
  const reducers = {
    rentals: () => {
      return rentalData;
    },
    data: () => [10,11,12]
  }
  return createStore(combineReducers(reducers))
}