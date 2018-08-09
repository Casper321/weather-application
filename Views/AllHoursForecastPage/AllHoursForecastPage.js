import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import Container from '../../Components/Container'
import BackHeader from '../../Components/BackHeader'
import CityHeader from '../../Components/CityHeader'
import ForecastDays from '../../Components/ForecastDays'
import { connect } from 'react-redux'
import Loading from '../../Components/Loading'

class AllHoursForecastPage extends Component {
  render () {
    const { forecasts } = this.props
    const newestForecastSearch = forecasts[forecasts.length - 1] || {}

    return (
      <Container>
        <BackHeader navigation={this.props.navigation} />
        {newestForecastSearch.hours
          ? <ScrollView>
            <CityHeader city={'Göteborg'} />
            <ForecastDays days={newestForecastSearch.hours} navigation={this.props.navigation} />
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
