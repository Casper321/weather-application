import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'

export default class WarningPage extends Component {
  render () {
    return (
      <Container>
        <Header />
        <View>
          <Text>VARNINGSSIDAN WEHOOO</Text>
        </View>
      </Container>
    )
  }
}
