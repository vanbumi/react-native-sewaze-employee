import {
  EQUIPMENT_UPDATE
} from './types';
import firebase from 'firebase';


export const equipmentUpdate = ({ prop, value }) => {
  return {
    type: EQUIPMENT_UPDATE,
    payload: { prop, value }
  };
};

export const equipmentCreate = ({ 
  name, owner, location, unit, time, price, description, image }) => {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/equipments`) // this path to json data store.
      .push({ name, owner, location, unit, time, price, description, image });
};

