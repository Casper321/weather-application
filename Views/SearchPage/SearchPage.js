import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native'
import { SearchBar } from 'react-native-elements'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import SearchItem from './Components/SearchItem'
import BoxContainer from '../../Components/BoxContainer'

export default class SearchPage extends Component {
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
      } catch (error) {}
    }
    request.send(null)
  }

  render () {
    const { citiesAvailable } = this.state
    let citiesList

    if (citiesAvailable.length >= 1) {
      citiesList = citiesAvailable.map(city => {
        const cityName = city.city.substring(0, city.city.indexOf(','))
        const longerLocationName = city.city.substring(city.city.indexOf(',') + 2, city.city.length)

        if (city && city !== undefined) {
          return (
            <TouchableNativeFeedback onPress={console.log(cityName)}>
              <SearchItem city={cityName} longerLocationName={longerLocationName} key={Math.random() * 1000} />
            </TouchableNativeFeedback>
          )
        }
      })
    }

    return (
      <Container>
        <SearchBar
          onChangeText={this.onType}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Skriv din ort här...'
        />
        {citiesAvailable && <ScrollView><BoxContainer>{citiesList}</BoxContainer></ScrollView>}
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
