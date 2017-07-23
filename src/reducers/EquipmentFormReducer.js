import {
  EQUIPMENT_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  owner: '',
  location: '',
  unit: '',
  price: '',
  description: '',
  image: ''
};

export default (state =INITIAL_STATE, action) => {
  switch (action.type) {
    case EQUIPMENT_UPDATE:
      // action.payload === { props: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value } // square bracket is key interpolation
    default:
      return state; 
  }
};