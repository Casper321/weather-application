import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons/'
import * as style from '../../../Assets/style'

const CityHeader = ({ city }) => {
  return (
    <View style={styles.searchHeader}>
      <View style={styles.searchCity}>
        <FontAwesome name='star-o' color={style.COL_PRIMARY} size={style.ICON_SIZE_MEDIUM} />
        <Text style={styles.city}>{city}</Text>
      </View>
      <View style={styles.searchPin}>
        <MaterialCommunityIcons name='pin' color={style.COL_PRIMARY} size={style.ICON_SIZE_XS} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 14,
    paddingRight: 14
  },
  searchCity: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  searchPin: {
    flex: 6,
    alignItems: 'flex-end'
  },
  city: {
    marginLeft: 16,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000'
  }
})

export default CityHeader
