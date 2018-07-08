import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import * as style from '../Assets/style'
import s from '../Assets/style'

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerInfo}>
        <Entypo name='info' size={style.ICON_SIZE_SMALL} color={style.COL_PRIMARY} />
      </View>
      <View>
        <Text style={style.headerBrandText}>WeatherPro</Text>
      </View>
      <View style={styles.headerUtility}>
        <FontAwesome
          style={styles.headerUtilityItem}
          name='search'
          color={style.COL_PRIMARY}
          size={style.ICON_SIZE_SMALL}
        />
        <FontAwesome name='map-marker' color={style.COL_PRIMARY} size={style.ICON_SIZE_SMALL} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000'
  },
  headerInfo: {
    flex: 1,
    marginLeft: 20
  },
  headerBrandText: {
    flex: 1,
    fontSize: 19,
    fontWeight: '700',
    color: '#000' /* #C70039 */
  },
  headerUtility: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20
  },
  headerUtilityItem: {
    marginRight: 20
  }
})

export default Header
