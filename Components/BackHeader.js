import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableHighlight, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'

const BackHeader = ({ stackNavigation, title }) => {
  const handleBack = () => {
    const { goBack } = stackNavigation
    goBack()
  }

  return (
    <View style={[s.pt2, s.pb2, s.col_bg_google_blue, s.flexDr, s.flexJsb, s.flexAce, s.boxSh]}>
      <View style={[s.ml3]}>
        <TouchableHighlight onPress={() => handleBack()} underlayColor={style.COL_GREY}>
          <MaterialIcons name='keyboard-backspace' size={style.ICON_SIZE_MEDIUM} color={style.COL_WHITE} />
        </TouchableHighlight>
      </View>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={[s.fz2, s.fw1, s.col_white]}>{title}</Text>
      </View>
    </View>
  )
}

BackHeader.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default BackHeader
