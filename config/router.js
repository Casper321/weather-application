import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import StartPage from '../Views/StartPage/StartPage'
import SearchPage from '../Views/SearchPage/SearchPage'
import TenDaysForecastPage from '../Views/TenDaysForecastPage/TenDaysForecastPage'
import WarningPage from '../Views/WarningPage/WarningPage'
import AnalysisPage from '../Views/AnalysisPage/AnalysisPage'
import { FontAwesome, SimpleLineIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import * as style from '../Assets/style'

const TenDaysForecastStack = createStackNavigator(
  {
    Långprognos: TenDaysForecastPage,
    Sök: SearchPage
  },
  {
    headerMode: 'none'
  }
)

const StartStack = createStackNavigator(
  {
    Start: StartPage,
    Sök: SearchPage
  },
  {
    headerMode: 'none'
  }
)

const WarningStack = createStackNavigator(
  {
    Varningar: WarningPage,
    Sök: SearchPage
  },
  {
    headerMode: 'none'
  }
)

const AnalysisStack = createStackNavigator(
  {
    Dataanalys: AnalysisPage,
    Sök: SearchPage
  },
  {
    headerMode: 'none'
  }
)

export const Tabs = createBottomTabNavigator(
  {
    Start: StartStack,
    Långprognos: TenDaysForecastStack,
    Varningar: WarningStack,
    Dataanalys: AnalysisStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor, inactiveTintColor }) => {
        const { routeName } = navigation.state
        let icon
        if (routeName === 'Start') {
          icon = (
            <FontAwesome name={'sun-o'} size={style.ICON_SIZE_SMALL} color={focused ? tintColor : inactiveTintColor} />
          )
        } else if (routeName === 'Långprognos') {
          icon = (
            <SimpleLineIcons
              name={'social-soundcloud'}
              size={style.ICON_SIZE_SMALL}
              color={focused ? tintColor : inactiveTintColor}
            />
          )
        } else if (routeName === 'Varningar') {
          icon = (
            <FontAwesome
              name={'warning'}
              size={style.ICON_SIZE_SMALL}
              color={focused ? tintColor : inactiveTintColor}
            />
          )
        } else if (routeName === 'Dataanalys') {
          icon = (
            <Entypo name={'line-graph'} size={style.ICON_SIZE_SMALL} color={focused ? tintColor : inactiveTintColor} />
          )
        } else if (routeName === 'Långprognos') {
          icon = (
            <MaterialCommunityIcons
              name={'radar'}
              size={style.ICON_SIZE_SMALL}
              color={focused ? tintColor : inactiveTintColor}
            />
          )
        }

        return icon
      }
    }),
    tabBarOptions: {
      tintColor: style.COL_GOOGLE_BLUE,
      inactiveTintColor: style.COL_DARK_GREY,
      style: {
        backgroundColor: style.COL_WHITE,
        borderTopWidth: 0,
        elevation: 20
      }
    }
  }
)
