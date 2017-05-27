import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { Button, Card, CardSection, Input } from './common'


class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  render() {
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

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
