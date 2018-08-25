import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation'
import StartPage from '../Views/StartPage/StartPage'
import InfoPage from '../Views/InfoPage/InfoPage'
import TenDaysForecastPage from '../Views/TenDaysForecastPage/TenDaysForecastPage'
import WarningPage from '../Views/WarningPage/WarningPage'
import AnalysisPage from '../Views/AnalysisPage/AnalysisPage'
import SettingsPage from '../Views/SettingsPage/SettingsPage'
import { FontAwesome, SimpleLineIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import * as style from '../Assets/style'
import CustomDrawerContentComponent from './Components/CustomDrawerContentComponent'

export const Tabs = createBottomTabNavigator(
  {
    Start: StartPage,
    Långprognos: TenDaysForecastPage,
    Varningar: WarningPage,
    Dataanalys: AnalysisPage
  },
  {
    order: ['Start', 'Långprognos', 'Varningar', 'Dataanalys'],
    animationEnabled: true,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor, inactiveTintColor }) => {
        const { routeName } = navigation.state
        let icon = null
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

export const InfoStack = createStackNavigator(
  {
    Information: {
      screen: InfoPage,
      navigationOptions: {
        tabBarVisible: false,
        title: 'Information',
        headerStyle: { backgroundColor: style.COL_GOOGLE_BLUE },
        headerTintColor: '#fff'
      }
    }
  },
  {
    initialRouteName: 'Information',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    headerMode: 'none'
  }
)

export const SettingsStack = createStackNavigator(
  {
    Inställningar: {
      screen: SettingsPage,
      navigationOptions: {
        tabBarVisible: false,
        title: 'Inställningar',
        headerStyle: { backgroundColor: style.COL_GOOGLE_BLUE },
        headerTintColor: '#fff'
      }
    }
  },
  {
    initialRouteName: 'Inställningar',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    headerMode: 'none'
  }
)

export const Drawer = createDrawerNavigator(
  {
    Väderprognos: Tabs,
    Information: InfoPage
    /* Inställningar: SettingsPage */
  },
  {
    contentComponent: props => <CustomDrawerContentComponent {...props} />,
    initialRouteName: 'Väderprognos',
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
)
