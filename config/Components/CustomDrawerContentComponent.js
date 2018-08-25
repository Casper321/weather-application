import React, { Component } from 'react'
import { ScrollView, SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native'
import { DrawerItems } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import s from '../../Assets/style'
import * as style from '../../Assets/style'
import fetchWeatherData from '../../Assets/Functions/fetchWeatherData'
import { connect } from 'react-redux'
import { searchHistoryActions } from '../../Redux/SearchHistoryReducer'

const styles = StyleSheet.create({
  searchItem: {
    paddingTop: style.SPACING_M,
    paddingBottom: style.SPACING_M,
    borderBottomWidth: style.BORDER_WIDTH_STANDARD,
    borderColor: style.COL_GREY,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

class CustomDrawerContentComponent extends Component {
  state = {
    citiesSearched: []
  }

  onSelectCity = city => {
    fetchWeatherData(this.props.dispatch, city.latitude, city.longitude, city.city)
    this.props.navigation.closeDrawer()
  }

  onDeleteCity = index => {
    this.props.dispatch(searchHistoryActions.deleteSearchHistoryItem(index))
  }

  render () {
    const { searchHistory } = this.props

    console.log('SEARCHHISTORY: ', searchHistory)

    return (
      <ScrollView
        style={{
          paddingTop: Expo.Constants.statusBarHeight,
          padding: style.SPACING_M
        }}
      >
        {searchHistory.length >= 1 &&
          <View style={[s.mt3]}>
            <Text style={[s.fz1, s.bbw, s.bc, s.pb2, s.mt2, s.col_dark_grey]}>Senaste sökningar</Text>
            {searchHistory.map((city, index) => {
              if (index <= 5) {
                return (
                  <TouchableOpacity key={`${Math.random() * 1000}`} onPress={() => this.onSelectCity(city)}>
                    <View style={styles.searchItem}>
                      <Text style={[s.fz1]}>{city.city}</Text>
                      <TouchableOpacity onPress={() => this.onDeleteCity(index)}>
                        <FontAwesome
                          style={[s.mr2, s.mlA]}
                          name='trash'
                          color={style.COL_DARK_GREY}
                          size={style.ICON_SIZE_SMALL}
                        />
                      </TouchableOpacity>
                      <FontAwesome
                        style={[s.mr2, s.mlA]}
                        name='search'
                        color={style.COL_GOOGLE_BLUE}
                        size={style.ICON_SIZE_SMALL}
                      />
                    </View>
                  </TouchableOpacity>
                )
              } else {
                return null
              }
            })}
            <Button title='Rensa historik' onPress={() => this.clearStorage()} />
          </View>}
        <View style={[s.mt2]}>
          <DrawerItems {...this.props} />
        </View>
        <Button title='Visa storage' onPress={() => this.logStorage()} />
        <SafeAreaView style={[s.flex1]} forceInset={{ top: 'always', horizontal: 'never' }} />
      </ScrollView>
    )
  }
}

function mapStateToProps (state) {
  return {
    searchHistory: state.searchHistory.searchHistory
  }
}

export default connect(mapStateToProps)(CustomDrawerContentComponent)
