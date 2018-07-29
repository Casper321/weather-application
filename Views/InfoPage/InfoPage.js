import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, ScrollView } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import BoxContainer from '../../Components/BoxContainer'

export default class InfoPage extends Component {
  render () {
    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <BoxContainer>
            <Text>
              This is the information page
            </Text>
          </BoxContainer>
        </ScrollView>
      </Container>
    )
  }
}
