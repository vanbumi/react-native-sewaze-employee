import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EquipmentList from './components/EquipmentList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main">
        <Scene key="equipmentList" component={EquipmentList} title="Equipments" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;