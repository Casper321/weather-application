import React from 'react'
import { Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'

const Wind = ({ windSpeed, windGust, windDirection }) => {
  return (
    <View style={[s.flexDr, s.flexJsa]}>
      <View style={[s.flexJce, s.flexAce, s.mr1]}>
        {windDirection &&
          <FontAwesome
            style={{ transform: [{ rotate: `${windDirection + 180}deg` }] }}
            name='long-arrow-up'
            size={style.ICON_SIZE_SMALL}
            color={style.COL_BLACK}
          />}
      </View>
      <View style={[s.ml0, s.flexAce]}>
        <View style={[s.flexDr, s.flexAce]}>
          <Text style={[s.fz1, s.fw1, s.col_black, s.mr0]}>{Math.round(windSpeed)}</Text>
          <Text style={[s.fw1, s.col_dark_grey]}>({Math.round(windGust)})</Text>
        </View>
        <Text>m/s</Text>
      </View>
    </View>
  )
}

export default Wind
