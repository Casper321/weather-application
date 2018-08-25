import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import Container from '../../Components/Container'
import BackHeader from '../../Components/BackHeader'
import ForecastAllHours from '../../Components/ForecastAllHours'
import { connect } from 'react-redux'

class AllHoursForecastPage extends Component {
  render () {
    const { forecasts, currentLocation, navigation } = this.props
    const newestForecastSearch = forecasts[forecasts.length - 1] || {}
    let arr
    if (new Date().getHours() === 23) {
      arr = [
        { day: 1},
        { day: 2},
        { day: 3},
        { day: 4},
        { day: 5},
        { day: 6},
        { day: 7},
        { day: 8},
        { day: 9},
      ]
    } else {
      arr = [
        { day: 0},
        { day: 1},
        { day: 2},
        { day: 3},
        { day: 4},
        { day: 5},
        { day: 6},
        { day: 7},
        { day: 8},
        { day: 9},
      ]
    }

    return (
      <Container>
        <BackHeader stackNavigation={navigation} title='Detaljerad prognos' />
        <FlatList
          data={arr}
          keyExtractor={item => `${item.day}`}
          renderItem={({ item }) => (
            <ForecastAllHours
              forecastDay={item.day}
              hours={newestForecastSearch.hours}
              longitude={currentLocation.longitude}
              latitude={currentLocation.latitude}
            />
          )}
        />
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    forecasts: state.weather.forecasts,
    currentLocation: state.weather.currentLocation,
    setScrollIndexAllHoursPage: state.weather.setScrollIndexAllHoursPage
  }
}

export default connect(mapStateToProps)(AllHoursForecastPage)
