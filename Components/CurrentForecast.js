import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'
import Wind from './Wind'
import Rain from './Rain'
import Snow from './Snow'
import getMonth from '../Assets/Functions/getMonth'
import unformatDayHours from '../Assets/Functions/unformatDayHours'
import BoxContainer from './BoxContainer'

const CurrentForecast = ({ currentHour }) => {
  const { day, temp, weatherType, weatherTypeNum, averageRain, windSpeed, windGust } = currentHour
  const icon = getWeatherIcon(parseInt(weatherTypeNum), style.ICON_SIZE_LARGE)

  return (
    <BoxContainer>
      <View style={[s.br0]}>
        <View style={[s.bbw, s.bc, s.flexJce, s.pa1]}>
          <Text
            style={[s.ml1, s.fz1, s.fw1, s.col_black]}
          >{`Idag ${unformatDayHours(currentHour.month)} ${getMonth(currentHour.month)} klockan ${currentHour.time}`}</Text>
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
    </BoxContainer>
  )
}

CurrentForecast.propTypes = {
  currentHour: PropTypes.object.isRequired
}

export default CurrentForecast
