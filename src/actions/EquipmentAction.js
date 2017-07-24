import {
  EQUIPMENT_UPDATE
} from './types';

export const equipmentUpdate = ({ prop, value }) => {
  return {
    type: EQUIPMENT_UPDATE,
    payload: { prop, value }
  };
};

export const equipmentCreate = ({ 
  name, owner, location, unit, time, price, description, image }) => {
    console.log(name, owner, location, unit, time, price, description, image)
};