import { weatherActions } from '../../Redux/WeatherReducer'
import fetchWeatherForecast from './fetchWeatherForecast'
import getLocationFromCoordinates from './getLocationFromCoordinates'
import getWarningForecast from './getWarningForecast'
import { Location, Permissions } from 'expo'

const fetchWeatherData = async dispatch => {
  let loadingForecastFailed, hasLocationPermission, loadingCoordinatesFailed

  const getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      hasLocationPermission = false
    } else {
      hasLocationPermissions = true
    }

    try {
      const location = await Location.getCurrentPositionAsync({})
      const currentLatitude = Number.parseFloat(location.coords.latitude).toPrecision(5)
      const currentLongitude = Number.parseFloat(location.coords.longitude).toPrecision(5)

      dispatch(
        weatherActions.setCurrentCoordinates({
          latitude: currentLatitude,
          longitude: currentLongitude
        })
      )

      loadingCoordinatesFailed = false
      return { currentLatitude, currentLongitude }
    } catch (error) {
      loadingCoordinatesFailed = true
    }
  }

  const { currentLatitude, currentLongitude } = await getLocation()
  if (currentLatitude && currentLongitude) {
    const { city, suburb, state } = getLocationFromCoordinates(currentLatitude, currentLongitude, dispatch)
    fetchWeatherForecast(currentLatitude, currentLongitude, city || suburb, dispatch)
      ? (loadingForecastFailed = false)
      : (loadingForecastFailed = true)
    getWarningForecast(state, dispatch)
  }

  return { loadingForecastFailed, hasLocationPermission, loadingCoordinatesFailed }
}

export default fetchWeatherData
