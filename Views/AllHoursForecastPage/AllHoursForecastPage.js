import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Container from '../../Components/Container'
import BackHeader from '../../Components/BackHeader'
import ForecastAllHours from '../../Components/ForecastAllHours'
import { connect } from 'react-redux'
import Loading from '../../Components/Loading'

class AllHoursForecastPage extends Component {
  render () {
    const { forecasts, currentLocation } = this.props
    const newestForecastSearch = forecasts[forecasts.length - 1] || {}

    return (
      <Container>
        <BackHeader
          navigation={this.props.navigation}
          currentLocation={currentLocation}
        />
        {newestForecastSearch.hours
          ? <ScrollView>
            <ForecastAllHours
              forecastDay={0}
              hours={newestForecastSearch.hours}
              />
            <ForecastAllHours
              forecastDay={1}
              hours={newestForecastSearch.hours}
              />
              <ForecastAllHours
              forecastDay={2}
              hours={newestForecastSearch.hours}
              />
              <ForecastAllHours
              forecastDay={3}
              hours={newestForecastSearch.hours}
              />
              <ForecastAllHours
              forecastDay={4}
              hours={newestForecastSearch.hours}
              />
              <ForecastAllHours
              forecastDay={5}
              hours={newestForecastSearch.hours}
              />
              <ForecastAllHours
              forecastDay={6}
              hours={newestForecastSearch.hours}
              />
               <ForecastAllHours
              forecastDay={7}
              hours={newestForecastSearch.hours}
              />
              <ForecastAllHours
              forecastDay={8}
              hours={newestForecastSearch.hours}
              />
               <ForecastAllHours
              forecastDay={9}
              hours={newestForecastSearch.hours}
              />
          </ScrollView>
          : <Loading message={'Laddar din väderdata...'} />}
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    forecasts: state.weather.forecasts
  }
}

export default connect(mapStateToProps)(AllHoursForecastPage)
