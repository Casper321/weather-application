import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, ScrollView, FlatList, TouchableHighlight } from 'react-native'
import { SearchBar } from 'react-native-elements'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import SearchItem from './Components/SearchItem'
import BoxContainer from '../../Components/BoxContainer'
import style from '../../Assets/style'
import * as s from '../../Assets/style'

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

  onCityPicked = city => {
    console.log(city)
  }

  render () {
    const { citiesAvailable } = this.state
    let citiesList = []

    if (citiesAvailable.length >= 1) {
      citiesList = citiesAvailable.map(city => {
        let cityObj = {}
        cityObj.cityName = city.city.substring(0, city.city.indexOf(','))
        cityObj.longerLocationName = city.city.substring(city.city.indexOf(',') + 2, city.city.length)
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
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
