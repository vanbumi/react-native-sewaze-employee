import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { equipmentFetch } from '../actions';

class EquipmentList extends Component {
  componentWillMount() {
    this.props.equipmentFetch();
  }

  render() {
    return (
      <View>
        <Text>Equipment List</Text>
        <Text>Equipment List</Text>
        <Text>Equipment List</Text>
        <Text>Equipment List</Text>
        <Text>Equipment List</Text>
        <Text>Equipment List</Text>
      </View>
    );
  }
} 

export default connect(null, { equipmentFetch }) (EquipmentList); 

