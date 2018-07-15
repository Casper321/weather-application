import React from 'react'
import { createBottomTabNavigator, createMaterialBottomTabNavigator } from 'react-navigation'
import StartPage from '../Views/StartPage/StartPage'
import TestPage from '../Views/TestPage/TestPage'
import WarningPage from '../Views/WarningPage/WarningPage'
import AnalysisPage from '../Views/AnalysisPage/AnalysisPage'
import { FontAwesome, SimpleLineIcons, Entypo } from '@expo/vector-icons'
import * as style from '../Assets/style'

export const Tabs = createBottomTabNavigator(
  {
    Start: StartPage,
    Långprognos: TestPage,
    Varningar: WarningPage,
    Dataanalys: AnalysisPage
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
