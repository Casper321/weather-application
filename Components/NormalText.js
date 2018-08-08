import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as style from '../Assets/style'
import s from '../Assets/style'

const NormalText = ({ children, style = {}, styles = {} }) => {
  return (
    <Text style={[{ lineHeight: 20 }, styles]}>
      {children}
    </Text>
  )
}

// Can add custom styles later

export default NormalText
