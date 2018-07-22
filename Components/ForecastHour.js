import React from 'react'
import { Text, View } from 'react-native'
import Wind from './Wind'
import getWeatherIcon from '../Assets/Functions/getWeatherIcon'
import s from '../Assets/style'
import * as style from '../Assets/style'

const ForecastHour = ({ time, weatherType, weatherTypeNum, temperature, rain, windSpeed, windGust }) => {
  const icon = getWeatherIcon(parseInt(weatherTypeNum), style.ICON_SIZE_MEDIUM)
  

  return (
    <View style={[s.flexDr, s.flexJce, s.flexAce, s.pl1, s.pr1, s.pb0, s.pt0, s.bc, parseInt(time) !== 23 && s.bbw]}>
      <View style={[s.flex2]}>
        <Text style={[s.col_black, s.fw1, s.fz1]}>
          kl. {time}
        </Text>
        <Text style={[s.fz0, s.col_dark_grey]}>
          {weatherType}
        </Text>
      </View>
      <View style={[s.flexJce, s.flexAce, s.flex1]}>
        <Text style={[s.col_black, s.fw1, s.fz1]}>{Math.round(temperature)}°</Text>
      </View>
      <View style={[s.flex1, s.flexDr, s.flexJce, s.mr1]}>
        {icon}
      </View>
      <Wind windSpeed={windSpeed} windGust={windGust} />
      <View style={[s.flexJce, s.flexAce, s.flex1]}>
        <Text style={[s.col_black, s.fw1, s.fz1]}>
          {rain}
        </Text>
        <Text style={[s.fz0, s.col_dark_grey]}>
          mm/h
        </Text>
      </View>
    </View>
  )
}

export default ForecastHour
