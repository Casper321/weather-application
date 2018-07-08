import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Wind from './Wind'
import * as style from '../Assets/style'
import s from '../Assets/style'

const ForecastHour = ({ time, weatherType, temperature, rain, windSpeed, windGust }) => {
  let icon = null
  let randNum = Math.floor(Math.random() * 100 + 10)
  if (randNum % 3 === 0) {
    icon = <FontAwesome name='sun-o' size={style.ICON_SIZE_SMALL} color={style.COL_YELLOW_SUN} />
  } else if (randNum % 2 === 0) {
    icon = <Feather name='cloud-rain' size={style.ICON_SIZE_SMALL} color={style.COL_WATER_BLUE} />
  } else {
    icon = <MaterialCommunityIcons name='weather-cloudy' size={style.ICON_SIZE_SMALL} color={style.COL_GREY} />
  }

  return (
    <View style={styles.forecastHour}>
      <View>
        <Text style={styles.textBold}>
          kl. {time}
        </Text>
        <Text style={styles.smallText}>
          {weatherType}
        </Text>
      </View>
      <View style={styles.forecastDayTemp}>
        <Text style={styles.textBold}>{temperature}°</Text>
      </View>
      <View style={styles.forecastDayIcon}>
        {icon}
      </View>
      <Wind windSpeed={windSpeed} windGust={windGust} />
      <View style={styles.forecastDayTemp}>
        <Text style={styles.textBold}>
          {rain}
        </Text>
        <Text style={styles.smallText}>
          mm/h
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  forecastHour: {
    backgroundColor: style.COL_WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 2,
    paddingTop: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  forecastDayTemp: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBold: {
    fontSize: 18,
    fontWeight: '500',
    color: style.COL_BLACK
  }
})

export default ForecastHour
