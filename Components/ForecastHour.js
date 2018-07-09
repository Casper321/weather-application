import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Wind from './Wind'
import getWeatherIcon from '../Assets/Functions/getWeatherIcon'
import * as style from '../Assets/style'
import s from '../Assets/style'

const ForecastHour = ({ time, weatherType, weatherTypeNum, temperature, rain, windSpeed, windGust }) => {
  const icon = getWeatherIcon(parseInt(weatherTypeNum), style.ICON_SIZE_MEDIUM)
  // let icon = null
  return (
    <View style={styles.forecastHour}>
      <View style={[s.flex2]}>
        <Text style={[styles.textBold, s.fz1]}>
          kl. {time}
        </Text>
        <Text style={[styles.smallText, s.fz0, s.col_dark_grey]}>
          {weatherType}
        </Text>
      </View>
      <View style={[styles.forecastDayTemp, s.flex1]}>
        <Text style={[styles.textBold, s.fz1]}>{Math.round(temperature)}°</Text>
      </View>
      <View style={[styles.forecastDayIcon, s.flex1, s.flexDr, s.flexJce, s.mr1]}>
        {icon}
      </View>
      <Wind windSpeed={windSpeed} windGust={windGust} />
      <View style={[styles.forecastDayTemp, s.flex1]}>
        <Text style={[styles.textBold, s.fz1]}>
          {rain}
        </Text>
        <Text style={[styles.smallText, s.fz0, s.col_dark_grey]}>
          mm/h
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  forecastHour: {
    backgroundColor: style.COL_WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 2,
    paddingTop: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  forecastDayTemp: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBold: {
    fontSize: 18,
    fontWeight: '500',
    color: style.COL_BLACK
  }
})

export default ForecastHour
