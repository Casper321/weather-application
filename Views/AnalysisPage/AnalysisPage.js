import React, { Component } from 'react'
import { ScrollView, StyleSheet, View, Button, Linking } from 'react-native'
import LineChart from 'react-native-responsive-linechart'
import Container from '../../Components/Container'
import BoxContainer from '../../Components/BoxContainer'
import Header from '../../Components/Header'
import { connect } from 'react-redux'

import s from '../../Assets/style'
import * as style from '../../Assets/style'
import Title from '../../Components/Title'
import NormalText from '../../Components/NormalText'

class AnalysisPage extends Component {
  render () {
    const { forecasts } = this.props
    const newestForecastSearch = forecasts[forecasts.length - 1] || {}
    const days = newestForecastSearch.hours
    // Array holding weather forecast data for 10 days
    let tenDays
    if (new Date().getHours() === 23) {
      tenDays = [
        getDayHoursForecast(1, days),
        getDayHoursForecast(2, days),
        getDayHoursForecast(3, days),
        getDayHoursForecast(4, days),
        getDayHoursForecast(5, days),
        getDayHoursForecast(6, days),
        getDayHoursForecast(7, days),
        getDayHoursForecast(8, days),
        getDayHoursForecast(9, days),
      ]
    } else {
      tenDays = [
        getDayHoursForecast(0, days),
        getDayHoursForecast(1, days),
        getDayHoursForecast(2, days),
        getDayHoursForecast(3, days),
        getDayHoursForecast(4, days),
        getDayHoursForecast(5, days),
        getDayHoursForecast(6, days),
        getDayHoursForecast(7, days),
        getDayHoursForecast(8, days),
        getDayHoursForecast(9, days),
      ]
    }

    const tempMidday = []
    const labelMidday = []

    tenDays.forEach(day => {
      day.forEach(hour => {
        if(parseInt(hour.time) === 12) {
         tempMidday.push(hour.temp)
         labelMidday.push(hour.day.slice(0, 3))
        }
      })
    })
    
    const config = {
      line: {
        visible: true,
        strokeWidth: 5,
        strokeColor: '#216D99'
      },
      area: {
        visible: false
      },
      yAxis: {
        visible: true,
        labelFormatter: v => String(v) + ' °C'
      },
      xAxis: {
        visible: true
      },
      grid: {
        strokeColor: '#c8d6e5',
        stepSize: 2
      },
      interpolation: 'spline',
      insetY: 10,
      insetX: 30
    }
    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <ScrollView contentContainerStyle={[s.pb3]}>
          <BoxContainer containerStyle={styles.containerStyle}>
            <Title text='Under utveckling' />
            <NormalText>
              Spännande funktionalitet kommer läggas till i kommande uppdateringar.
              Hör gärna av dig med önskemål!
            </NormalText>
            <View style={[s.flexJce, s.flexAfs, s.mt2]}>
              <Button
                style={[s.col_water_blue, s.pb2]}
                onPress={() =>
                  Linking.openURL('mailto:kontakta.native@gmail.com')}
                title='Kontakta oss'
              />
            </View>
          </BoxContainer>
          <ScrollView style={[s.mt2, s.mb2]} horizontal decelerationRate={0}>
            <BoxContainer containerStyle={styles.containerStyle}>
              <Title text='Temperatur kl: 12:00' style={[s.flexJce]} />  
              <View style={{ height: 350, width: 500, marginBottom: 12}}>
                <LineChart
                  style={{ flex: 1 }}
                  config={config}
                  data={tempMidday}
                  xLabels={labelMidday}
                />
              </View>
            </BoxContainer>
          </ScrollView>
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: style.SPACING_M,
    paddingBottom: style.SPACING_M,
    marginBottom: style.SPACING_M,
    paddingLeft: style.SPACING_M,
    paddingRight: style.SPACING_M
  }
})

function mapStateToProps (state) {
  return {
    forecasts: state.weather.forecasts
  }
}

export default connect(mapStateToProps)(AnalysisPage)
