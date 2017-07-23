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
            placeholder="equipment name"
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Owner"
            placeholder="owner name"
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Location"
            placeholder="lokasi equipment"
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Unit"
            placeholder="tersedia berapa unit"
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Price"
            placeholder="harga sewa per hari"
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Description"
            placeholder="kondisi equipment"
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Image"
            placeholder="gambar equipment"
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