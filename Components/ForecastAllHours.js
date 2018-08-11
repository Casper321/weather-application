import React from 'react'
import { TouchableHighlight, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import ForecastHour from './ForecastHour'
import s from '../Assets/style'
import * as style from '../Assets/style'
import ForecastHeader from './ForecastHeader'
import getDayHoursForecast from '../Assets/Functions/getDayHoursForecast'
import getMonth from '../Assets/Functions/getMonth'
import BoxContainer from './BoxContainer'
import unformatDayHours from '../Assets/Functions/unformatDayHours'

const ForecastAllHours = ({ hours, forecastDay }) => {
  // Get today & tomorrow forecast
  const dayHours = getDayHoursForecast(forecastDay, hours)
  let dayLabel

  switch (forecastDay) {
    case 0:
      dayLabel = 'Idag'
      break
    case 1:
      dayLabel = 'Imorgon'
      break
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      dayLabel = dayHours[0].day
      break
    default: dayLabel = ''
      break
  } 
  
  onHourPressed = item => {}

  return (
    <BoxContainer>
      <ForecastHeader
        day={dayLabel}
        date={`${dayHours[0].dayNumber} ${getMonth(dayHours[0].month)}`}
      />
      <FlatList
        data={dayHours}
        keyExtractor={item => `${item.date} ${item.time}`}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor={style.COL_GREY}
            activeOpacity={1}
            onPress={() => this.onHourPressed(item)}
          >
            <ForecastHour
              time={item.time}
              weatherType={item.weatherType}
              weatherTypeNum={item.weatherTypeNum}
              temperature={item.temp}
              rain={item.averageRain}
              windSpeed={item.windSpeed}
              windGust={item.windGust}
            />
          </TouchableHighlight>
        )}
      />
    </BoxContainer>
  )
}

ForecastAllHours.propTypes = {
  hours: PropTypes.array.isRequired
}

export default ForecastAllHours
