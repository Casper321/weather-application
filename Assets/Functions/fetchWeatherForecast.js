import { weatherActions } from '../../Redux/WeatherReducer'
import getWeatherCondition from './getWeatherCondition'
import getDayFromDayIndex from './getDayFromDayIndex'
// import forecastData from '../test-api.json'

const fetchWeatherForecast = async (latitude, longitude, city, dispatch) => {
  try {
    const api_call = await fetch(
      `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${longitude}/lat/${latitude}/data.json`
    )
    const forecastData = await api_call.json()

    const newForecastResult = {
      city,
      coordinates: {
        latitude,
        longitude
      },
      hours: []
    }

    let activeDayIndex = new Date().getDay()
    let forecastHours = []

    forecastData.timeSeries.forEach(hour => {
      let timeObj = {}

      timeObj.time = hour.validTime.slice(11, 13)
      timeObj.date = hour.validTime.slice(5, 10).replace('-', '/')
      timeObj.day = hour.validTime.slice(8, 10)
      timeObj.dayNumber = hour.validTime.slice(8, 10)
      timeObj.month = hour.validTime.slice(5, 7)
      timeObj.temp = hour.parameters.find(element => element.name === 't').values[0]
      timeObj.windSpeed = hour.parameters.find(element => element.name === 'ws').values[0]
      timeObj.windGust = hour.parameters.find(element => element.name === 'gust').values[0]
      timeObj.windDirection = hour.parameters.find(element => element.name === 'wd').values[0]
      timeObj.thunderRisk = hour.parameters.find(element => element.name === 'tstm').values[0]
      timeObj.airPressure = hour.parameters.find(element => element.name === 'msl').values[0]
      timeObj.averageRain = hour.parameters.find(element => element.name === 'pmean').values[0]
      timeObj.weatherType = getWeatherCondition(hour.parameters.find(element => element.name === 'Wsymb2').values[0])
      timeObj.weatherTypeNum = hour.parameters.find(element => element.name === 'Wsymb2').values[0]

      // Change day on midnight
      timeObj.time === '00' && activeDayIndex++
      activeDayIndex === 7 ? (activeDayIndex = 0) : null
      timeObj.day = getDayFromDayIndex(activeDayIndex)

      forecastHours.push(timeObj)
    })

    newForecastResult.hours = [...forecastHours]
    dispatch(weatherActions.addForecast(newForecastResult))
    dispatch(
      weatherActions.setCurrentCity({
        city,
        suburb: city
      })
    )

    // Successful fetch
    return true
  } catch (error) {
    // console.log(error)
    // Unsuccesful fetch
    return false
  }
}

export default fetchWeatherForecast
