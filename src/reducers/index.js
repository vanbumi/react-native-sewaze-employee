import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EquipmentFormReducer from './EquipmentFormReducer';
import EquipmentReducer from './EquipmentReducer';

export default combineReducers({
  auth: AuthReducer,
  equipmentForm: EquipmentFormReducer
});