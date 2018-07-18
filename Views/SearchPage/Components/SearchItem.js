import React from 'react'
import { Text, View } from 'react-native'
import s from '../../../Assets/style'
import * as style from '../../../Assets/style'

const SearchItem = ({ city, longerLocationName }) => {
  return (
    <View style={[s.pa2, s.flexJce, s.bbw, s.bc, s.w]}>
      <Text style={[s.fz1]}>{city}</Text>
      <Text style={[s.col_dark_grey, s.fz0]}>{longerLocationName}</Text>
    </View>
  )
}

export default SearchItem
