import React from 'react'
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  Ionicons
} from '@expo/vector-icons'
import * as style from '../style'

/*
  Parameters description
  https://opendata.smhi.se/apidocs/metfcst/parameters.html
*/

export default (getWeatherIcon = (num, iconSize = 30, isDay = true) => {
  let icon = null
  num++
  switch (num) {
    case 1:
      if (isDay) {
        icon = (
          <FontAwesome
            name='sun-o'
            size={iconSize}
            color={style.COL_YELLOW_SUN}
          />
        )
      } else {
        icon = (
          <FontAwesome
            name='moon-o'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 2:
      if (isDay) {
        icon = (
          <FontAwesome
            name='sun-o'
            size={iconSize}
            color={style.COL_YELLOW_SUN}
          />
        )
      } else {
        icon = (
          <FontAwesome
            name='moon-o'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 3:
      if (isDay) {
        icon = (
          <Ionicons
            name='ios-partly-sunny-outline'
            size={iconSize}
            color={style.COL_YELLOW_SUN}
          />
        )
      } else {
        icon = (
          <Ionicons
            name='ios-cloudy-night-outline'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }

      break

    case 4:
      if (isDay) {
        icon = (
          <Ionicons
            name='ios-partly-sunny-outline'
            size={iconSize}
            color={style.COL_YELLOW_SUN}
          />
        )
      } else {
        icon = (
          <Ionicons
            name='ios-cloudy-night-outline'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 5:
      if (isDay) {
        icon = (
          <Ionicons
            name='ios-cloudy'
            size={iconSize}
            color={style.COL_CLOUDY}
          />
        )
      } else {
        icon = (
          <Ionicons
            name='md-cloudy-night'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 6:
      if (isDay) {
        icon = (
          <Ionicons
            name='ios-cloudy'
            size={iconSize}
            color={style.COL_CLOUDY}
          />
        )
      } else {
        icon = (
          <Ionicons
            name='md-cloudy-night'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 7:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-fog'
            size={iconSize}
            color={style.COL_CLOUDY}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-fog'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 8:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-rainy'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-rainy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 9:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-pouring'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-pouring'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 10:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-pouring'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-pouring'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 11:
      if (isDay) {
        icon = (
          <Ionicons
            name='ios-thunderstorm-outline'
            size={iconSize}
            color={style.COL_BLACK}
          />
        )
      } else {
        icon = (
          <Ionicons
            name='ios-thunderstorm-outline'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 12:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 13:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 14:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 15:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 16:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 17:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 18:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-rainy'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-rainy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 19:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-pouring'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-pouring'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 20:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-pouring'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-pouring'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 21:
      if (isDay) {
        icon = (
          <Ionicons
            name='ios-thunderstorm-outline'
            size={iconSize}
            color={style.COL_BLACK}
          />
        )
      } else {
        icon = (
          <Ionicons
            name='ios-thunderstorm-outline'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 22:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break
    case 23:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 24:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_WATER_BLUE}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy-rainy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 25:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy'
            size={iconSize}
            color={style.COL_BLACK}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }

      break

    case 26:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy'
            size={iconSize}
            color={style.COL_BLACK}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    case 27:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy'
            size={iconSize}
            color={style.COL_BLACK}
          />
        )
      } else {
        icon = (
          <MaterialCommunityIcons
            name='weather-snowy'
            size={iconSize}
            color={style.COL_DARK_GREY}
          />
        )
      }
      break

    default:
      icon = null
      break
  }
  return icon
})
