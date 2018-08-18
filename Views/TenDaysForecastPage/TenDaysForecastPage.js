import React, { Component } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import CityHeader from '../../Components/CityHeader'
import Header10Days from './Components/Header10Days'
import ForecastDays from '../../Components/ForecastDays'
import { connect } from 'react-redux'
import Loading from '../../Components/Loading'
import { Location, Permissions } from 'expo'
import s from '../../Assets/style'
import { weatherActions } from '../../Redux/WeatherReducer'
import fetchWeatherForecast from '../../Assets/Functions/fetchWeatherForecast'
import getLocationFromCoordinates from '../../Assets/Functions/getLocationFromCoordinates'
import getWarningForecast from '../../Assets/Functions/getWarningForecast'

class TenDaysForecastPage extends Component {
  state = {
    loadingCoordinatesFailed: false,
    loadingForecastFailed: false,
    refreshing: false
  }

  componentDidMount () {
    this.fetchData()
  }

  onRefresh = async () => {
    this.setState({ refreshing: true })
    this.fetchData().then(() => {
      this.setState({ refreshing: false })
    })
  }

  fetchData = async () => {
    const { currentLatitude, currentLongitude } = await this.getLocation()
    if (currentLatitude && currentLongitude) {
      // this.getWeatherForecast('', currentLatitude, currentLongitude)
      const { city, suburb, state } = getLocationFromCoordinates(currentLatitude, currentLongitude, this.props.dispatch)
      fetchWeatherForecast(currentLatitude, currentLongitude, city || suburb, this.props.dispatch)
        ? this.setState({ loadingForecastFailed: false })
        : this.setState({ loadingForecastFailed: true })
      getWarningForecast(state, this.props.dispatch)
    }
  }

  getLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({})
      const currentLatitude = Number.parseFloat(location.coords.latitude).toPrecision(5)
      const currentLongitude = Number.parseFloat(location.coords.longitude).toPrecision(5)

      this.props.dispatch(
        weatherActions.setCurrentCoordinates({
          latitude: currentLatitude,
          longitude: currentLongitude
        })
      )
      this.setState({ loadingCoordinatesFailed: false })
      return { currentLatitude, currentLongitude }
    } catch (error) {
      this.setState({ loadingCoordinatesFailed: true })
    }
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
          refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}
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
