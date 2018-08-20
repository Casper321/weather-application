import { combineReducers } from 'redux'
import weather from './WeatherReducer'
import searchHistory from './SearchHistoryReducer'

const rootReducer = combineReducers({
  weather,
  searchHistory
})

export default rootReducer
