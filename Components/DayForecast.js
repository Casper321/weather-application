import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'
import Wind from './Wind'
import Rain from './Rain'

const DayForecast = ({ day, degrees, weatherType, amountRain, windSpeed, windGust }) => {
  return (
    <View style={[s.col_bg_white, s.w, s.mlA, s.mrA, s.br0]}>
      <View style={[s.bbw, s.bc, s.flexJce, s.pa1]}>
        <Text style={[s.ml1, s.fz1, s.fw1, s.col_black]}>{day}</Text>
      </View>
      <View style={[s.flexDr, s.flexJsa, s.flexAfe, s.pb5]}>
        <Text style={[s.col_black, s.fw1, s.fz3]}>{degrees}°</Text>
        <View>
          <Text style={[s.tac, s.fz2, s.col_black, s.mt2, s.mb2]}>{weatherType}</Text>
          <FontAwesome style={weatherType} name='sun-o' size={style.ICON_SIZE_LARGE} color={style.COL_YELLOW_SUN} />
        </View>
        <View>
          <Rain amountRain={amountRain} />
          <Wind windSpeed={windSpeed} windGust={windGust} />
        </View>
      </View>
    </View>
  )
}

export default DayForecast
