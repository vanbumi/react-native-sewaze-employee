import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class EquipmentCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Name"
            placeholder="your name"
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Location"
            placeholder="Jalan Nuri 19 Bandung"
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Unit"
            placeholder="10"
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Price"
            placeholder="100000"
          />
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EquipmentCreate;