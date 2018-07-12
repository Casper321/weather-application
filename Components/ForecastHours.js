import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import ForecastHour from './ForecastHour'
import s from '../Assets/style'

import ForecastHeader from './ForecastHeader'
import getDayHoursForecast from '../Assets/Functions/getDayHoursForecast'

const ForecastHours = ({ hours }) => {
  // Get today & tomorrow forecast
  const todayHours = getDayHoursForecast(0, hours)
  const tomorrowHours = getDayHoursForecast(1, hours)
  const d = new Date()

  return (
    <View style={[s.col_bg_white, s.w, s.mlA, s.mrA, s.br]}>
      <ForecastHeader day={todayHours[0].day} date={todayHours[0].date} sunriseTime={'04:47'} sunsetTime={'22:58'} />
      {todayHours.map(hour => {
        return (
          <ForecastHour
            key={hour.time}
            time={hour.time}
            weatherType={hour.weatherType}
            weatherTypeNum={hour.weatherTypeNum}
            temperature={hour.temp}
            rain={hour.averageRain}
            windSpeed={hour.windSpeed}
            windGust={hour.windGust}
          />
        )
      })}

      <ForecastHeader
        day={tomorrowHours[0].day}
        date={tomorrowHours[0].date}
        sunriseTime={'04:47'}
        sunsetTime={'22:58'}
      />
      {tomorrowHours.map(hour => {
        return (
          <ForecastHour
            key={hour.time}
            time={hour.time}
            weatherType={hour.weatherType}
            weatherTypeNum={hour.weatherTypeNum}
            temperature={hour.temp}
            rain={hour.averageRain}
            windSpeed={hour.windSpeed}
            windGust={hour.windGust}
          />
        )
      })}
    </View>
  )
}

ForecastHours.propTypes = {
  hours: PropTypes.array.isRequired
}

export default ForecastHours
