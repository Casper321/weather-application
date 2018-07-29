import React from 'react'
import { View, StyleSheet } from 'react-native'
import ForecastDay from './ForecastDay'
import BoxContainer from './BoxContainer'

const ForecastDays = ({ days }) => {
  // Get today & tomorrow forecast
  // const todayHours = getDayHoursForecast(0, hours)
  /* const d = new Date()
  console.log(days)
  const daysForecast = days.map(hour => {
    if (hour.time === 12) {
      return hour
    } */

  return (
    <BoxContainer>
      <View>
        {days.map(day => {
          return (
            <ForecastDay
              key={Math.random() * 100}
              day={day.day}
              date={day.date}
              tempHigh={day.tempHigh}
              tempLow={day.tempLow}
              weatherTypeNumNight={day.weatherTypeNumNight}
              weatherTypeNumDay={day.weatherTypeNumDay}
              totalRain={day.totalRain}
            />
          )
        })}
      </View>
    </BoxContainer>
  )
}

export default ForecastDays
