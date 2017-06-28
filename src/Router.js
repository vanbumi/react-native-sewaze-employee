import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EquipmentList from './components/EquipmentList';
import EquipmentCreate from './components/EquipmentCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={
            () => Actions.equipmentCreate() 
          }
          rightTitle="Add" 
          key="equipmentList" 
          component={EquipmentList} 
          title="Equipments"
          initial 
        />
        <Scene key="equipmentCreate" component={EquipmentCreate} title="Create Equipment" />

      </Scene>
    </Router>
  );
};

export default RouterComponent;