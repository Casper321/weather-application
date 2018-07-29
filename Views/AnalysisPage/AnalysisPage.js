import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import { connect } from 'react-redux'
import ForecastHours from '../../Components/ForecastHours'

class AnalysisPage extends Component {
  render () {
    const { currentLocation, forecasts } = this.props

    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          {forecasts.hours
            ? <View>
              <ForecastHours forecastDay={0} hours={forecasts.hours} />
              <ForecastHours forecastDay={1} hours={forecasts.hours} />
            </View>
            : <Loading message={'Laddar din väderdata...'} />}
        </ScrollView>
        {currentLocation
          ? <View>
            <Text>{currentLocation.city}</Text>
            <Text>{currentLocation.suburb}</Text>
            <Text>{currentLocation.latitude}</Text>
            <Text>{currentLocation.longitude}</Text>
          </View>
          : null}
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentLocation: state.weather.currentLocation,
    forecasts: state.weather.forecasts[state.weather.forecasts.length - 1]
  }
}

export default connect(mapStateToProps)(AnalysisPage)
