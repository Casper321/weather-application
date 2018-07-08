import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'

const Wind = ({ windSpeed, windGust }) => {
  return (
    <View style={[s.flexDr, s.flexJsa, s.mt2]}>
      <View>
        <FontAwesome name='circle-thin' size={style.ICON_SIZE_MEDIUM} color={style.COL_DARK_GREY} />
        <Text style={[s.fz1, s.fw1, s.col_black, s.ml2, styles.weatherWindValue]}>{windSpeed}</Text>
      </View>
      <View style={[s.ml0, s.flexAce]}>
        <Text style={[s.fw2]}>({windGust})</Text>
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
