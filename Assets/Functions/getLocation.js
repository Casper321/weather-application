import { weatherActions } from '../../Redux/WeatherReducer'
import { Location, Permissions } from 'expo'

const getLocation = async (updateState, dispatch) => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION)
  if (status !== 'granted') {
    updateState('hasLocationPermission', false)
    // this.setState({ hasLocationPermission: false })
  } else {
    updateState('hasLocationPermission', true)
    // this.setState({ hasLocationPermissions: true })
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
    updateState('loadingCoordinatesFailed', false)
    // this.setState({ loadingCoordinatesFailed: false })
    return { currentLatitude, currentLongitude }
  } catch (error) {
    updateState('loadingCoordinatesFailed', true)
    // this.setState({ loadingCoordinatesFailed: true })
  }
}

export default getLocation
