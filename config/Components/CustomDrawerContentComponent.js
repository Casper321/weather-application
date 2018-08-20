import React, { Component } from 'react'
import { ScrollView, SafeAreaView, View, AsyncStorage, StyleSheet, Text, TouchableOpacity, Button } from 'react-native'
import { DrawerItems } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import s from '../../Assets/style'
import * as style from '../../Assets/style'
import fetchWeatherData from '../../Assets/Functions/fetchWeatherData'
import { connect } from 'react-redux'

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

  componentDidMount = () => {
    this.retriveData()
  }

  retriveData = async () => {
    try {
      let citiesSearched = await AsyncStorage.getItem('CitiesSearched')
      citiesSearched = JSON.parse(citiesSearched).filter(city => city !== null && city !== undefined && city)
      console.log(citiesSearched)
      if (citiesSearched !== null) {
        this.setState({ citiesSearched })
      }
    } catch (error) {
      console.log(error)
    }
  }

  onSelectCity = city => {
    const request = new XMLHttpRequest()
    console.log(city)
    request.open('GET', `https://eu1.locationiq.org/v1/search.php?key=102c0e44882475&q=${city}&format=json`, true)
    request.onload = () => {
      try {
        const city = JSON.parse(request.response)[0]
        if (city && city !== undefined) {
          fetchWeatherData(
            this.props.dispatch,
            parseInt(city.lat).toPrecision(5),
            parseInt(city.lon).toPrecision(5),
            city
          )
        }
      } catch (error) {
        console.log(error)
      }
    }
    request.send(null)
  }

  clearStorage = async () => {
    try {
      await AsyncStorage.removeItem('CitiesSearched')
    } catch (error) {
      console.log(error)
    }
  }

  logStorage = async () => {
    console.log('here!!')
    try {
      const storage = await AsyncStorage.getItem('CitiesSearched')
      console.log(storage)
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    const { citiesSearched } = this.state

    return (
      <ScrollView
        style={{
          paddingTop: Expo.Constants.statusBarHeight,
          padding: style.SPACING_M
        }}
      >
        {citiesSearched &&
          <View style={[s.mt3]}>
            <Text style={[s.fz1, s.bbw, s.bc, s.pb2, s.mt2, s.col_dark_grey]}>Senaste sökningar</Text>
            {citiesSearched.map((city, index) => {
              if (index <= 5) {
                return (
                  <TouchableOpacity key={`${Math.random() * 1000}`} onPress={() => this.onSelectCity(city)}>
                    <View style={styles.searchItem}>
                      <Text style={[s.fz1]}>{city}</Text>
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
    forecasts: state.weather.forecasts
  }
}

export default connect(mapStateToProps)(CustomDrawerContentComponent)
