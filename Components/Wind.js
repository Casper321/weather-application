import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'

const Wind = ({ windSpeed, windGust }) => {
  return (
    <View style={styles.container}>
      <View>
        <FontAwesome name='circle-thin' size={style.ICON_SIZE_MEDIUM} color={style.COL_DARK_GREY} />
        <Text style={[styles.weatherValue, styles.weatherWindValue]}>{windSpeed}</Text>
      </View>
      <View style={styles.windValues}>
        <Text style={styles.windSpeed}>{windGust}</Text>
        <Text>m/s</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8
  },
  weatherValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 6
  },
  weatherWindValue: {
    position: 'absolute',
    right: 11,
    bottom: 11
  },
  windValues: {
    marginLeft: 7,
    alignItems: 'center'
  },
  windSpeed: {
    fontWeight: '600'
  }
})

export default Wind
