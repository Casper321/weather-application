import React, { Component } from 'react'
import {
  Platform,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  AsyncStorage,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  createMaterialTopTabNavigator
} from 'react-navigation'
import StartPage from '../Views/StartPage/StartPage'
import SearchPage from '../Views/SearchPage/SearchPage'
import InfoPage from '../Views/InfoPage/InfoPage'
import TenDaysForecastPage from '../Views/TenDaysForecastPage/TenDaysForecastPage'
import AllHoursForecastPage from '../Views/AllHoursForecastPage/AllHoursForecastPage'
import WarningPage from '../Views/WarningPage/WarningPage'
import AnalysisPage from '../Views/AnalysisPage/AnalysisPage'
import { FontAwesome, SimpleLineIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import s from '../Assets/style'
import * as style from '../Assets/style'
import fetchWeatherData from '../Assets/Functions/fetchWeatherData'
import { connect } from 'react-redux'
import CustomDrawerContentComponent from './Components/CustomDrawerContentComponent'

const DRAWER_INACTIVE_TINT_COLOR = '#000'

export const Tabs = createMaterialTopTabNavigator(
  {
    Start: {
      screen: StartPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <FontAwesome
            name={'sun-o'}
            size={style.ICON_SIZE_SMALL}
            color={focused ? tintColor : DRAWER_INACTIVE_TINT_COLOR}
          />
        )
      }
    },
    Långprognos: {
      screen: TenDaysForecastPage,
      navigationOptions: {
        tabBarLabel: '10 dagar',
        tabBarIcon: ({ tintColor, focused }) => (
          <SimpleLineIcons
            name={'social-soundcloud'}
            size={style.ICON_SIZE_SMALL}
            color={focused ? tintColor : DRAWER_INACTIVE_TINT_COLOR}
          />
        )
      }
    },
    Varningar: {
      screen: WarningPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <FontAwesome
            name={'warning'}
            size={style.ICON_SIZE_SMALL}
            color={focused ? tintColor : DRAWER_INACTIVE_TINT_COLOR}
          />
        )
      }
    },
    Dataanalys: {
      screen: AnalysisPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Entypo
            name={'line-graph'}
            size={style.ICON_SIZE_SMALL}
            color={focused ? tintColor : DRAWER_INACTIVE_TINT_COLOR}
          />
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    optimizationsEnabled: true,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: style.COL_GOOGLE_BLUE,
      inactiveTintColor: style.COL_BLACK,
      upperCaseLabel: false,
      style: {
        height: 60,
        backgroundColor: style.COL_WHITE,
        borderTopWidth: 0,
        elevation: 20
      },
      labelStyle: {
        fontSize: style.FONT_SIZE_XS - 1
      },
      indicatorStyle: {
        backgroundColor: style.COL_GOOGLE_BLUE
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

export const Drawer = createDrawerNavigator(
  {
    Väderprognos: Tabs,
    Information: InfoPage
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
