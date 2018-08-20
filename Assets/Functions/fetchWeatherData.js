import { weatherActions } from '../../Redux/WeatherReducer'
import fetchWeatherForecast from './fetchWeatherForecast'
import getLocationFromCoordinates from './getLocationFromCoordinates'
import getWarningForecast from './getWarningForecast'
import { Location, Permissions } from 'expo'

const fetchWeatherData = async (dispatch, incomingLatitude, incomingLongitude, incomingCity) => {
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

  const fetch = (currentLatitude, currentLongitude, incomingCity) => {
    let newCity, newSuburb, newState
    if (!incomingCity) {
      const { city, suburb, state } = getLocationFromCoordinates(currentLatitude, currentLongitude, dispatch)
      newCity = city
      newSuburb = suburb
      newState = state
    } else {
      newCity = incomingCity
    }
    fetchWeatherForecast(currentLatitude, currentLongitude, newCity || newSuburb, dispatch)
      ? (loadingForecastFailed = false)
      : (loadingForecastFailed = true)
    getWarningForecast(newState, dispatch)
  }

  if (incomingLatitude && incomingLongitude) {
    fetch(incomingLatitude, incomingLongitude, incomingCity)
    dispatch(
      weatherActions.setCurrentLocation({
        latitude: incomingLatitude,
        longitude: incomingLongitude,
        city: incomingCity,
        suburb: incomingCity,
        state: '' /* Todo incoparte in localstorage */
      })
    )
  } else {
    const { currentLatitude, currentLongitude } = await getLocation()
    if (currentLatitude && currentLongitude) {
      fetch(currentLatitude, currentLongitude, false)
    }
  }

  return { loadingForecastFailed, hasLocationPermission, loadingCoordinatesFailed }
}

export default fetchWeatherData
