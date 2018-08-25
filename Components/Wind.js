import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'
import CenterContainer from './CenterContainer'

const Wind = ({ windSpeed, windGust, windDirection }) => {
  console.log(`${windDirection}deg`)

  return (
    <View style={[s.flexDr, s.flexJsa]}>
      <View style={[s.flexJce, s.flexAce, s.mr0]}>
        {windDirection &&
          <FontAwesome
            style={{ transform: [{ rotate: `${windDirection}deg` }] }}
            name='long-arrow-right'
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

const styles = StyleSheet.create({
  weatherWindValue: {
    position: 'absolute',
    right: 9,
    bottom: 11
  }
})

export default Wind
