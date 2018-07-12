import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import CityHeader from './Components/CityHeader'
import Warning from './Components/Warning'
import DayForecast from '../../Components/DayForecast'
import ForecastHours from '../../Components/ForecastHours'
import Loading from '../../Components/Loading'

/* import forecastData from '../../Assets/test-api.json' */
import getWeatherCondition from '../../Assets/Functions/getWeatherCondition'
import getDayFromDayIndex from '../../Assets/Functions/getDayFromDayIndex'
import { Location, Permissions } from 'expo'

export default class StartPage extends Component {
  state = {
    forecasts: [],
    currentLatitude: '',
    currentLongitude: '',
    hasLocationPermission: false
  }

  componentDidMount () {
    // Retrieve user current geolocation
    this.getLocation()
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

    this.getWeatherForecast('', currentLatitude, currentLongitude)

    this.setState({ currentLatitude, currentLongitude })
  }

  getWeatherForecast = async (city, latitude, longitude) => {
    // TODO: convert city name to coordinates, see info bottom **//
    // TODO: add search field functionality

    const api_call = await fetch(
      `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${longitude}/lat/${latitude}/data.json`
    )
    const forecastData = await api_call.json()

    const newForecastResult = {
      city,
      coordinates: {
        latitude,
        longitude
      },
      hours: []
    }

    const date = new Date()
    let activeDayIndex = date.getDay()
    let forecastHours = []

    forecastData.timeSeries.forEach(hour => {
      let timeObj = {}

      timeObj.time = hour.validTime.slice(11, 13)
      timeObj.date = hour.validTime.slice(5, 10).replace('-', '/')
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
    this.setState({ forecasts: newForecastResult })
  }

  render () {
    console.log(this.state)
    const { forecasts, currentLatitude, currentLongitude } = this.state

    return (
      <Container>
        <Header />
        <ScrollView>
          <CityHeader city={'Göteborg'} />
          {currentLatitude ? <Text>{currentLatitude}</Text> : <Loading message={'Väntar på latitude data...'} />}
          {currentLongitude ? <Text>{currentLongitude}</Text> : <Loading message={'Väntar på longitude data...'} />}

          {forecasts.warning && <Warning message={'1 risk för västra Götalands län, Bohuslän och Göteborg.'} />}
          {forecasts.hours ? <DayForecast hours={forecasts.hours} /> : <Loading message={'Laddar väderdata...'} />}
          {forecasts.hours ? <ForecastHours hours={forecasts.hours} /> : <Loading message={'Laddar väderdata...'} />}
        </ScrollView>
      </Container>
    )
  }
}

/* API KEY locationiq.com --> 102c0e44882475
  Convert location to coordinates: https://eu1.locationiq.org/v1/search.php?key=102c0e44882475&q=Göteborg&format=json
*/
