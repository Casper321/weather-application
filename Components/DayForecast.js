import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'
import Wind from './Wind'
import Rain from './Rain'

const DayForecast = ({ day, degrees, weatherType, amountRain }) => {
  return (
    <View style={styles.mainContent}>
      <View style={styles.mainContentHeader}>
        <Text style={styles.mainContentHeaderText}>{day}</Text>
      </View>
      <View style={styles.mainContentItems}>
        <Text style={styles.mainContentDegrees}>{degrees}°</Text>
        <View style={styles.mainContentWeather}>
          <Text style={styles.mainContentWeatherText}>{weatherType}</Text>
          <FontAwesome style={weatherType} name='sun-o' size={style.ICON_SIZE_LARGE} color={style.COL_YELLOW_SUN} />
        </View>
        <View style={styles.mainContentItem}>
          <Rain amountRain={0} />
          <Wind />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContent: {
    backgroundColor: '#fff',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 1
  },
  mainContentHeader: {
    borderBottomWidth: 1,
    borderBottomColor: style.COL_GREY,
    justifyContent: 'center',
    padding: 6
  },
  mainContentHeaderText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
    color: '#000'
  },
  mainContentItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 40
  },
  mainContentDegrees: {
    color: '#000',
    fontWeight: '500',
    fontSize: 26
  },
  mainContentWeather: {},
  mainContentWeatherText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
    marginTop: 12
  },
  mainContentIcon: {
    marginTop: 14
  },
  weatherType: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8
  },
  weatherValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 6
  },
  weatherWindValue: {
    position: 'absolute',
    right: 11,
    bottom: 11
  }
})

export default DayForecast
