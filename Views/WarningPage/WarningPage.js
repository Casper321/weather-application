import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList, TouchableHighlight, Alert} from 'react-native'
import BoxContainer from '../../Components/BoxContainer'
import Header from '../../Components/Header'
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons/'
import * as style from '../../Assets/style'
import s from '../../Assets/style'
import Warning from './Components/Warning'
import Container from '../../Components/Container'
import { connect, weatherActions } from 'react-redux'



class WarningPage extends Component {
  
  render () {
    const { weatherWarnings, currentLocation } = this.props

    const weatherWarningsInDistrict = []
    const weatherWarningsNotInDistrict = []

    weatherWarnings.forEach(warning => {
      const locationWords = warning.location.split(" ")
      let state = ''
      
      if(locationWords[1] === 'län'){
          
          state = locationWords[0]
      }
      else {
          state = locationWords[0] + ' ' + locationWords[1]
      }

      if (state + ' ' + 'län' === currentLocation.state){
        let warningData = {}
        warningData.location = warning.location
        warningData.icon = warning.icon
        warningData.message = warning.message
        weatherWarningsInDistrict.push(warningData)
      }
      else {
        let warningData = {}
        warningData.location = warning.location
        warningData.icon = warning.icon
        warningData.message = warning.message
        weatherWarningsNotInDistrict.push(warningData)
      }
    
    })
    const weatherWarningsInDistrictSorted = weatherWarningsInDistrict.sort((a, b) => a.location.localeCompare(b.location))
    const weatherWarningsNotInDistrictSorted = weatherWarningsNotInDistrict.sort((a, b) => a.location.localeCompare(b.location))
    const weatherWarningsSorted = [...weatherWarningsInDistrictSorted, ...weatherWarningsNotInDistrictSorted]
    let key = 0
    const Warnings = []

    weatherWarningsSorted.forEach(warning => {
      let warningData = {}
      key += 1
      warningData.key = key
      warningData.location = warning.location
      warningData.icon = warning.icon
      warningData.message = warning.message
      Warnings.push(warningData)
    })

    return (
      
      <Container>
        <Header navigation={this.props.navigation} />
        <ScrollView contentContainerStyle={[s.pb3]}>
      <BoxContainer>
      
      <FlatList
        //ListHeaderComponent={this.renderHeader}
        data={Warnings}
        keyExtractor={item => `${item.key}`}
    
        renderItem={({ item }) => (
          
          <TouchableHighlight underlayColor={style.COL_WHITE} onPress={() => Alert.alert(
            item.location,
            item.message,
            [
              {text: 'Tillbaka', onPress: () => console.log(item)},
            ],
            { cancelable: false }
          )}>

            <Warning
              location = {item.location}
              typeOfWarning = {item.icon}
              message = {item.message}
            />
          </TouchableHighlight>
        )}
      />
    </BoxContainer>
    </ScrollView>
    </Container>
    
    )
    // <Warning location={'DISPLAY location HERE'} typeOfWarning={'warning'} />
    // fire, weather-snowy, weather-rainy, weather-windy 
  }
}



function mapStateToProps (state) {
  return {
    weatherWarnings: state.weather.weatherWarnings,
    currentLocation: state.weather.currentLocation,
  }
}

export default connect(mapStateToProps)(WarningPage)

/*
    Behöver fixa så att message är varningen man får från Api och sedan mappa varningarna samt väljer rätt typeOfWarning
    */
