import React from 'react'
import { View, StyleSheet } from 'react-native'
import s from '../Assets/style'

const Container = ({ children, noPadding = false }) => {
  return (
    <View style={[s.flex1, s.col_bg_grey, noPadding ? {} : styles.container]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Expo.Constants.statusBarHeight
  }
})

export default Container
