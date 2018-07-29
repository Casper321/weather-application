// reducers/index.js
import { combineReducers } from 'redux'
import weather from './WeatherReducer'

const rootReducer = combineReducers({
  weather
})

export default rootReducer
