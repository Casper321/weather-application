import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, ScrollView, FlatList, TouchableHighlight } from 'react-native'
import { SearchBar } from 'react-native-elements'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import SearchItem from './Components/SearchItem'
import BoxContainer from '../../Components/BoxContainer'
import style from '../../Assets/style'
import * as s from '../../Assets/style'
import { weatherActions } from '../../Redux/WeatherReducer'
import { connect } from 'react-redux'
import fetchWeatherForecast from '../../Assets/Functions/fetchWeatherForecast'

class SearchPage extends Component {
  state = {
    citySearch: '',
    citiesAvailable: []
  }

  onType = city => {
    this.searchCities(city)
    this.setState({ citySearch: city })
  }

  searchCities = city => {
    const request = new XMLHttpRequest()
    request.open('GET', `https://eu1.locationiq.org/v1/search.php?key=102c0e44882475&q=${city}&format=json`, true)
    request.onload = () => {
      try {
        const cities = JSON.parse(request.response)
        if (cities && cities !== undefined) {
          const citiesAvailable = cities.map(city => {
            let cityObj = {}
            cityObj.city = city.display_name
            cityObj.latitude = city.lat
            cityObj.longitude = city.lon
            return cityObj
          })

          this.setState({ citiesAvailable, searchFound: true })
        }
      } catch (error) {
        //console.log(error)
      }
    }
    request.send(null)
  }

  onCityPicked = city => {
    let { latitude, longitude, cityName, longerLocationName } = city
    let longerLocationNameList = longerLocationName.split(',')
    console.log(longerLocationNameList)
    let longerLocationNameList2 = [[]];
    let state = ''
    for(i=0;i<longerLocationNameList.length;i++){
      longerLocationNameList2[i] = longerLocationNameList[i].split(" ")
   }
    console.log(longerLocationNameList2)
    if(longerLocationNameList2[0][1] === 'län'){ 
      state = longerLocationNameList2[0][0] + ' ' + longerLocationNameList2[0][1]
      console.log(longerLocationNameList2[0] + ' ' + longerLocationNameList2[0][1])
    }
    for(i=1;i<longerLocationNameList2.length;i++){
      if(longerLocationNameList2[i][2] === 'län'){ 
        state = longerLocationNameList2[i][1] + ' ' + longerLocationNameList2[i][2]
        console.log(longerLocationNameList2[i][1] + ' ' + longerLocationNameList2[i][2])
      }
      if(longerLocationNameList2[i][3] === 'län'){ 
        state = longerLocationNameList2[i][1] + ' ' + longerLocationNameList2[i][2] + ' ' + longerLocationNameList2[i][3]
        console.log(longerLocationNameList2[i][1] + ' ' + longerLocationNameList2[i][2]+ ' ' + longerLocationNameList2[i][3])
      }
    }

    

    latitude = parseFloat(latitude)
    longitude = parseFloat(longitude)
    this.props.dispatch(
      weatherActions.setCurrentLocation({
        latitude,
        longitude,
        city: city.cityName || '',
        suburb: city.cityName || '',
        state: state || ''
      })
    )
    fetchWeatherForecast(latitude, longitude, city.cityName, this.props.dispatch)
    this.props.navigation.navigate('Start')
  }

  render () {
    const { citiesAvailable } = this.state
    let citiesList = []

    if (citiesAvailable.length >= 1) {
      citiesList = citiesAvailable.map(city => {
        let cityObj = {}
        cityObj.cityName = city.city.substring(0, city.city.indexOf(','))
        cityObj.longerLocationName = city.city.substring(city.city.indexOf(',') + 2, city.city.length)
        cityObj.latitude = Number.parseFloat(city.latitude).toPrecision(5)
        cityObj.longitude = Number.parseFloat(city.longitude).toPrecision(5)
        return cityObj
      })
    } else {
      citiesList = []
    }

    return (
      <Container>
        <SearchBar
          onChangeText={this.onType}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Skriv din ort här...'
        />
        {citiesList.length >= 1
          ? <FlatList
            data={citiesList}
            keyExtractor={() => Math.random() * 1000}
            renderItem={({ item }) => (
              <BoxContainer>
                <TouchableHighlight underlayColor={style.COL_GREY} onPress={() => this.onCityPicked(item)}>
                  <SearchItem city={item.cityName} longerLocationName={item.longerLocationName} />
                </TouchableHighlight>
              </BoxContainer>
              )}
            />
          : null}

        <TextInput
          onChangeText={this.onType}
          value={this.state.citySearch}
          placeholder='Skriv här...'
          autoCapitalize='words'
          autoFocus
          style={styles.input}
          underlineColorAndroid='rgba(0,0,0,0)'
        />
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentLocation: state.weather.currentLocation
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff'
  },
  inputContainer: {
    borderRadius: s.br,
    borderWidth: s.bw,
    borderColor: s.bc
  }
})

export default connect(mapStateToProps)(SearchPage)
