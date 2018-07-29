import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native'
import BoxContainer from '../../Components/BoxContainer'
import Header from '../../Components/Header'
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons/'
import * as style from '../../Assets/style'
import s from '../../Assets/style'
import Warning from './Components/Warning'
import Container from '../../Components/Container'


export default class WarningPage extends Component {
  render () {
    return (
      <BoxContainer>
      <FlatList
        ListHeaderComponent={() => <Header navigation={this.props.navigation} />}
        renderItem={({ foreCastWarnings }) => (
          <TouchableHighlight underlayColor={style.COL_GREY} activeOpacity={1}>
            <Warning
              location = {foreCastWarnings.location}
            />
          </TouchableHighlight>
        )}
      />
    </BoxContainer>
    )


    
    // <Warning location={'DISPLAY location HERE'} typeOfWarning={'warning'} />
    // fire, weather-snowy, weather-rainy, weather-windy 
  }
}

const styles = StyleSheet.create({
  warningIconContainer: {
    height: 50,
    width: 50
  },
  warningFire: {
    top: -37,
    left: 10
  }
})

/*
    Behöver fixa så att message är varningen man får från Api och sedan mappa varningarna samt väljer rätt typeOfWarning
    */
