import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import CityHeader from './Components/CityHeader'
import Warning from './Components/Warning'
import DayForecast from '../../Components/DayForecast'
import Rain from '../../Components/Rain'
import s from '../../Assets/style'

export default class StartPage extends Component {
  render () {
    return (
      <Container>
        <Header />
        <CityHeader city={'Göteborg'} />
        <Warning message={'1 risk för västra Götalands län, Bohuslän och Göteborg.'} />
        <DayForecast day={'Söndag 8 juli'} degrees={25} weatherType={'Soligt'} amountRain={0} />
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
