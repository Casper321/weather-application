import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableHighlight } from 'react-native'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'

const Header = ({ navigation }) => {
  console.log(typeof navigation)

  return (
    <View style={[s.pt2, s.pb2, s.col_bg_white, s.flexDr, s.flexJsb, s.flexAce, s.boxSh]}>
      <View style={[s.flex1, s.ml3]}>
        <Entypo name='info' size={style.ICON_SIZE_SMALL} color={style.COL_PRIMARY} />
      </View>
      <View>
        <Text style={[s.flex1, s.fz2, s.fw2, s.col_primary]}>WeatherPro</Text>
      </View>
      <View style={[s.mr3, s.flex1, s.flexDr, s.flexJfe]}>
        <TouchableHighlight onPress={() => navigation.navigate('Sök')}>
          <FontAwesome style={[s.mr3]} name='search' color={style.COL_PRIMARY} size={style.ICON_SIZE_SMALL} />
        </TouchableHighlight>
        <FontAwesome name='map-marker' color={style.COL_PRIMARY} size={style.ICON_SIZE_SMALL} />
      </View>
    </View>
  )
}

Header.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Header
