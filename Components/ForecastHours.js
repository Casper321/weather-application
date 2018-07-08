import React from 'react'
import { View, StyleSheet } from 'react-native'
import ForecastHour from './ForecastHour'
import s from '../Assets/style'
import * as style from '../Assets/style'

class Day {
  constructor (time, weatherType, temp, windSpeed, windGust, rain) {
    this.time = time
    this.weatherType = weatherType
    this.temp = temp
    this.windSpeed = windSpeed
    this.windGust = windGust
    this.rain = rain
  }
}

const ForecastHours = () => {
  let hours = []
  for (let i = 13; i < 24; i++) {
    hours.push(
      new Day(
        i,
        'Klart',
        Math.floor(Math.random() * 10 + 15),
        Math.floor(Math.random() * 4 + 2),
        Math.floor(Math.random() * 8 + 4),
        0
      )
    )
  }

  return (
    <View style={styles.mainContent}>
      {hours.map(hour => {
        return <ForecastHour
          key={hour.time}
          time={hour.time}
          weatherType={hour.weatherType}
          temperature={hour.temp}
          rain={hour.rain}
        />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContent: {
    backgroundColor: style.COL_WHITE,
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 1
  }
})

export default ForecastHours
