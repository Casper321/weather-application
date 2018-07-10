import React from 'react'
import { View } from 'react-native'
import s from '../Assets/style'


const Container = ({ children }) => {
  return (
    <View style={[s.flex1, s.col_bg_grey]}>
      {children}
    </View>
  )
}

export default Container
