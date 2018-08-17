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
    const arr = [

      { day: new Date().getHours() === 23 ? 1 : 0 },
      { day: new Date().getHours() === 23 ? 2 : 1 },
      { day: new Date().getHours() === 23 ? 3 : 2 },
      { day: new Date().getHours() === 23 ? 4 : 3 },
      { day: new Date().getHours() === 23 ? 5 : 4 },
      { day: new Date().getHours() === 23 ? 6 : 5 },
      { day: new Date().getHours() === 23 ? 7 : 6 },
      { day: new Date().getHours() === 23 ? 8 : 7 },
      { day: new Date().getHours() === 23 ? 9 : 8 },
    ]

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
