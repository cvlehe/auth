import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyARlDlXU-3Eyg3t6woorT0c3GDgEikoUg8',
      authDomain: 'auth-cd2f8.firebaseapp.com',
      databaseURL: 'https://auth-cd2f8.firebaseio.com',
      projectId: 'auth-cd2f8',
      storageBucket: 'auth-cd2f8.appspot.com',
      messagingSenderId: '208090503529'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>

            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      case null:
        return <Spinner size="large" />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
