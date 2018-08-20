import React from 'react'
import { SafeAreaView } from 'react-native'
import { Drawer } from './config/router'
import { Provider } from 'react-redux'
import configureStore from './Redux/configureStore'
import { createStackNavigator } from 'react-navigation'
import SearchPage from './Views/SearchPage/SearchPage'
import InfoPage from './Views/InfoPage/InfoPage'
import TenDaysForecastPage from './Views/TenDaysForecastPage/TenDaysForecastPage'
import StartPage from './Views/StartPage/StartPage'
import WarningPage from './Views/WarningPage/WarningPage'
import AnalysisPage from './Views/AnalysisPage/AnalysisPage'
import AllHoursForecastPage from './Views/AllHoursForecastPage/AllHoursForecastPage'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from './Redux/index'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { createStore } from 'redux'
import Loading from './Components/Loading'

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whiteList: ['searchHistory']
}

const pReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(pReducer)
const persistor = persistStore(store)

/*
const persistStoreConfig = {
  storage: storage,
  whiteList: ['searchHistory'],
  stateReconciler: autoMergeLevel2
}

const store = configureStore()
persistStore(store, persistStoreConfig)
*/

// const store = configureStore()

const RootStack = createStackNavigator(
  {
    Drawer: Drawer,
    Sök: { screen: SearchPage },
    Info: { screen: InfoPage },
    Start: { screen: StartPage },
    Långprognos: { screen: TenDaysForecastPage },
    Varningar: { screen: WarningPage },
    Dataanalys: { screen: AnalysisPage },
    Timmar: { screen: AllHoursForecastPage }
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
)

export default class App extends React.Component {
  render () {
    console.log('Store', store)
    console.log('Persistor', persistor)

    return (
      <Provider store={store}>
        <PersistGate loading={<Loading message='Laddar appen...' />} persistor={persistor}>
          <SafeAreaView style={{ flex: 1 }}>
            <RootStack />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    )
  }
}
