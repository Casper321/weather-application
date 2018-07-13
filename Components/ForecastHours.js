import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import ForecastHour from './ForecastHour'
import s from '../Assets/style'

import ForecastHeader from './ForecastHeader'
import getDayHoursForecast from '../Assets/Functions/getDayHoursForecast'
import getMonth from '../Assets/Functions/getMonth'

const ForecastHours = ({ hours }) => {
  // Get today & tomorrow forecast
  const todayHours = getDayHoursForecast(0, hours)
  const tomorrowHours = getDayHoursForecast(1, hours)

  return (
    <View style={[s.col_bg_white, s.w, s.mlA, s.mrA, s.br]}>
      {todayHours.length >= 1 &&
        <ForecastHeader
          day={'Idag'}
          date={`${todayHours[0].dayNumber} ${getMonth(todayHours[0].month)}`}
          sunriseTime={'04:47'}
          sunsetTime={'22:58'}
        />}
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
        day={todayHours.length < 1 ? 'Idag' : 'Imorgon'}
        date={`${tomorrowHours[0].dayNumber} ${getMonth(tomorrowHours[0].month)}`}
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
