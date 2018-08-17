import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'

class Header extends Component {
  render () {
    const { navigation, updateWeather, currentLocation } = this.props

    return (
      <View style={[s.pt2, s.pb2, s.col_bg_google_blue, s.flexDr, s.flexJsb, s.flexAce, s.boxSh]}>
        <View style={[s.flex1, s.ml3, s.flexJce, s.flexAce]}>
          <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
            <Ionicons name='ios-menu' size={style.ICON_SIZE_MEDIUM} color={style.COL_WHITE} />
          </TouchableWithoutFeedback>
        </View>
        <View style={[s.col_dark_grey, s.flex4, s.mrA, s.flexJce, s.ml2]}>
          <Text style={[s.flex1, s.fz2, s.fw1, s.col_white]}>{currentLocation.city || currentLocation.suburb}</Text>
        </View>
        <View style={[s.flex3, s.flexDr, s.flexJfe]}>
          <View style={[s.mr3]}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Sök', { navigation, updateWeather })}
            >
              <FontAwesome style={[s.mr3]} name='search' color={style.COL_WHITE} size={style.ICON_SIZE_SMALL} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    )
  }
}

Header.propTypes = {
  navigation: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    currentLocation: state.weather.currentLocation
  }
}

export default connect(mapStateToProps)(Header)
