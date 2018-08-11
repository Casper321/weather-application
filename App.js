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

const store = configureStore()

const RootStack = createStackNavigator(
  {
    Drawer: Drawer,
    Sök: { screen: SearchPage },
    Info: { screen: InfoPage },
    Start: { screen: StartPage },
    Långprognos: { screen: TenDaysForecastPage },
    Varningar: { screen: WarningPage },
    Dataanalys: { screen: AnalysisPage }
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
        <SafeAreaView style={{ flex: 1 }}>
          <RootStack />
        </SafeAreaView>
      </Provider>
    )
  }
}
