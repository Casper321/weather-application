import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import Container from '../../Components/Container'
import Header from '../../Components/Header'

export default class SearchPage extends Component {
  someMethod = value => {
    console.log(value)
  }

  render () {
    return (
      <Container>
        <SearchBar
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Skriv din ort här...'
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
