import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import { connect } from 'react-redux'

class WarningPage extends Component {
  render () {
    const { number, currentLocation } = this.props

    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <View>
          <Text>Analyssidan yeah buddy</Text>
          <Text>{number}</Text>
          <Text>{currentLocation.city}</Text>
          <Text>{currentLocation.suburb}</Text>
          <Text>{currentLocation.latitude}</Text>
          <Text>{currentLocation.longitude}</Text>
        </View>
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    number: state.weather.number,
    currentLocation: state.weather.currentLocation
  }
}

export default connect(mapStateToProps)(WarningPage)
