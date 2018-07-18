import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'
import Wind from './Wind'
import Rain from './Rain'
import Snow from './Snow'
import getMonth from '../Assets/Functions/getMonth'
import unformatDayHours from '../Assets/Functions/unformatDayHours'
import BoxContainer from './BoxContainer'

const CurrentForecast = ({ currentHour, location, getNewLocation }) => {
  const { day, temp, weatherType, weatherTypeNum, averageRain, windSpeed, windGust } = currentHour
  const icon = getWeatherIcon(parseInt(weatherTypeNum), style.ICON_SIZE_LARGE)
  const month = new Date().getMonth()

  return (
    <BoxContainer>
      <View style={[s.flexAce]}>
        <FontAwesome name='home' size={style.ICON_SIZE_SMALL} color={style.COL_GOOGLE_BLUE} style={[s.mt1]} />
        <Text style={[s.mt1, s.fz1, s.fw1]}>{location}</Text>
        <Text
          style={[s.mt1, s.fz1, s.fw0, s.mb1]}
        >{`Idag ${unformatDayHours(currentHour.dayNumber)} ${getMonth(currentHour.month)} klockan ${currentHour.time}`}</Text>
      </View>
      <View style={[s.bbw, s.btw, s.bc, s.flexDr, s.flexJsa, s.mt1]}>
        <View style={[s.flexJce, s.flexAce, s.bc, s.flex1, s.pt2, s.pb2]}>
          <MaterialIcons name='favorite-border' size={style.ICON_SIZE_SMALL + 4} color={'#9b111e'} />
        </View>
        <View style={[s.flexJce, s.flexAce, s.bc, s.flex1, s.pt2, s.pb2]}>
          <TouchableHighlight onPress={() => getNewLocation()}>
            <MaterialCommunityIcons name='reload' size={style.ICON_SIZE_SMALL + 4} color={style.COL_GOOGLE_BLUE} />
          </TouchableHighlight>
        </View>
        <View style={[s.flexJce, s.flexAce, s.flex1, s.pt2, s.pb2]}>
          <Entypo name='pin' size={style.ICON_SIZE_SMALL} color={'#008744'} />
        </View>
      </View>
      <View style={[s.br0]}>
        <View style={[s.flexDr, s.flexJsb, s.flexAfe, s.pb5]}>
          <Text style={[styles.temp, s.flex1, s.fw1, s.fz3, s.mb2]}>{Math.round(temp)}°</Text>
          <View style={[s.flexAce, s.flex2]}>
            <Text style={[s.tac, s.fz2, s.col_black, s.mt2, s.mb2]}>{weatherType}</Text>
            {icon}
          </View>
          <View style={[s.flex1, s.flexJsb, s.flexAfs]}>
            <Rain amountRain={averageRain} />
            <View style={[s.mt1]}>
              <Wind windSpeed={windSpeed} windGust={windGust} />
            </View>
            {month >= 9 || month <= 1 ? <Snow amountSnow={0} /> : null}
          </View>
        </View>
      </View>
    </BoxContainer>
  )
}

CurrentForecast.propTypes = {
  currentHour: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  temp: {
    left: 38
  }
})

export default CurrentForecast
