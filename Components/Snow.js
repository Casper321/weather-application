import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'

const Snow = ({ amountSnow }) => {
  return (
    <View style={[s.flexDr, s.flexJsa, s.flexAce]}>
      <FontAwesome name='snowflake-o' size={style.ICON_SIZE_SMALL} color={style.COL_BLACK} />
      <Text style={[s.fz1, s.fw1, s.col_black, s.ml1] }>{amountSnow}</Text>
      <Text style={[s.ml1]}>mm/h</Text>
    </View>
  )
}

export default Snow
