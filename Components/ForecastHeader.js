import React from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import s from '../Assets/style'
import * as style from '../Assets/style'

const ForecastHeader = ({ day = null, date = null, sunriseTime, sunsetTime }) => {
  return (
    <View style={[s.flexDr, s.flexJsb, s.flexAce, s.bbw, s.bc, s.pa1]}>
      <Text style={[s.ml1, s.flexOne, s.fz1, s.fw2]}>
        {day + ' ' + date}
      </Text>
      <View style={[s.flexOne, s.flexDr, s.flexJsb, s.flexAce, s.mr2]}>
        {sunriseTime &&
          <View style={[s.flexDr, s.flexJsa, s.flexAce]}>
            <Feather name='sunrise' size={style.ICON_SIZE_SMALL} color={style.COL_YELLOW_SUN} />
            <Text style={[s.ml1, s.col_black]}>
              {sunriseTime}
            </Text>
          </View>}
        {sunsetTime &&
          <View style={[s.flexOne, s.ml2, s.mr1, s.flexDr, s.flexJsb, s.flexAce]}>
            <Feather name='sunset' size={style.ICON_SIZE_SMALL} color={style.COL_YELLOW_SUN} />
            <Text style={[s.ml1, s.col_black]}>
              {sunsetTime}
            </Text>
          </View>}
      </View>
    </View>
  )
}

export default ForecastHeader
