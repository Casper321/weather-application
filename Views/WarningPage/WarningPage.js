import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView} from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons/'
import * as style from '../../Assets/style'
import s from '../../Assets/style'
import Warning from './Components/Warning'

export default class WarningPage extends Component {
  render () {
    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <Warning message={'DISPLAY WARNING HERE'} typeOfWarning={'fire'} />
          <Warning message={'DISPLAY WARNING HERE'} typeOfWarning={'weather-snowy'} />
          <Warning message={'DISPLAY WARNING HERE'} typeOfWarning={'weather-rainy'} />
          <Warning message={'DISPLAY WARNING HERE'} typeOfWarning={'weather-windy'} />
        </ScrollView>
      </Container>
    )
  // fire, weather-snowy, weather-rainy, weather-windy
  }
}

const styles = StyleSheet.create({
  warningIconContainer: {
    height: 50,
    width: 50
  },
  warningFire: {
    top: -37,
    left: 10
  }
})

/*
    Behöver fixa så att message är varningen man får från Api och sedan mappa varningarna samt väljer rätt typeOfWarning
    */