import React from 'react'
import PropTypes from 'prop-types'
import {View, TouchableHighlight } from 'react-native'
import {MaterialIcons } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'

const BackHeader = ({ navigation, updateWeather }) => {
  return (
    <View style={[s.pt2, s.pb2, s.col_bg_white, s.flexDr, s.flexJsb, s.flexAce, s.boxSh]}>
      <View style={[s.flex1, s.ml3]}>
        <TouchableHighlight onPress={() => navigation.navigate('Långprognos')} underlayColor={style.COL_GREY}>
          <MaterialIcons name='keyboard-backspace' size={style.ICON_SIZE_MEDIUM} color={style.COL_PRIMARY} />
        </TouchableHighlight>
      </View>
    </View>
  )
}

BackHeader.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default BackHeader
