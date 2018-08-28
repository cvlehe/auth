import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyARlDlXU-3Eyg3t6woorT0c3GDgEikoUg8',
      authDomain: 'auth-cd2f8.firebaseapp.com',
      databaseURL: 'https://auth-cd2f8.firebaseio.com',
      projectId: 'auth-cd2f8',
      storageBucket: 'auth-cd2f8.appspot.com',
      messagingSenderId: '208090503529'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
