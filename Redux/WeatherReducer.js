export const types = {
  ADD_FORECAST: 'ADD_FORECAST',
  SET_CURRENT_COORDINATES: 'SET_CURRENT_COORDINATES',
  SET_CURRENT_CITY: 'SET_CURRENT_COORDINATES',
  SET_WEATHER_WARNINGS: 'SET_WEATHER_WARNINGS'
}

export const weatherActions = {
  addForecast: item => {
    return { type: types.ADD_FORECAST, payload: item }
  },
  setCurrentCoordinates: item => {
    return { type: types.SET_CURRENT_COORDINATES, payload: item }
  },
  setCurrentCity: item => {
    return { type: types.SET_CURRENT_CITY, payload: item }
  },
  setWeatherWarnings: item => {
    return { type: types.SET_WEATHER_WARNINGS, payload: item }
  }
}

const initialState = {
  forecasts: [],
  currentLocation: {
    latitude: '',
    longitude: '',
    city: '',
    suburb: ''
  },
  weatherWarnings: []
}

export default function WeatherReducer (state = initialState, action) {
  const { forecasts } = state
  const { type, payload } = action

  console.log('Current redux state', state)
  console.log('Redux add action', action, type)

  switch (type) {
    case types.ADD_FORECAST:
      return {
        ...state,
        forecasts: [...forecasts, payload]
      }

    case types.SET_CURRENT_CITY:
      const newCity = { ...state.currentLocation }
      newCity.city = payload.city
      newCity.suburb = payload.suburb

      return {
        ...state,
        currentLocation: newCity
      }

    case types.SET_CURRENT_COORDINATES:
      const newLocation = { ...state.currentLocation }
      newLocation.latitude = payload.latitude
      newLocation.longitude = payload.longitude

      console.log('HALLLÅÅÅÅÅÅÅÅÅÅ')
      return {
        ...state,
        currentLocation: newLocation
      }

    case types.SET_WEATHER_WARNINGS:
      return {
        ...state,
        weatherWarnings: payload
      }

    default:
      return state
  }
}
