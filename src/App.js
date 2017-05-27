import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header } from './components/common'

class App extends Component {
  render() {
    return (
      <View>
        <Header text="Authentication" />
        <Text>APP HERE</Text>
      </View>
    )
  }
}

export default App