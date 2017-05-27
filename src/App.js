import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Header, Button, CardSection, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = {
    loggedIn: null
  }

  render() {
    return (
      <View>
        <Header text="Authentication" />
        {this.getElement()}
      </View>
    )
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD2NmVOaWWCqSj4px1x8njsNPoE90hQfog',
      authDomain: 'auth-8e7c8.firebaseapp.com',
      databaseURL: 'https://auth-8e7c8.firebaseio.com',
      projectId: 'auth-8e7c8',
      storageBucket: 'auth-8e7c8.appspot.com',
      messagingSenderId: '942813154572'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  getElement() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button
              onPress={this.logoutUser.bind(this)}>
              Log Out
            </Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <CardSection>
            <Spinner size={'large'}/>
          </CardSection>
        )
    }
  }

  logoutUser() {
    firebase.auth().signOut()
  }
}

export default App
