import React from 'react'
import { SafeAreaView, View, AsyncStorage } from 'react-native'
import { Drawer } from './config/router'
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import SearchPage from './Views/SearchPage/SearchPage'
import InfoPage from './Views/InfoPage/InfoPage'
import TenDaysForecastPage from './Views/TenDaysForecastPage/TenDaysForecastPage'
import StartPage from './Views/StartPage/StartPage'
import WarningPage from './Views/WarningPage/WarningPage'
import AnalysisPage from './Views/AnalysisPage/AnalysisPage'
import AllHoursForecastPage from './Views/AllHoursForecastPage/AllHoursForecastPage'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './Redux/index'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { createStore } from 'redux'
import Loading from './Components/Loading'
import CustomDrawerComponent from './config/Components/CustomDrawerContentComponent'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const pReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(pReducer)
const persistor = persistStore(store)

const RootStack = createStackNavigator(
  {
    Drawer: Drawer,
    Sök: { screen: SearchPage },
    Info: { screen: InfoPage },
    Start: { screen: StartPage },
    Långprognos: { screen: TenDaysForecastPage },
    Varningar: { screen: WarningPage },
    Dataanalys: { screen: AnalysisPage },
    Timmar: { screen: AllHoursForecastPage },
    CustomDrawerComponent: { screen: CustomDrawerComponent }
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Loading message='Laddar Väder Norden...' />
            </View>
          }
          persistor={persistor}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <RootStack />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    )
  }
}
