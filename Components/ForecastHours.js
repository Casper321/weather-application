import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback, TouchableHighlight, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import ForecastHour from './ForecastHour'
import s from '../Assets/style'
import * as style from '../Assets/style'
import ForecastHeader from './ForecastHeader'
import getDayHoursForecast from '../Assets/Functions/getDayHoursForecast'
import getMonth from '../Assets/Functions/getMonth'
import BoxContainer from './BoxContainer'
import unformatDayHours from '../Assets/Functions/unformatDayHours'

const ForecastHours = ({ hours, forecastDay }) => {
  // Get today & tomorrow forecast
  const dayHours = getDayHoursForecast(forecastDay, hours)

  let dayLabel = null
  if (forecastDay === 0) {
    dayLabel = 'Idag'
  } else if (forecastDay === 1) {
    dayLabel = 'Imorgon'
  }

  renderHeader = () => {
    return <ForecastHeader day={dayLabel} date={`${dayHours[0].dayNumber}:e ${getMonth(dayHours[0].month)}`} />
  }

  onHourPressed = item => {}

  return (
    <BoxContainer>

      <FlatList
        data={dayHours}
        keyExtractor={item => `${item.date} ${item.time}`}
        ListHeaderComponent={() => this.renderHeader()}
        renderItem={({ item }) => (
          <TouchableHighlight underlayColor={style.COL_GREY} activeOpacity={1} onPress={() => this.onHourPressed(item)}>
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

const styles = StyleSheet.create({
  seperator: {
    height: style.BORDER_WIDTH_STANDARD,
    backgroundColor: style.COL_GREY,
    width: '100%'
  }
})

ForecastHours.propTypes = {
  hours: PropTypes.array.isRequired
}

export default ForecastHours
