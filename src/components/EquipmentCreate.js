import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Picker } from 'react-native'; 
import { connect } from 'react-redux';
import { equipmentUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EquipmentCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Name"
            placeholder="equipment name"
            value={this.props.name}
            onChangeText={text => this.props.equipmentUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Owner"
            placeholder="owner name"
            value={this.props.owner}
            onChangeText={text => this.props.equipmentUpdate({ prop: 'owner', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Location"
            placeholder="lokasi equipment"
            value={this.props.location}
            onChangeText={text => this.props.equipmentUpdate({ prop: 'location', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Unit"
            placeholder="tersedia berapa unit"
            value={this.props.unit}
            onChangeText={text => this.props.equipmentUpdate({ prop: 'unit', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Price"
            placeholder="harga sewa"
            value={this.props.price}
            onChangeText={text => this.props.equipmentUpdate({ prop: 'price', value: text })}
          />
        </CardSection>

        <CardSection>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.time}
            onValueChange={value => this.props.equipmentUpdate({ prop: 'time', value })}
          >
            <Picker.Item label="Day" value="Day" />
            <Picker.Item label="Week" value="Week" />
            <Picker.Item label="Month" value="Month" />
            <Picker.Item label="Year" value="Year" />
          </Picker>
        </CardSection>

        <CardSection>
          <Input 
            label="Description"
            placeholder="kondisi equipment"
            value={this.props.description}
            onChangeText={text => this.props.equipmentUpdate({ prop:description, value: text }) }
            //onChangeText={value => this.props.equipmentUpdate({ prop:description, value }) } bisa ganti value
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

const mapStateToProps = (state) => {
  const { 
    name,
    owner,
    location,
    unit,
    time,
    price,
    description,
    image
  } = state.equipmentForm;

  return {
    name,
    owner,
    location,
    unit,
    time,
    price,
    description,
    image
  };
};

export default connect(mapStateToProps, { equipmentUpdate })(EquipmentCreate);