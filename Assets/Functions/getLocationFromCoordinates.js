import { weatherActions } from '../../Redux/WeatherReducer'

const getLocationFromCoordinates = (latitude, longitude, dispatch) => {
  if (latitude && longitude) {
    let currentCity, currentSuburb
    const request = new XMLHttpRequest()
    request.open(
      'GET',
      `https://eu1.locationiq.org/v1/reverse.php?key=102c0e44882475&lat=${latitude}&lon=${longitude}&format=json`,
      true
    )
    request.onload = () => {
      var data = JSON.parse(request.response)
      const newLocation = {}
      newLocation.latitude = data.lat
      newLocation.longitude = data.lon
      newLocation.city = data.address.city
      newLocation.suburb = data.address.suburb

      console.log(data.address)

      dispatch(
        weatherActions.setCurrentLocation({
          latitude,
          longitude,
          city: data.address.city || data.address.town,
          suburb: data.address.suburb,
          state: data.address.state
        })
      )

      currentCity = data.address.city
      currentSuburb = data.address.suburb
    }
    request.send(null)
    return {
      city: currentCity,
      suburb: currentSuburb
    }
  }
}

export default getLocationFromCoordinates
