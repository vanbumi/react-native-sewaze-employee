import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EQUIPMENT_UPDATE,
  EQUIPMENT_CREATE,
  EQUIPMENT_FETCH_SUCCESS
} from './types';

export const equipmentUpdate = ({ prop, value }) => {
  return {
    type: EQUIPMENT_UPDATE,
    payload: { prop, value }
  };
};

export const equipmentCreate = ({ 
  name, owner, location, unit, time, price, description, image }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/equipments`) // this path to json data store.
      .push({ name, owner, location, unit, time, price, description, image })
      .then(() => {
        dispatch({ type: EQUIPMENT_CREATE });
        Actions.equipmentList({ type: 'reset' });
      });
    };
};

export const equipmentFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/equipments`)
      .on('value',snapshot => {
        dispatch({ type: EQUIPMENT_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};