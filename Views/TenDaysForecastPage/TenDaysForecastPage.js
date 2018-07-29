import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import CityHeader from '../../Components/CityHeader'
import Header10Days from './Components/Header10Days'
import ForecastDays from '../../Components/ForecastDays'

export default class TenDaysForecastPage extends Component {
  render () {
    let days = [
      {
        key: 1,
        day: 'Mån',
        date: '23 juli',
        tempHigh: 24,
        tempLow: 20,
        weatherTypeNumNight: 1,
        weatherTypeNumDay: 2,
        totalRain: 7
      },
      {
        key: 2,
        day: 'Tis',
        date: '24 juli',
        tempHigh: 25,
        tempLow: 19,
        weatherTypeNumNight: 4,
        weatherTypeNumDay: 3,
        totalRain: 1
      },
      {
        key: 2,
        day: 'Ons',
        date: '25 juli',
        tempHigh: 25,
        tempLow: 19,
        weatherTypeNumNight: 4,
        weatherTypeNumDay: 3,
        totalRain: 1
      },
      {
        key: 2,
        day: 'Tors',
        date: '26 juli',
        tempHigh: 25,
        tempLow: 19,
        weatherTypeNumNight: 4,
        weatherTypeNumDay: 3,
        totalRain: 1
      },
      {
        key: 2,
        day: 'Fre',
        date: '27 juli',
        tempHigh: 25,
        tempLow: 19,
        weatherTypeNumNight: 4,
        weatherTypeNumDay: 3,
        totalRain: 1
      },
      {
        key: 2,
        day: 'Lör',
        date: '28 juli',
        tempHigh: 25,
        tempLow: 19,
        weatherTypeNumNight: 4,
        weatherTypeNumDay: 3,
        totalRain: 1
      }
    ]

    return (
      <Container>

        <Header navigation={this.props.navigation} />
        <ScrollView>
          <CityHeader city={'Göteborg'} />
          <Header10Days />
          <ForecastDays days={days} />
        </ScrollView>
      </Container>
    )
  }
}
