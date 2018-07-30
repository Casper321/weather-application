import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import CityHeader from '../../Components/CityHeader'
import Header10Days from './Components/Header10Days'
import ForecastDays from '../../Components/ForecastDays'
import { connect } from 'react-redux'
import Loading from '../../Components/Loading';

class TenDaysForecastPage extends Component {

  render () {
    
    const { forecasts } = this.props
    const newestForecastSearch = forecasts[forecasts.length - 1] || {}


    return (
      <Container>
        <Header navigation={this.props.navigation} />
        {newestForecastSearch.hours ? (
        <ScrollView>
          <CityHeader city={'Göteborg'} />
          <Header10Days />
          <ForecastDays days={newestForecastSearch.hours} />
        </ScrollView>
        ) : <Loading message={'Laddar din väderdata...'} />}
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    forecasts: state.weather.forecasts
  }
}

export default connect(mapStateToProps)(TenDaysForecastPage)
