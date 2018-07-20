import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons/'
import * as style from '../../Assets/style'
import s from '../../Assets/style'

export default class WarningPage extends Component {
  render () {
    return (
      <Container>
        <Header />
        <View style={[s.br, s.w, s.mlA, s.mrA, s.pa2, s.mb3, s.mt1, s.col_bg_white, s.flexDr, s.flexJsb, s.flexAce]}>
      <View style={[styles.warningIconContainer, s.flex2]}>
        <View style={[styles.center, styles.flexOne]}>
          <FontAwesome name='circle-thin' color={style.COL_WARNING} size={50} />
        </View>
        <View>
          <MaterialCommunityIcons
            style={[styles.warningFire, s.abs]}
            name='fire'
            color={style.COL_PRIMARY}
            size={style.ICON_SIZE_SMALL}
          />
        </View>
      </View>
      <Text style={[s.flex8]}>
        DISPLAY WARNING HERE
      </Text>
      <View style={[s.flexOne, s.flexDr, s.flexJfe, s.flexAce]}>
        <Feather name='chevron-right' color={style.COL_PRIMARY} size={style.ICON_SIZE_MEDIUM} />
      </View>
    </View>
      </Container>
    )
  
  }
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

