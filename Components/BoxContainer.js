import React from 'react'
import { View, StyleSheet } from 'react-native'
import * as style from '../Assets/style'
import s from '../Assets/style'

const BoxContainer = ({ children }) => {
  return (
    <View style={[styles.container, s.mt3, s.w, s.mlA, s.mrA, s.boxSh]}>
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
