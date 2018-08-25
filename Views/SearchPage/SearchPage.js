import React, { Component } from 'react'
import {
  AsyncStorage,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableHighlight,
  Button,
  Keyboard
} from 'react-native'
import { SearchBar } from 'react-native-elements'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import SearchItem from './Components/SearchItem'
import BoxContainer from '../../Components/BoxContainer'
import * as style from '../../Assets/style'
import s from '../../Assets/style'
import { weatherActions } from '../../Redux/WeatherReducer'
import { searchHistoryActions } from '../../Redux/SearchHistoryReducer'
import { connect } from 'react-redux'
import fetchWeatherForecast from '../../Assets/Functions/fetchWeatherForecast'
import NormalText from '../../Components/NormalText'
import Loading from '../../Components/Loading'
import FetchFailed from '../../Components/FetchFailed'

const allowedCountries = ['Sweden', 'Sverige', 'Norge', 'Norway', 'Finland']

class SearchPage extends Component {
  state = {
    citySearch: '',
    citiesAvailable: [],
    hasSearched: false,
    isSearching: false,
    invalidSearch: false
  }

  componentDidMount = () => {
    this.search.focus()
  }

  onType = city => {
    this.setState({ citySearch: city })
  }

  onSubmit = () => {
    this.setState({ isSearching: true })
    this.searchCities(this.state.citySearch)
  }

  searchCities = city => {
    const request = new XMLHttpRequest()
    request.open('GET', `https://eu1.locationiq.org/v1/search.php?key=102c0e44882475&q=${city}&format=json`, true)
    request.onload = () => {
      try {
        const cities = JSON.parse(request.response)
        console.log(cities)
        console.log(cities.error)
        if (cities && cities !== undefined && cities.error !== 'Unable to geocode') {
          const citiesAvailable = []
          cities.map(city => {
            const wordArr = city.display_name.split(' ')
            const country = wordArr[wordArr.length - 1]

            if (allowedCountries.find(allowedCountry => allowedCountry === country)) {
              let cityObj = {}
              cityObj.city = city.display_name
              cityObj.latitude = city.lat
              cityObj.longitude = city.lon
              citiesAvailable.push(cityObj)
            }
          })

          this.setState({ citiesAvailable, hasSearched: true, isSearching: false, invalidSearch: false })
        } else {
          console.log('here')
          this.setState({ invalidSearch: true })
        }
      } catch (error) {
        console.log(error)
        this.setState({ invalidSearch: true })
      }
    }
    request.send(null)
  }

  onCityPicked = city => {
    let { latitude, longitude, cityName, longerLocationName } = city
    let longerLocationNameList = longerLocationName.split(',')
    let longerLocationNameList2 = [[]]
    let state = ''
    for (i = 0; i < longerLocationNameList.length; i++) {
      longerLocationNameList2[i] = longerLocationNameList[i].split(' ')
    }
    if (longerLocationNameList2[0][1] === 'län') {
      state = longerLocationNameList2[0][0] + ' ' + longerLocationNameList2[0][1]
    }
    for (i = 1; i < longerLocationNameList2.length; i++) {
      if (longerLocationNameList2[i][2] === 'län') {
        state = longerLocationNameList2[i][1] + ' ' + longerLocationNameList2[i][2]
      }
      if (longerLocationNameList2[i][3] === 'län') {
        state =
          longerLocationNameList2[i][1] + ' ' + longerLocationNameList2[i][2] + ' ' + longerLocationNameList2[i][3]
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

    if (!this.props.searchHistory.find(searchItem => searchItem.city === city.cityName)) {
      this.props.dispatch(
        searchHistoryActions.addSearchHistoryItem({
          city: city.cityName,
          state: state,
          latitude,
          longitude
        })
      )
    }

    let { weatherWarnings } = this.props

    let weatherWarningsInDistrict = []

    weatherWarnings.forEach(warning => {
      const locationWords = warning.location.split(' ')
      let thisstate = ''

      if (locationWords[1] === 'län') {
        thisstate = locationWords[0]
      } else {
        thisstate = locationWords[0] + ' ' + locationWords[1]
      }

      if (thisstate + ' län' === state) {
        let warningData = {}
        warningData.location = warning.location
        warningData.icon = warning.icon
        warningData.message = warning.message
        weatherWarningsInDistrict.push(warningData)
      }
    })

    const weatherWarningsInDistrictSorted = weatherWarningsInDistrict.sort((a, b) =>
      a.location.localeCompare(b.location)
    )
    this.props.dispatch(weatherActions.setWeatherWarningsInDistrict(weatherWarningsInDistrictSorted))
    fetchWeatherForecast(latitude, longitude, city.cityName, this.props.dispatch)
    this.props.navigation.navigate('Start')
  }

  render () {
    const { citiesAvailable, citySearch, hasSearched, invalidSearch, isSearching } = this.state
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

    const searchButton = (
      <Button
        disabled={!citySearch}
        style={[s.col_water_blue]}
        onPress={this.onSubmit}
        title={citySearch ? 'SÖK NU' : 'Skriv ortsnamn för att söka'}
      />
    )

    console.log(invalidSearch)

    return (
      <Container>
        <SearchBar
          ref={search => (this.search = search)}
          onChangeText={this.onType}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Skriv din ort här...'
          returnKeyType='search'
          onSubmitEditing={this.onSubmit}
          style={[s.pt2, s.pb2, s.boxSh]}
        />
        <ScrollView contentContainerStyle={[s.pb3]}>
          {isSearching
            ? <Loading message='Hämtar ortsdata...' />
            : invalidSearch
                ? <View>
                  <View>
                    <FetchFailed
                      style={[s.mb3]}
                      text='Kunde inte hämta ortsdata. Vänligen kontrollera att du stavade rätt och har internetanslutning.'
                      />
                  </View>
                  {searchButton}
                </View>
                : citiesList.length >= 1
                    ? <View>
                      <FlatList
                        data={citiesList}
                        keyExtractor={() => `${Math.random() * 1000}`}
                        renderItem={({ item }) => (
                          <BoxContainer containerStyle={{ marginBottom: style.SPACING_S }}>
                            <TouchableHighlight
                              style={{ borderRadius: 14 }}
                              underlayColor={style.COL_YELLOW_SUN}
                              onPress={() => this.onCityPicked(item)}
                              >
                              <SearchItem city={item.cityName} longerLocationName={item.longerLocationName} />
                            </TouchableHighlight>
                          </BoxContainer>
                          )}
                        />
                      <View style={[s.w, s.mlA, s.mrA, s.mt3]}>
                        <Button
                          disabled={!citySearch}
                          style={[s.col_water_blue]}
                          onPress={this.onSubmit}
                          title={citySearch ? 'SÖK IGEN' : 'Skriv ortsnamn för att söka'}
                          />
                      </View>
                    </View>
                    : hasSearched
                        ? <BoxContainer paddingize>
                          <NormalText>
                              Ingen platser matchade din sökning. Skriv du in det rätt?
                            </NormalText>
                          {searchButton}
                        </BoxContainer>
                        : <View style={[s.mt3, s.w, s.mrA, s.mlA]}>
                          {searchButton}
                        </View>}
        </ScrollView>
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentLocation: state.weather.currentLocation,
    weatherWarningsInDistrict: state.weather.weatherWarningsInDistrict,
    weatherWarnings: state.weather.weatherWarnings,
    searchHistory: state.searchHistory.searchHistory
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
