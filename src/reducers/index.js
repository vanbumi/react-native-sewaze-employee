import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EquipmentFormReducer from './EquipmentFormReducer';

export default combineReducers({
  auth: AuthReducer,
  equipmentForm: EquipmentFormReducer
});