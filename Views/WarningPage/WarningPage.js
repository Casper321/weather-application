import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList, TouchableHighlight, Alert} from 'react-native'
import BoxContainer from '../../Components/BoxContainer'
import Header from '../../Components/Header'
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons/'
import * as style from '../../Assets/style'
import s from '../../Assets/style'
import Warning from './Components/Warning'
import Container from '../../Components/Container'
import { connect } from 'react-redux'



class WarningPage extends Component {
  
  _onPress(){
    Alert.alert(
      item.location,
      item.message,
      [
        {text: 'Cancel', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  
  render () {
    const { weatherWarnings } = this.props
    let key = 0
    const Warnings = []

    weatherWarnings.forEach(warning => {
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
              {text: 'Tillbaka', onPress: () => console.log('Tillbaka Pressed')},
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
    weatherWarnings: state.weather.weatherWarnings
  }
}

export default connect(mapStateToProps)(WarningPage)

/*
    Behöver fixa så att message är varningen man får från Api och sedan mappa varningarna samt väljer rätt typeOfWarning
    */
