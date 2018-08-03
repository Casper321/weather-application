import React from 'react'
import { View, StyleSheet } from 'react-native'
import * as style from '../Assets/style'
import s from '../Assets/style'

const BoxContainer = ({ children, containerStyle = {} }, paddingize = false) => {
  return (
    <View style={[styles.container, s.mt3, s.w, s.mlA, s.mrA, s.boxSh, containerStyle, paddingize && s.pa3]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.COL_WHITE,
    borderRadius: 10
  }
})

export default BoxContainer
