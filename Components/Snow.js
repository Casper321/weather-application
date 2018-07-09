import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'

const Snow = ({ amountSnow }) => {
  return (
    <View style={styles.weatherType}>
      <FontAwesome name='snowflake-o' size={style.ICON_SIZE_SMALL} color={style.COL_BLACK} />
      <Text style={styles.weatherValue}>{amountSnow}</Text>
      <Text style={[s.ml1]}>mm/h</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherType: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  weatherValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 6
  }
})

export default Snow
