import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'
import Wind from './Wind'
import Rain from './Rain'
import Snow from './Snow'

const DayForecast = ({ hours }) => {
  const { day, temp, weatherType, weatherTypeNum, averageRain, windSpeed, windGust } = hours[0]
  const icon = getWeatherIcon(parseInt(weatherTypeNum), style.ICON_SIZE_LARGE)

  return (
    <View style={[s.col_bg_white, s.w, s.mlA, s.mrA, s.mb3, s.br0]}>
      <View style={[s.bbw, s.bc, s.flexJce, s.pa1]}>
        <Text style={[s.ml1, s.fz1, s.fw1, s.col_black]}>{day}</Text>
      </View>
      <View style={[s.flexDr, s.flexJsa, s.flexAfe, s.pb5]}>
        <Text style={[s.col_black, s.fw1, s.fz3]}>{Math.round(temp)}°</Text>
        <View style={[s.flexAce]}>
          <Text style={[s.tac, s.fz2, s.col_black, s.mt2, s.mb2]}>{weatherType}</Text>
          {icon}
        </View>
        <View style={[s.flexJsb, s.flexAfs]}>
          <Rain amountRain={averageRain} />
          <Wind windSpeed={windSpeed} windGust={windGust} />
          <Snow amountSnow={0} />
        </View>
      </View>
    </View>
  )
}

export default DayForecast
