import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons/'
import * as style from '../../../Assets/style'
import s from '../../../Assets/style'

const Warning = ({ location = '' , typeOfWarning = 'warning', message = "Ingen varning"}) => {
  return (
    <View style={[s.br, s.w, s.mlA, s.mrA, s.pa2, s.mb3, s.mt1, s.col_bg_white, s.flexDr, s.flexJsb, s.flexAce, s.bbw, s.bc]}>
      <View style={[styles.warningIconContainer, s.flex2]}>
        <View style={[styles.center, styles.flexOne]}>
          <FontAwesome name='circle-thin' color={style.COL_WARNING} size={50} />
        </View>
        <View>
          <FontAwesome //MaterialCommunityIcons sen
            style={[styles.warningFire, s.abs]}
            name= {typeOfWarning}
            color={style.COL_PRIMARY}
            size={style.ICON_SIZE_SMALL}
          />
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

 /*
    Behöver ta in en prop "typeOfWarning" som byter icon beroende på vilken varning det är, just nu fungerar den endast för eld.
    */
export default Warning