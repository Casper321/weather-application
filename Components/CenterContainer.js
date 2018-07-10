import React from 'react'
import { View, StyleSheet } from 'react-native'
import s from '../Assets/style'

const CenterContainer = ({ children }) => {
  return (
    <View style={[s.abs, s.flexJce, s.flexAce, s.container]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})

export default CenterContainer
