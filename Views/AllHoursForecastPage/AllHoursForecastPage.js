import React, { Component } from 'react'
import { ScrollView, FlatList } from 'react-native'
import Container from '../../Components/Container'
import BackHeader from '../../Components/BackHeader'
import ForecastAllHours from '../../Components/ForecastAllHours'
import { connect } from 'react-redux'
import Loading from '../../Components/Loading'

class AllHoursForecastPage extends Component {
  componentDidMount = () => {}

  render () {
    const { forecasts, currentLocation, navigation } = this.props
    const newestForecastSearch = forecasts[forecasts.length - 1] || {}
    const arr = [
      { day: 0 },
      { day: 1 },
      { day: 2 },
      { day: 3 },
      { day: 4 },
      { day: 5 },
      { day: 6 },
      { day: 7 },
      { day: 8 },
      { day: 9 }
    ]
    return (
      <Container>
        <BackHeader stackNavigation={navigation} title='Detaljerad prognos' />
        {newestForecastSearch.hours
<<<<<<< HEAD
          ? <FlatList
            ref={ref => {
              this.flatListRef = ref
            }}
            getItemLayout={this.getItemLayout}
            data={arr}
            keyExtractor={item => item.day}
            renderItem={({ item }) => <ForecastAllHours forecastDay={item.day} hours={newestForecastSearch.hours} />}
            />
=======
          ? <ScrollView>
            <ForecastAllHours
              forecastDay={0}
              hours={newestForecastSearch.hours}
              longitude={currentLocation.longitude}
              latitude={currentLocation.latitude}              />
            <ForecastAllHours
              forecastDay={1}
              hours={newestForecastSearch.hours}
              longitude={currentLocation.longitude}
              latitude={currentLocation.latitude}
              />
              <ForecastAllHours
              forecastDay={2}
              hours={newestForecastSearch.hours}
              longitude={currentLocation.longitude}
              latitude={currentLocation.latitude}
              />
              <ForecastAllHours
              forecastDay={3}
              hours={newestForecastSearch.hours}
              longitude={currentLocation.longitude}
              latitude={currentLocation.latitude}
              />
              <ForecastAllHours
              forecastDay={4}
              hours={newestForecastSearch.hours}
              longitude={currentLocation.longitude}
              latitude={currentLocation.latitude}
              />
              <ForecastAllHours
              forecastDay={5}
              hours={newestForecastSearch.hours}
              longitude={currentLocation.longitude}
              latitude={currentLocation.latitude}
              />
              <ForecastAllHours
              forecastDay={6}
              hours={newestForecastSearch.hours}
              longitude={currentLocation.longitude}
              latitude={currentLocation.latitude}
              />
               <ForecastAllHours
              forecastDay={7}
              hours={newestForecastSearch.hours}
              longitude={currentLocation.longitude}
              latitude={currentLocation.latitude}
              />
              <ForecastAllHours
              forecastDay={8}
              hours={newestForecastSearch.hours}
              longitude={currentLocation.longitude}
              latitude={currentLocation.latitude}
              />
               <ForecastAllHours
              forecastDay={9}
              hours={newestForecastSearch.hours}
              longitude={currentLocation.longitude}
              latitude={currentLocation.latitude}
              />
          </ScrollView>
>>>>>>> Soluppgång osv
          : <Loading message={'Laddar din väderdata...'} />}
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    forecasts: state.weather.forecasts,
    currentLocation: state.weather.currentLocation,
  }
}

export default connect(mapStateToProps)(AllHoursForecastPage)
