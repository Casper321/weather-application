import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import getWeatherIcon from '../Assets/Functions/getWeatherIcon'
import s from '../Assets/style'
import * as style from '../Assets/style'

const ForecastDay = ({ day, date, tempHigh, tempLow, weatherTypeNumNight, weatherTypeNumDay, totalRain, hoursLeft }) => {
  const iconNight = getWeatherIcon(parseInt(weatherTypeNumNight), style.ICON_SIZE_MEDIUM, false)
  const iconDay = getWeatherIcon(parseInt(weatherTypeNumDay), style.ICON_SIZE_MEDIUM, true)

  return (
    <View style={[s.flexDr, s.flexJsb, s.flexAce, s.pl2, s.pr2, s.pb0, s.pt0, s.bbw, s.bc]}>
      <View style={[s.flex3]}>
        <Text style={[s.col_black, s.fw1, s.fz1]}>
          {day}
        </Text>
        <Text style={[s.fz0, s.col_dark_grey]}>
          {date}
        </Text>
      </View>
      <View style={[s.flexDr, s.flexJce, s.flexAce, s.flex5]}>
        <Text style={[s.col_black, s.fw1, s.fz1, styles.tempH]}>
          {Math.round(tempHigh)}°
        </Text>
        <Text style={[s.col_dark_grey, s.fw1, s.fz1, styles.tempL]}>
          {Math.round(tempLow)}°
        </Text>
      </View>
      <View style={[s.flexDr, s.flexJsb, s.mr1, s.flex5]}>
        <View style={[styles.weatherNatt]}>
          {iconNight}
        </View>
        <View style={[styles.weatherDag]}>
          {iconDay}
        </View>
      </View>

      <View style={[s.flexJce, s.flexAfe, s.flex4]}>
        <Text style={[s.col_black, s.fw1, s.fz1]}>
          {totalRain}
        </Text>
        <Text style={[s.fz0, s.col_dark_grey]}>
          mm/{hoursLeft}h
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherNatt: {
    left: 6
  },
  weatherDag: {
    right: 10
  },
  tempH: {
    left: -10
  },
  tempL: {
    right: -2
  }
})

export default ForecastDay
