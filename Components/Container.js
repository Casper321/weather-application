import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import s from '../Assets/style'

const Container = ({ children, noPadding = false, style = {} }) => {
  return (
    <View style={[s.flex1, s.col_bg_grey, noPadding ? {} : styles.container, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' && Platform.Version >= 20 ? 24 : 0
  }
})

export default Container
