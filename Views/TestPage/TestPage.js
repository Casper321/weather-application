import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'

export default class TestPage extends Component {
  render () {
    return (
      <Container>
        <Header />
        <View>
          <Text>Hello from testpage!</Text>
        </View>
      </Container>
    )
  }
}
