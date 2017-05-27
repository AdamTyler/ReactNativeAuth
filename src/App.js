import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    return (
      <View>
        <Header text="Authentication" />
        <LoginForm />
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
  }
}

export default App
