import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BoxContainer from '../../../Components/BoxContainer'
import s from '../../../Assets/style'

const Header10Days = () => {
  return (
    <BoxContainer>
      <View style={[s.col_bg_white, s.w, s.flexDr, s.flexJsb, s.mlA, s.mrA]}>
        <Text style={[s.pa1, s.fz0, s.fw1, s.maA]}>
          DAG
        </Text>
        <View style={[s.pa1, s.flexDc]}>
          <Text style={[s.fz0, s.fw1, s.tac]}>
            TEMP.
          </Text>
          <View style={[s.flexDr, s.flexJsb]}>
            <Text style={[s.fz0, s.fw0, s.col_dark_grey, styles.tempH]}>
              H
            </Text>
            <Text style={[s.fz0, s.fw0, s.col_dark_grey, styles.tempL]}>
              L
            </Text>
          </View>
        </View>
        <View style={[s.pa1, s.flexDc]}>
          <Text style={[s.fz0, s.fw1, s.tac]}>
            VÄDER
          </Text>
          <View style={[s.flexDr, s.flexJsb]}>
            <Text style={[s.fz0, s.fw0, s.col_dark_grey, styles.weatherNatt]}>
              Natt
            </Text>
            <Text style={[s.fz0, s.fw0, s.col_dark_grey, styles.weatherDag]}>
              Dag
            </Text>
          </View>
        </View>
        <Text style={[s.pa1, s.fz0, s.fw1]}>
          NEDERB.
        </Text>
      </View>
    </BoxContainer>
  )
}

const styles = StyleSheet.create({
  weatherNatt: {
    left: -10
  },
  weatherDag: {
    right: -10
  },
  tempH: {
    left: -5
  },
  tempL: {
    right: -5
  }
})

export default Header10Days
