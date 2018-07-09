import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import * as style from '../Assets/style'
import s from '../Assets/style'

const Loading = ({ message = null }) => {
  return (
    <View style={[s.flexJce, s.flexAce, s.mt2, s.mb2]}>
      <Text style={[s.fz0, s.mb2, s.fw1, s.col_secondary]}>{message}</Text>
      <ActivityIndicator size='large' color={style.COL_SECONDARY} />
    </View>
  )
}

export default Loading
