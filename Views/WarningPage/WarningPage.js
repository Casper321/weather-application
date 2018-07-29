import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList, TouchableHighlight } from 'react-native'
import BoxContainer from '../../Components/BoxContainer'
import Header from '../../Components/Header'
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons/'
import * as style from '../../Assets/style'
import s from '../../Assets/style'
import Warning from './Components/Warning'
import Container from '../../Components/Container'
import { connect } from 'react-redux'


class WarningPage extends Component {
 
  render () {
    const { weatherWarnings } = this.props

    return (
      <Container>
        <Header navigation={this.props.navigation} />
      <BoxContainer>
      
      <FlatList
        //ListHeaderComponent={this.renderHeader}
        data={weatherWarnings}
        
     
        renderItem={({ item }) => (
          <TouchableHighlight underlayColor={style.COL_GREY} onPress={() => console.log(item.message)}>
            <Warning
              location = {item.location}
            />
           </TouchableHighlight>
        )}
      />
    </BoxContainer>
    </Container>
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

function mapStateToProps (state) {
  return {
    weatherWarnings: state.weather.weatherWarnings
  }
}

export default connect(mapStateToProps)(WarningPage)

/*
    Behöver fixa så att message är varningen man får från Api och sedan mappa varningarna samt väljer rätt typeOfWarning
    */
