import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import CityHeader from '../../Components/CityHeader'
import Header10Days from './Components/Header10Days'
import ForecastDays from '../../Components/ForecastDays'
import { connect } from 'react-redux'
import Loading from '../../Components/Loading'
import s from '../../Assets/style'
import { weatherActions } from '../../Redux/WeatherReducer'

class TenDaysForecastPage extends Component {
  setScrollIndex = index => {
    console.log(index)
    weatherActions.setScrollIndexAllHoursPage(index)
  }

  render () {
    const { forecasts, navigation } = this.props
    const newestForecastSearch = forecasts[forecasts.length - 1] || {}

    return (
      <Container>
        <Header navigation={navigation} />
        <ScrollView contentContainerStyle={[s.pb3]}>
          {newestForecastSearch.hours
            ? <View>
              <Header10Days />
              <ForecastDays
                setScrollIndex={index => this.setScrollIndex(index)}
                days={newestForecastSearch.hours}
                navigation={navigation}
                />
            </View>
            : <Loading message={'Laddar din väderdata...'} />}
        </ScrollView>
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    forecasts: state.weather.forecasts,
    setScrollIndexAllHoursPage: state.weather.forecasts
  }
}

export default connect(mapStateToProps)(TenDaysForecastPage)
