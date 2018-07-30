import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import CurrentForecast from '../../Components/CurrentForecast'
import ForecastHours from '../../Components/ForecastHours'
import Loading from '../../Components/Loading'

import forecastData from '../../Assets/test-api.json'
import getWeatherCondition from '../../Assets/Functions/getWeatherCondition'
import getDayFromDayIndex from '../../Assets/Functions/getDayFromDayIndex'
import { Location, Permissions } from 'expo'

import { connect } from 'react-redux'
import { weatherActions } from '../../Redux/WeatherReducer'

class StartPage extends Component {
  state = {
    hasLocationPermission: false
  }

  async componentDidMount () {
    const { currentLatitude, currentLongitude } = await this.getLocation()
    this.getWeatherForecast('', currentLatitude, currentLongitude)
    this.getLocationFromCoordinates(currentLatitude, currentLongitude)
    this.getWarningForecast()
  }

  getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({ hasLocationPermission: false })
    } else {
      this.setState({ hasLocationPermissions: true })
    }

    const location = await Location.getCurrentPositionAsync({})
    const currentLatitude = Number.parseFloat(location.coords.latitude).toPrecision(5)
    const currentLongitude = Number.parseFloat(location.coords.longitude).toPrecision(5)

    this.props.dispatch(
      weatherActions.setCurrentCoordinates({
        latitude: currentLatitude,
        longitude: currentLongitude
      })
    )
    return { currentLatitude, currentLongitude }
  }

  getLocationFromCoordinates = (latitude, longitude) => {
    if (latitude && longitude) {
      const request = new XMLHttpRequest()
      request.open(
        'GET',
        `https://eu1.locationiq.org/v1/reverse.php?key=102c0e44882475&lat=${latitude}&lon=${longitude}&format=json`,
        true
      )
      request.onload = () => {
        var data = JSON.parse(request.response)
        const newLocation = {}
        newLocation.latitude = data.lat
        newLocation.longitude = data.lon
        newLocation.city = data.address.city
        newLocation.suburb = data.address.suburb

        this.props.dispatch(
          weatherActions.setCurrentCity({
            city: data.address.city,
            suburb: data.address.suburb
          })
        )
      }
      request.send(null)
    }
  }
  getWarningForecast = async () => {
    const api_call = await fetch(
      `https://opendata-download-warnings.smhi.se/api/version/2/alerts.json`
    )
    const warningForecastData = await api_call.json()
    let forecastWarnings = []
    

    warningForecastData.alert.forEach(warning => {
      let warningObj = {}
      warningObj.location = warning.info.headline
      warningObj.message = warning.info.description
      forecastWarnings.push(warningObj)
      
    })
    
    this.props.dispatch(weatherActions.setWeatherWarnings(forecastWarnings))  
  }

  getWeatherForecast = async (city, latitude, longitude) => {
    /*
    const api_call = await fetch(
      `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${longitude}/lat/${latitude}/data.json`
    )
    const forecastData = await api_call.json()
    */

    const newForecastResult = {
      city,
      coordinates: {
        latitude,
        longitude
      },
      hours: []
    }

    const date = new Date()
    let activeDayIndex = new Date().getDay()
    let forecastHours = []

    forecastData.timeSeries.forEach(hour => {
      let timeObj = {}

      timeObj.time = hour.validTime.slice(11, 13)
      timeObj.date = hour.validTime.slice(5, 10).replace('-', '/')
      timeObj.day = hour.validTime.slice(8, 10)
      timeObj.dayNumber = hour.validTime.slice(8, 10)
      timeObj.month = hour.validTime.slice(5, 7)
      timeObj.temp = hour.parameters.find(element => element.name === 't').values[0]
      timeObj.windSpeed = hour.parameters.find(element => element.name === 'ws').values[0]
      timeObj.windGust = hour.parameters.find(element => element.name === 'gust').values[0]
      timeObj.windDirection = hour.parameters.find(element => element.name === 'wd').values[0]
      timeObj.thunderRisk = hour.parameters.find(element => element.name === 'tstm').values[0]
      timeObj.airPressure = hour.parameters.find(element => element.name === 'msl').values[0]
      timeObj.averageRain = hour.parameters.find(element => element.name === 'pmean').values[0]
      timeObj.weatherType = getWeatherCondition(hour.parameters.find(element => element.name === 'Wsymb2').values[0])
      timeObj.weatherTypeNum = hour.parameters.find(element => element.name === 'Wsymb2').values[0]

      // Change day on midnight
      timeObj.time === '00' && activeDayIndex++
      activeDayIndex === 6 ? (activeDayIndex = 0) : null
      timeObj.day = getDayFromDayIndex(activeDayIndex)

      forecastHours.push(timeObj)
    })

    newForecastResult.hours = [...forecastHours]
    this.props.dispatch(weatherActions.addForecast(newForecastResult))
  }

  render () {
    const { forecasts, currentLocation } = this.props
    const newestForecastSearch = forecasts[forecasts.length - 1] || {}
    const currentHour = new Date().getHours() + 1

    console.log(currentLocation)

    return (
      <Container>
        <Header updateWeather={this.getWeatherForecast} navigation={this.props.navigation} />
        <ScrollView>
          {newestForecastSearch.warning && <Warning message={newestForecastSearch.warning.message} />}
          {newestForecastSearch.hours
            ? <View>
              <CurrentForecast
                location={currentLocation.suburb ? currentLocation.suburb : currentLocation.city}
                getNewLocation={() => this.getLocation()}
                currentHour={
                    newestForecastSearch.hours.find(hour => parseInt(hour.time) === currentHour) ||
                      newestForecastSearch.hours.find(hour => hour)
                  }
                />
              <ForecastHours forecastDay={0} hours={newestForecastSearch.hours} />
              <ForecastHours forecastDay={1} hours={newestForecastSearch.hours} />
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
    currentLocation: state.weather.currentLocation
  }
}

export default connect(mapStateToProps)(StartPage)

/* API KEY locationiq.com --> 102c0e44882475
  Convert location to coordinates: https://eu1.locationiq.org/v1/search.php?key=102c0e44882475&q=Göteborg&format=json
  Convert coordinates to location: https://eu1.locationiq.org/v1/reverse.php?key=102c0e44882475&lat=LATITUDE&lon=LONGITUDE&format=json
*/

/*
IDEAS:
- Kunna swipea CurrentForecast och få ett nytt card med morgondagens övermorgons forecast? Sen kunna trycka på em dag och få upp alla timmarna på den?

*/
