import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons/'
import * as style from '../../../Assets/style'

const Warning = ({ message = 'Ingen varning utfärdad.' }) => {
  return (
    <View style={styles.warning}>
      <View style={styles.warningIconContainer}>
        <View style={[styles.center, styles.flexOne]}>
          <FontAwesome style={styles.warningCircle} name='circle-thin' color={style.COL_WARNING} size={50} />
        </View>
        <View style={styles.center}>
          <MaterialCommunityIcons
            style={styles.warningFire}
            name='fire'
            color={style.COL_PRIMARY}
            size={style.ICON_SIZE_SMALL}
          />
        </View>
      </View>
      <Text style={[styles.descText, styles.flexSeven]}>
        {message}
      </Text>
      <View style={[styles.warningArrow, styles.flexOne]}>
        <Feather name='chevron-right' color={style.COL_PRIMARY} size={style.ICON_SIZE_MEDIUM} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  warning: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 6,
    marginBottom: 12,
    marginTop: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  warningIconContainer: {
    height: 50,
    width: 50
  },
  warningArrow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

export default Warning
