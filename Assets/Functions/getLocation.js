import { weatherActions } from '../../Redux/WeatherReducer'
import { Location, Permissions } from 'expo'

const getLocation = async (prevHasLocationPermission, dispatch) => {
  let hasLocationPermission
  if (!prevHasLocationPermission) {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      hasLocationPermission = false
    } else {
      hasLocationPermission = true
    }
  } else {
    hasLocationPermission = true
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
    return { currentLatitude, currentLongitude, hasLocationPermission, loadingCoordinatesFailed: false }
  } catch (error) {
    return { hasLocationPermission, loadingCoordinatesFailed: true }
  }
}

export default getLocation
