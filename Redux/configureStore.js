import { createStore } from 'redux'
import rootReducer from './index'

export default (configureStore = () => {
  let store = createStore(rootReducer)
  return store
})
