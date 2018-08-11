import React from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import s from '../Assets/style'
import * as style from '../Assets/style'

const ForecastHeader = ({ day = null, date = null }) => {
  return (
    <View style={[s.flexDr, s.flexJsb, s.flexAce, s.bbw, s.bc, s.pa1]}>
      <Text style={[s.ml1, s.fz1, s.fw2]}>
        {day + ' ' + date}
      </Text>
    </View>
  )
}

export default ForecastHeader
