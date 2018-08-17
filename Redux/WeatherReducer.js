export const types = {
  ADD_FORECAST: 'ADD_FORECAST',
  SET_CURRENT_COORDINATES: 'SET_CURRENT_COORDINATES',
  SET_CURRENT_CITY: 'SET_CURRENT_CITY',
  SET_CURRENT_LOCATION: 'SET_CURRENT_LOCATION',
  SET_WEATHER_WARNINGS: 'SET_WEATHER_WARNINGS',
  SET_WEATHER_WARNINGS_IN_DISTRICT: 'SET_WEATHER_WARNINGS_IN_DISTRICT',
  SCROLL_INDEX_ALL_HOURS_PAGE: 'SCROLL_INDEX_ALL_HOURS_PAGE'
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
  setCurrentLocation: item => {
    return { type: types.SET_CURRENT_LOCATION, payload: item }
  },
  setWeatherWarnings: item => {
    return { type: types.SET_WEATHER_WARNINGS, payload: item }
  },
  setWeatherWarningsInDistrict: item => {
    return { type: types.SET_WEATHER_WARNINGS_IN_DISTRICT, payload: item }
  },
  setScrollIndexAllHoursPage: item => {
    return { type: types.SCROLL_INDEX_ALL_HOURS_PAGE, payload: item }
  }
}

const initialState = {
  forecasts: [],
  currentLocation: {
    latitude: '',
    longitude: '',
    city: '',
    suburb: '',
    state: ''
  },
  weatherWarnings: [],
  weatherWarningsInDistrict: [],
  setScrollIndexAllHoursPage: ''
}

export default function WeatherReducer (state = initialState, action) {
  const { forecasts } = state
  const { type, payload } = action

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
      return {
        ...state,
        currentLocation: newLocation
      }

    case types.SET_CURRENT_LOCATION:
      if (payload.city || payload.suburb) {
        return {
          ...state,
          currentLocation: payload
        }
      } else {
        return {
          ...state
        }
      }

    case types.SET_WEATHER_WARNINGS:
      return {
        ...state,
        weatherWarnings: payload
      }

    case types.SET_WEATHER_WARNINGS_IN_DISTRICT:
      return {
        ...state,
        weatherWarningsInDistrict: payload
      }

    case types.SCROLL_INDEX_ALL_HOURS_PAGE:
      return {
        ...state,
        setScrollIndexAllHoursPage: payload
      }

    default:
      return state
  }
}
