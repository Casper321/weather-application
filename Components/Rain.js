import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'

const Rain = ({ amountRain }) => {
  return (
    <View style={styles.weatherType}>
      <FontAwesome name='tint' size={style.ICON_SIZE_SMALL} color={style.COL_WATER_BLUE} />
      <Text style={styles.weatherValue}>{amountRain}</Text>
      <Text style={styles.marginify}>mm/h</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherType: {
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
  marginify: {
    marginLeft: 6
  }
})

export default Rain
