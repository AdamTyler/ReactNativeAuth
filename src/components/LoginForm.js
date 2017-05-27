import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common'


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    submitting: false
  }

  render() {
    const { errorStyle } = styles
    return (
      <Card>
        <CardSection>
          <Input label={'Email'}
            value={this.state.email}
            placeholder={'your@email.com'}
            onChange={email => this.setState({ email })}/>
        </CardSection>

        <CardSection>
          <Input label={'Password'}
            placeholder={'your password'}
            secureTextEntry={true}
            value={this.state.password}
            onChange={password => this.setState({ password })}/>
        </CardSection>

        <Text style={errorStyle}>{this.state.error}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }

  loginUser() {
    const { email, password } = this.state
    this.setState({error: '', submitting: true})
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((ex) => {
        this.setState({error: 'Authentication Error', submitting: false})
      })
      .then((res) => {
        console.log('signup', res)
        this.setState({submitting: false})
      })
    })
    .then(res => {
      console.log('login', res)
      this.setState({submitting: false})
    })
  }

  renderButton() {
    if(this.state.submitting) {
      return <Spinner size={'small'} />
    }
    return (
      <Button onPress={this.loginUser.bind(this)}>
        Log In
      </Button>
    )
  }
}

const styles = {
  errorStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 20
  }
}

export default LoginForm
