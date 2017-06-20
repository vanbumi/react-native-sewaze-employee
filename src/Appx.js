import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class Appx extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyA6nVqJ2ulyUKChcFA1hPTDx9bN4_MX8IQ',
    authDomain: 'sewaze-b07f6.firebaseapp.com',
    databaseURL: 'https://sewaze-b07f6.firebaseio.com',
    projectId: 'sewaze-b07f6',
    storageBucket: 'sewaze-b07f6.appspot.com',
    messagingSenderId: '84765363642'
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
    <Provider store={createStore(reducers)}>
      <LoginForm />
    </Provider>
    );
  }
}

export default Appx;