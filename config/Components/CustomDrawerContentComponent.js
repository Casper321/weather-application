import React, { Component } from 'react'
import { ScrollView, SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Dimensions, Button } from 'react-native'
import { DrawerItems } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import s from '../../Assets/style'
import * as style from '../../Assets/style'
import fetchWeatherData from '../../Assets/Functions/fetchWeatherData'
import { connect } from 'react-redux'
import { searchHistoryActions } from '../../Redux/SearchHistoryReducer'

const { height } = Dimensions.get('window')

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
    this.props.navigation.closeDrawer()
  }

  clearStorage = () => {
    this.props.dispatch(searchHistoryActions.deleteCarHistory())
    this.props.navigation.closeDrawer()
  }

  render () {
    const { searchHistory } = this.props

    return (
      <ScrollView
        style={{
          padding: style.SPACING_M,
          paddingTop: Platform.OS === 'android' && Platform.Version >= 20 ? 34 : 0,
          flex: 1
        }}
      >
        <SafeAreaView style={[s.flex1]} forceInset={{ top: 'always', horizontal: 'never' }}>
          {searchHistory.length >= 1 &&
            <View style={[s.mt3, s.mb3]}>
              <Text style={[s.fz1, s.bbw, s.bc, s.pb2, s.mt2, s.col_dark_grey]}>Senaste sökningar</Text>
              {searchHistory.map((city, index) => {
                if (index <= 4) {
                  return (
                    <TouchableOpacity key={`${Math.random() * 1000}`} onPress={() => this.onSelectCity(city)}>
                      <View style={styles.searchItem}>
                        <Text style={[s.fz1]}>{city.city}</Text>
                        <View style={[s.mlA, s.flexDr]}>
                          <TouchableOpacity onPress={() => this.onDeleteCity(index)}>
                            <FontAwesome
                              style={[s.mr3]}
                              name='trash'
                              color={style.COL_DARK_GREY}
                              size={style.ICON_SIZE_SMALL}
                            />
                          </TouchableOpacity>
                          <FontAwesome
                            style={[s.pr2]}
                            name='search'
                            color={style.COL_GOOGLE_BLUE}
                            size={style.ICON_SIZE_SMALL}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
                } else {
                  return null
                }
              })}
              {searchHistory.length >= 2 &&
                <View style={[s.flexDr, s.mt3]}>
                  <Button style={[s.col_water_blue]} onPress={() => this.clearStorage()} title='Rensa historik' />
                </View>}
            </View>}
          <View>
            <Text style={[s.fz1, s.bbw, s.bc, s.pb2, s.mt2, s.col_dark_grey]}>Övriga sidor</Text>
            <DrawerItems {...this.props} />
          </View>
        </SafeAreaView>
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
