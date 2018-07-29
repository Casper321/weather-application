import React from 'react'
import { Tabs } from './config/router'
import { Provider } from 'react-redux'
import configureStore from './Redux/configureStore'

const store = configureStore()

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    )
  }
}
