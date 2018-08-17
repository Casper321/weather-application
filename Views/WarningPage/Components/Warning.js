import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons'
import * as style from '../../../Assets/style'
import s from '../../../Assets/style'
import getWarningIcon from '../../../Assets/Functions/getWarningIcon'

const Warning = ({ location = '', typeOfWarning = 'warning' }) => {
  return (
    <View style={[s.pa2, s.w, s.flexDr, s.flexJsb, s.flexAce]}>
      <View style={[s.flex2]}>
        <View style={[styles.center, styles.flexOne]}>
          <FontAwesome name='circle-thin' color={style.COL_WARNING} size={50} />
        </View>
        <View>
          {(icon = getWarningIcon(typeOfWarning))}
        </View>
      </View>
      <Text style={[s.flex8]}>
        {location}
      </Text>
      <View style={[s.flexOne, s.flexDr, s.flexJfe, s.flexAce]}>
        <Feather name='chevron-right' color={style.COL_PRIMARY} size={style.ICON_SIZE_MEDIUM} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  warningIconContainer: {
    height: 50,
    width: 50
  },
  warningFire: {
    top: -37,
    left: 10
  }
})

export default Warning
