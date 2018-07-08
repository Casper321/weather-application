import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'

const Header = () => {
  return (
    <View style={[styles.header, s.pt2, s.pb2, s.col_bg_white, s.flexDr, s.flexJsb, s.flexAce]}>
      <View style={[s.flex1, s.ml3]}>
        <Entypo name='info' size={style.ICON_SIZE_SMALL} color={style.COL_PRIMARY} />
      </View>
      <View>
        <Text style={[s.flex1, s.fz2, s.fw2, s.col_primary]}>WeatherPro</Text>
      </View>
      <View style={[s.mr3, s.flex1, s.flexDr, s.flexJfe]}>
        <FontAwesome style={[s.mr3]} name='search' color={style.COL_PRIMARY} size={style.ICON_SIZE_SMALL} />
        <FontAwesome name='map-marker' color={style.COL_PRIMARY} size={style.ICON_SIZE_SMALL} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 2,
    borderBottomColor: style.COL_PRIMARY
  }
})

export default Header
