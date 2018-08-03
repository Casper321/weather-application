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
            color={style.COL_YELLOW_SUN}
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
            color={style.COL_YELLOW_SUN}
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
            color={style.COL_YELLOW_SUN}
          />
        )
      }

      break

    case 4:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-partlycloudy'
            size={iconSize}
            color={style.COL_CLOUDY}
          />
        )
      } else {
        icon = (
          <Ionicons
            name='md-cloudy-night'
            size={iconSize}
            color={style.COL_CLOUDY}
          />
        )
      }
      break

    case 5:
      if (isDay) {
        icon = (
          <MaterialCommunityIcons
            name='weather-partlycloudy'
            size={iconSize}
            color={style.COL_CLOUDY}
          />
        )
      } else {
        icon = (
          <Ionicons
            name='md-cloudy-night'
            size={iconSize}
            color={style.COL_CLOUDY}
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
            color={style.COL_CLOUDY}
          />
        )
      }
      break

    case 7:
      // Same icon for day and night
      icon = (
        <MaterialCommunityIcons
          name='weather-fog'
          size={iconSize}
          color={style.COL_DARK_GREY}
        />
      )
      break

    case 8:
      // Same icon for day and night
      icon = (
        <Ionicons name='md-rainy' size={iconSize} color={style.COL_CLOUDY} />
      )

      break

    case 9:
      // Same icon for day and night

      icon = (
        <Feather
          name='cloud-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )

      break

    case 10:
      // Same icon for day and night
      icon = (
        <Feather
          name='cloud-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 11:
      // Same icon for day and night
      icon = (
        <Ionicons
          name='ios-thunderstorm'
          size={iconSize}
          color={style.COL_BLACK}
        />
      )

      break

    case 12:
      // Same icon for day and night
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy-rain'
          size={iconSize}
          color={style.COL_BLACK}
        />
      )
      break

    case 13:
      // Same icon for day and night
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy-rain'
          size={iconSize}
          color={style.COL_BLACK}
        />
      )
      break

    case 14:
      // Same icon for day and night
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy-rain'
          size={iconSize}
          color={style.COL_BLACK}
        />
      )
      break

    case 15:
      // Same icon for day and night
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy'
          size={iconSize}
          color={style.COL_BLACK}
        />
      )
      break

    case 16:
      // Same icon for day and night
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 17:
      // Same icon for day and night
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 18:
      // Same icon for day and night
      icon = (
        <Ionicons
          name='md-rainy'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 19:
    // Same icon for day and night
      icon = (
        <Feather
          name='cloud-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 20:
    // Same icon for day and night
      icon = (
        <Feather
          name='cloud-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 21:
    // Same icon for day and night
      icon = (
        <Ionicons
          name='ios-thunderstorm'
          size={iconSize}
          color={style.COL_BLACK}
        />
      )
      break

    case 22:
    // Same icon for day and night
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy-rain'
          size={iconSize}
          color={style.COL_BLACK}
        />
      )
      break

    case 23:
    // Same icon for day and night
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy-rain'
          size={iconSize}
          color={style.COL_BLACK}
        />
      )
      break

    case 24:
    // Same icon for day and night
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy-rain'
          size={iconSize}
          color={style.COL_BLACK}
        />
      )

      break

    case 25:
    // Same icon for day and night
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy'
          size={iconSize}
          color={style.COL_BLACK}
        />
      )
      break

      case 26:
    // Same icon for day and night
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy'
          size={iconSize}
          color={style.COL_BLACK}
        />
      )
      break

    default:
      icon = null
      break
  }
  return icon
})
