import React, { Component } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import Header10Days from './Components/Header10Days'
import ForecastDays from '../../Components/ForecastDays'
import { connect } from 'react-redux'
import Loading from '../../Components/Loading'
import fetchWeatherData from '../../Assets/Functions/fetchWeatherData'
import * as style from '../../Assets/style'
import s from '../../Assets/style'
import { weatherActions } from '../../Redux/WeatherReducer'

class TenDaysForecastPage extends Component {
  state = {
    loadingCoordinatesFailed: false,
    loadingForecastFailed: false,
    refreshing: false
  }

  onRefresh = async () => {
    this.setState({ refreshing: true })
    const { loadingForecastFailed, loadingCoordinatesFailed } = fetchWeatherData(this.props.dispatch)
    this.setState({ loadingForecastFailed, loadingCoordinatesFailed, refreshing: false })
  }

  setScrollIndex = index => {
    weatherActions.setScrollIndexAllHoursPage(index)
  }

  render () {
    const { forecasts, navigation, currentLocation } = this.props
    const newestForecastSearch = forecasts[forecasts.length - 1] || {}

    return (
      <Container>
        <Header navigation={navigation} />
        <ScrollView
          refreshControl={
            <RefreshControl
              colors={[style.COL_GOOGLE_BLUE, style.COL_YELLOW_SUN, style.COL_NIGHT_RIDER]}
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          contentContainerStyle={[s.pb3]}
        >
          {newestForecastSearch.hours
            ? <View>
              <Header10Days />
              <ForecastDays
                currentLocation={currentLocation}
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
    setScrollIndexAllHoursPage: state.weather.forecasts,
    currentLocation: state.weather.currentLocation
  }
}

export default connect(mapStateToProps)(TenDaysForecastPage)
