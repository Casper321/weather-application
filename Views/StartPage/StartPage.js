import React, { Component } from 'react'
import { ScrollView, View, TouchableHighlight, Alert, Button, RefreshControl } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import CurrentForecast from '../../Components/CurrentForecast'
import ForecastHours from '../../Components/ForecastHours'
import Loading from '../../Components/Loading'

import fetchWeatherForecast from '../../Assets/Functions/fetchWeatherForecast'
import getLocationFromCoordinates from '../../Assets/Functions/getLocationFromCoordinates'
import getWarningForecast from '../../Assets/Functions/getWarningForecast'

import computeSunrise from '../../Assets/Functions/computeSunrise'
import s from '../../Assets/style'
import * as style from '../../Assets/style'
import FetchFailed from '../../Components/FetchFailed'
import CityHeader from '../../Components/CityHeader'
// import forecastData from '../../Assets/test-api.json'
import getWeatherCondition from '../../Assets/Functions/getWeatherCondition'
import getDayFromDayIndex from '../../Assets/Functions/getDayFromDayIndex'
import { Location, Permissions } from 'expo'
import { connect } from 'react-redux'
import { weatherActions } from '../../Redux/WeatherReducer'
import ForecastHeader from '../../Components/ForecastHeader'
import BoxContainer from '../../Components/BoxContainer'
import Warning from '../WarningPage/Components/Warning'

const timeOutSearchLimit = 15000

class StartPage extends Component {
  state = {
    hasLocationPermission: false,
    loadingCoordinatesFailed: false,
    loadingForecastFailed: false,
    refreshing: false,
    timesUp: false
  }

  componentDidMount () {
    setTimeout(this.timesUpF, timeOutSearchLimit)
    this.fetchData()
  }

  _onRefresh = async () => {
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
    if (!this.state.hasLocationPermission) {
      const { status } = await Permissions.askAsync(Permissions.LOCATION)
      if (status !== 'granted') {
        this.setState({ hasLocationPermission: false })
      } else {
        this.setState({ hasLocationPermissions: true })
      }
    }

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

  updateState = (type, value) => {
    const state = { ...this.state }
    state[type] = value
    this.setState(state)
  }

  timesUpF = () => {
    this.setState({ timesUp: true })
  }

  render () {
    const { loadingForecastFailed, hasLocationPermission, loadingCoordinatesFailed, timesUp } = this.state
    const { forecasts, currentLocation, weatherWarningsInDistrict, navigation } = this.props
    const newestForecastSearch = forecasts[forecasts.length - 1] || {}
    const currentHour = new Date().getHours() + 1

    return (
      <Container>
        <Header updateWeather={this.getWeatherForecast} navigation={this.props.navigation} />
        <ScrollView
          contentContainerStyle={[s.pb3]}
          refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />}
        >
          {newestForecastSearch.warning && <Warning message={newestForecastSearch.warning.message} />}
          {hasLocationPermission
            ? <FetchFailed text='Väderprognosen kunde inte hämtas då vi inte fick tillgång till din platsinformation. Du kan istället göra en manuell sökning.' />
            : loadingCoordinatesFailed
                ? <FetchFailed text='Din platsinformation kunde inte hämtas. Testa istället att göra en manuell sökning.' />
                : loadingForecastFailed
                    ? <FetchFailed text='Din sökning kunde tyvärr inte genomföras då din nuvarande plats är utanför vårt prognosområde.' />
                    : newestForecastSearch.hours
                        ? <View>
                          {weatherWarningsInDistrict[0]
                              ? <BoxContainer>
                                <TouchableHighlight
                                  underlayColor={style.COL_WHITE}
                                  onPress={() => navigation.navigate('Varningar')}
                                  >
                                  <Warning
                                    location={
                                        weatherWarningsInDistrict[0].location +
                                          ' (' +
                                          weatherWarningsInDistrict.length +
                                          ' varningar)'
                                      }
                                    message={weatherWarningsInDistrict[0].message}
                                    />
                                </TouchableHighlight>
                              </BoxContainer>
                              : null}
                          <CurrentForecast
                            location={currentLocation.suburb ? currentLocation.suburb : currentLocation.city}
                            getNewLocation={() => this.getLocation()}
                            currentHour={
                                newestForecastSearch.hours.find(hour => parseInt(hour.time) === currentHour) ||
                                  newestForecastSearch.hours.find(hour => hour)
                              }
                            />
                          <ForecastHours
                            forecastDay={new Date().getHours() === 23 ? 1 : 0}
                            hours={newestForecastSearch.hours}
                            longitude={currentLocation.longitude}
                            latitude={currentLocation.latitude}
                            />
                          <ForecastHours
                            forecastDay={new Date().getHours() === 23 ? 2 : 1}
                            hours={newestForecastSearch.hours}
                            longitude={currentLocation.longitude}
                            latitude={currentLocation.latitude}
                            />
                        </View>
                        : timesUp
                            ? <FetchFailed text='Kunde inte ladda din väderdata, kontrollera att du är ansluten till internet.' />
                            : <Loading message={'Laddar din väderdata...'} />}
        </ScrollView>
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    forecasts: state.weather.forecasts,
    currentLocation: state.weather.currentLocation,
    weatherWarnings: state.weather.weatherWarnings,
    weatherWarningsInDistrict: state.weather.weatherWarningsInDistrict
  }
}

export default connect(mapStateToProps)(StartPage)
