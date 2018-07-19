import React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import ForecastHour from './ForecastHour'
import s from '../Assets/style'

import ForecastHeader from './ForecastHeader'
import getDayHoursForecast from '../Assets/Functions/getDayHoursForecast'
import getMonth from '../Assets/Functions/getMonth'
import BoxContainer from './BoxContainer'

const ForecastHours = ({ hours, forecastDay }) => {
  // Get today & tomorrow forecast
  const dayHours = getDayHoursForecast(forecastDay, hours)

  let dayLabel = null
  if (forecastDay === 0) {
    dayLabel = 'Idag'
  } else if (forecastDay === 1) {
    dayLabel = 'Imorgon'
  }

  onHourPressed = event => {
    console.log('here')
    console.log(event)
  }

  return (
    <BoxContainer>
      <View>
        {dayHours.length >= 1 &&
          <ForecastHeader
            day={dayLabel}
            date={`${dayHours[0].dayNumber} ${getMonth(dayHours[0].month)}`}
            sunriseTime={'04:47'}
            sunsetTime={'22:58'}
          />}
        {dayHours.map(hour => {
          return (
            <TouchableHighlight key={Math.random() * 1000} onPress={hour => this.onHourPressed(hour)}>
              <ForecastHour
                time={hour.time}
                weatherType={hour.weatherType}
                weatherTypeNum={hour.weatherTypeNum}
                temperature={hour.temp}
                rain={hour.averageRain}
                windSpeed={hour.windSpeed}
                windGust={hour.windGust}
              />
            </TouchableHighlight>
          )
        })}
      </View>
    </BoxContainer>
  )
}

/*

*/

ForecastHours.propTypes = {
  hours: PropTypes.array.isRequired
}

export default ForecastHours
