import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Picker, Text } from 'react-native'; 
import { connect } from 'react-redux';
import { equipmentUpdate, equipmentCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EquipmentCreate extends Component {
  onButtonPress() {
    const { name, owner, location, unit, time, price, description, image } = this.props;

    this.props.equipmentCreate({ 
      name, owner, location, unit, time: time || 'Mohon diisi!', price, description, image 
    })
  }  

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

        <CardSection sytle={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Time</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.time}
            onValueChange={value => this.props.equipmentUpdate({ prop: 'time', value })}
          >
            <Picker.Item label="Pilih per waktu" value="Pilih per waktu" />
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
            onChangeText={text => this.props.equipmentUpdate({ prop: 'description', value: text }) }
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
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 15,
    paddingLeft: 20,
  }
};

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

export default connect(mapStateToProps, { 
  equipmentUpdate, equipmentCreate 
})(EquipmentCreate);