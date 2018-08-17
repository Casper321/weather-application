import { weatherActions } from '../../Redux/WeatherReducer'

const getWarningForecast = async (currentState, dispatch) => {
  try {
    const api_call = await fetch(`https://opendata-download-warnings.smhi.se/api/version/2/alerts.json`)
    const warningForecastData = await api_call.json()
    let weatherWarnings = []

    warningForecastData.alert.forEach(warning => {
      let warningObj = {}
      warningObj.location = warning.info.headline
      warningObj.message = warning.info.description
      warningObj.icon = warning.info.event
      warningObj.district = warning.info.headline
      weatherWarnings.push(warningObj)
    })
    dispatch(weatherActions.setWeatherWarnings(weatherWarnings))

    let weatherWarningsInDistrict = []

    weatherWarnings.forEach(warning => {
      const locationWords = warning.location.split(' ')
      let state = ''

      if (locationWords[1] === 'län') {
        state = locationWords[0]
      } else {
        state = locationWords[0] + ' ' + locationWords[1]
      }

      if (state + ' ' + 'län' === currentState) {
        let warningData = {}
        warningData.location = warning.location
        warningData.icon = warning.icon
        warningData.message = warning.message
        weatherWarningsInDistrict.push(warningData)
      }
    })

    const weatherWarningsInDistrictSorted = weatherWarningsInDistrict.sort((a, b) =>
      a.location.localeCompare(b.location)
    )

    dispatch(weatherActions.setWeatherWarningsInDistrict(weatherWarningsInDistrictSorted))
  } catch (error) {
    console.log('kan inte hämta varning', error)
  }
}

export default getWarningForecast
