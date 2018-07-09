import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import CityHeader from './Components/CityHeader'
import Warning from './Components/Warning'
import DayForecast from '../../Components/DayForecast'
import ForecastHours from '../../Components/ForecastHours'
import Loading from '../../Components/Loading'

import forecastData from '../../Assets/test-api.json'
import getWeatherCondition from '../../Assets/Functions/getWeatherCondition'
import getDayFromDayIndex from '../../Assets/Functions/getDayFromDayIndex'

export default class StartPage extends Component {
  state = {
    forecasts: []
  }

  componentDidMount () {
    this.getWeatherForecast('Göteborg', 123, 456)
  }

  /* async */ getWeatherForecast (city, latitude, longitude) {
    // TODO: convert city name to coordinates **//
    // TODO: add search field functionality
    // CURRENTLY: using example api call

    // const lat = 57.708
    // const long = 11.974

    // const api_call = await fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`)
    // const forecastData = await api_call.json()

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
    const { forecasts } = this.state

    return (
      <Container>
        <Header />
        <ScrollView>
          <CityHeader city={'Göteborg'} />
          <Warning message={'1 risk för västra Götalands län, Bohuslän och Göteborg.'} />
          {forecasts.hours ? <DayForecast hours={forecasts.hours} /> : <Loading message={'Laddar väderdata...'} />}
          {forecasts.hours ? <ForecastHours hours={forecasts.hours} /> : <Loading message={'Laddar väderdata...'} />}
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
