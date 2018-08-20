import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as style from '../Assets/style'
import s from '../Assets/style'

const Title = ({ text, styles = {} }) => {
  return (
    <Text style={[s.col_black, s.fw1, s.fz1, s.mb1, ...styles]}>
      {text}
    </Text>
  )
}

export default Title
