import {
  EQUIPMENT_UPDATE
} from './types';


export const equipmentUpdate = ({ prop, value }) => {
  return {
    type: EQUIPMENT_UPDATE,
    payload: { prop, value }
  };
};