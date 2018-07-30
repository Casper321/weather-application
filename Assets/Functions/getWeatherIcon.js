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
      icon = (
        <MaterialCommunityIcons
          name='weather-partlycloudy'
          size={iconSize}
          color={style.COL_CLOUDY}
        />
      )

      break

    case 5:
      icon = (
        <Ionicons
          name='ios-partly-sunny-outline'
          size={iconSize}
          color={style.COL_CLOUDY}
        />
      )

      break

    case 6:
      icon = (
        <MaterialCommunityIcons
          name='weather-fog'
          size={iconSize}
          color={style.COL_DARK_GREY}
        />
      )
      break

    case 7:
      icon = (
        <MaterialCommunityIcons
          name='weather-fog'
          size={iconSize}
          color={style.COL_DARK_GREY}
        />
      )
      break

    case 8:
      icon = (
        <Feather
          name='cloud-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )

      break

    case 9:
      icon = (
        <Feather
          name='cloud-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )

      break

    case 10:
      icon = (
        <Feather
          name='cloud-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )

      break

    case 11:
      icon = (
        <Ionicons
          name='ios-thunderstorm'
          size={iconSize}
          color={style.COL_BLACK}
        />
      )

      break

    case 12:
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 13:
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 14:
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 15:
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 16:
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 17:
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 18:
      icon = (
        <Feather
          name='cloud-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 19:
      icon = (
        <Feather
          name='cloud-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 20:
      icon = (
        <Feather
          name='cloud-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 21:
      icon = (
        <Ionicons
          name='ios-thunderstorm'
          size={iconSize}
          color={style.COL_BLACK}
        />
      )

      break

    case 22:
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 23:
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )
      break

    case 24:
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy-rain'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )

      break

    case 25:
      icon = (
        <MaterialCommunityIcons
          name='weather-snowy'
          size={iconSize}
          color={style.COL_WATER_BLUE}
        />
      )

      break

    default:
      icon = null
      break
  }
  return icon
})
