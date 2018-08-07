import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons/'
import * as style from '../Assets/style'
import s from '../Assets/style'

const CityHeader = ({ city }) => {
  return (
    <View style={[s.flexDr, s.flexJsb, s.flexAce, s.pt2]}>
      <View style={[s.flexDr, s.flexJsa, s.flexAce, s.flex1]}>
        <FontAwesome name='star-o' color={style.COL_PRIMARY} size={style.ICON_SIZE_MEDIUM} />
        <Text style={[s.ml2, s.fz3, s.fw1]}>{city}</Text>
      </View>
      <View style={[s.flex1, s.flexAfe]}>
        <MaterialCommunityIcons name='pin' color={style.COL_PRIMARY} size={style.ICON_SIZE_XS} />
      </View>
    </View>
  )
}

CityHeader.propTypes = {
  city: PropTypes.string
}

export default CityHeader
