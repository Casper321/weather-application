import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet, LayoutAnimation, UIManager } from 'react-native'
import Wind from './Wind'
import getWeatherIcon from '../Assets/Functions/getWeatherIcon'
import s from '../Assets/style'
import * as style from '../Assets/style'

class ForecastHour extends Component {
  constructor (props) {
    super(props)
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  state = {
    dropdownActive: false
  }

  styles = StyleSheet.create({
    itemDesc: {
      fontSize: style.FONT_SIZE_S,
      marginLeft: style.SPACING_M
    },
    itemValue: {
      fontSize: style.FONT_SIZE_S,
      marginLeft: 'auto',
      textAlign: 'right',
      fontWeight: '500'
    }
  })

  onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

    const prevDropDownState = this.state.dropdownActive
    this.setState({ dropdownActive: !prevDropDownState })
  }

  render () {
    const {
      time,
      weatherType,
      weatherTypeNum,
      temperature,
      rain,
      windSpeed,
      windGust,
      thunderRisk,
      airPressure,
      windDirection,
      relativeHumidity
    } = this.props
    const icon = getWeatherIcon(
      parseInt(weatherTypeNum),
      style.ICON_SIZE_MEDIUM,
      !(parseInt(time) > 20 || parseInt(time) < 7)
    )
    const { dropdownActive } = this.state

    return (
      <TouchableHighlight underlayColor={style.COL_GREY} onPress={() => this.onPress()}>
        <View>
          <View style={[s.flexDr, s.flexJce, s.flexAce, s.pl1, s.pr1, s.pb0, s.pt0]}>
            <View style={[s.flex2]}>
              <Text style={[s.col_black, s.fw1, s.fz1]}>
                kl. {time}
              </Text>
              <Text style={[s.fz0, s.col_dark_grey]}>
                {weatherType}
              </Text>
            </View>
            <View style={[s.flexJce, s.flexAce, s.flex1]}>
              <Text style={[s.col_black, s.fw1, s.fz1]}>{Math.round(temperature)}°</Text>
            </View>
            <View style={[s.flex1, s.flexDr, s.flexJce, s.mr1]}>
              {icon}
            </View>
            <Wind windDirection={windDirection} windSpeed={windSpeed} windGust={windGust} />
            <View style={[s.flexJce, s.flexAce, s.flex1]}>
              <Text style={[s.col_black, s.fw1, s.fz1]}>
                {rain}
              </Text>
              <Text style={[s.fz0, s.col_black]}>
                mm/h
              </Text>
            </View>
          </View>
          {dropdownActive &&
            <View style={[s.mt2, s.mb2, { paddingRight: '30%' }]}>
              <View style={[s.flexDr, s.mb1]}>
                <Text style={this.styles.itemDesc}>Risk för åska: </Text>
                <Text style={this.styles.itemValue}>{thunderRisk}%</Text>
              </View>
              <View style={[s.flexDr, s.mb1]}>
                <Text style={this.styles.itemDesc}>Lufttryck: </Text>
                <Text style={this.styles.itemValue}>{airPressure} hPa</Text>
              </View>
              <View style={[s.flexDr]}>
                <Text style={this.styles.itemDesc}>Relativ fuktighet: </Text>
                <Text style={this.styles.itemValue}>{relativeHumidity}%</Text>
              </View>
            </View>}
        </View>
      </TouchableHighlight>
    )
  }
}


export default ForecastHour
