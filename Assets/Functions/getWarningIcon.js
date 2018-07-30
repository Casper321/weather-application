import React from 'react'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import * as style from '../style'
import { StyleSheet } from 'react-native'
import s from '../style'

export default (getWarningIcon = (eventType, iconSize = style.ICON_SIZE_SMALL) => {
    let icon = null
    //num++
    switch (eventType) {
      case 'fire warning':
        icon =  <MaterialCommunityIcons style={[styles.warningFire, s.abs]} name={'fire'} color={style.COL_PRIMARY} size={iconSize} />
        break
    
      case 'High temperatures':
        icon = < FontAwesome style={[styles.warningHeat, s.abs]} name={'thermometer'} color={style.COL_PRIMARY} size={iconSize} />
        break

      case 'heavy rain':
        icon =  <MaterialCommunityIcons style={[styles.warningFire, s.abs]} name={'weather-rainy'} color={style.COL_PRIMARY} size={iconSize} />
        break
  
      case 'heavy snow': 
        icon = <MaterialCommunityIcons style={[styles.warningFire, s.abs]} name={'weather-snowy'} color={style.COL_PRIMARY} size={iconSize} />
  
        break
  
      case 'gust':
        icon = <MaterialCommunityIcons style={[styles.warningFire, s.abs]} name={'weather-windy'} color={style.COL_PRIMARY} size={iconSize} />
  
        break
  
      default:
        icon = <FontAwesome style={[styles.warningFire, s.abs]} name={'warning'} color={style.COL_PRIMARY} size={iconSize} />
        break
    }
    return icon
  })

  const styles = StyleSheet.create({
    warningIconContainer: {
      height: 50,
      width: 50
    },
    warningFire: {
      top: -37,
      left: 10
    },
    warningHeat: {
        top: -37,
        left: 15
      }
  })