import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList, TouchableHighlight, Alert } from 'react-native'
import BoxContainer from '../../Components/BoxContainer'
import Header from '../../Components/Header'
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons/'
import * as style from '../../Assets/style'
import s from '../../Assets/style'
import Warning from './Components/Warning'
import Container from '../../Components/Container'
import { connect, weatherActions } from 'react-redux'
import Loading from '../../Components/Loading'
import Title from '../../Components/Title'
import NormalText from '../../Components/NormalText'

class WarningPage extends Component {
  itemSeparator = () => {
    return <View style={[s.boxSh]} />
  }

  render () {
    const { weatherWarnings, currentLocation } = this.props

    const weatherWarningsInDistrict = []
    const weatherWarningsNotInDistrict = []

    weatherWarnings.forEach(warning => {
      const locationWords = warning.location.split(' ')
      let state = ''

      if (locationWords[1] === 'län') {
        state = locationWords[0]
      } else {
        state = locationWords[0] + ' ' + locationWords[1]
      }

      if (state + ' ' + 'län' === currentLocation.state) {
        let warningData = {}
        warningData.location = warning.location
        warningData.icon = warning.icon
        warningData.message = warning.message
        weatherWarningsInDistrict.push(warningData)
      } else {
        let warningData = {}
        warningData.location = warning.location
        warningData.icon = warning.icon
        warningData.message = warning.message
        weatherWarningsNotInDistrict.push(warningData)
      }
    })
    const weatherWarningsInDistrictSorted = weatherWarningsInDistrict.sort((a, b) =>
      a.location.localeCompare(b.location)
    )
    const weatherWarningsNotInDistrictSorted = weatherWarningsNotInDistrict.sort((a, b) =>
      a.location.localeCompare(b.location)
    )
    const weatherWarningsSorted = [...weatherWarningsInDistrictSorted, ...weatherWarningsNotInDistrictSorted]
    let key = 0
    const Warnings = []

    weatherWarningsSorted.forEach(warning => {
      let warningData = {}
      key += 1
      warningData.key = key
      let locationList = []
      locationList = warning.location.split(',')
      warningData.location = locationList.length === 2 ? locationList[0] + ', ' + locationList[1] : warning.location
      warningData.icon = warning.icon
      warningData.message = warning.message
      Warnings.push(warningData)
    })

    return (
      <Container>
        <Header navigation={this.props.navigation} />
        {weatherWarnings.length >= 1
          ? <ScrollView contentContainerStyle={[s.pb3]}>
            <FlatList
                // ListHeaderComponent={this.renderHeader}
              ItemSeparatorComponent={() => this.itemSeparator()}
              data={Warnings}
              keyExtractor={item => `${item.key}`}
              renderItem={({ item }) => (
                <BoxContainer containerStyle={{ marginBottom: style.SPACING_S }}>
                  <TouchableHighlight
                    style={{ borderRadius: 14 }}
                    underlayColor={style.COL_GREY}
                    onPress={() =>
                        Alert.alert(
                          item.location,
                          item.message,
                          [{ text: 'Tillbaka', onPress: () => console.log(item) }],
                          {
                            cancelable: false
                          }
                        )}
                    >
                    <Warning location={item.location} typeOfWarning={item.icon} message={item.message} />
                  </TouchableHighlight>
                </BoxContainer>
                )}
              />
          </ScrollView>
          : <BoxContainer containerStyle={styles.containerStyle}>
            <NormalText>
                Det finns inga varningar utfärdade i Sverige av SMHI.
              </NormalText>
          </BoxContainer>}
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    weatherWarnings: state.weather.weatherWarnings,
    currentLocation: state.weather.currentLocation
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: style.SPACING_M,
    paddingBottom: style.SPACING_M,
    paddingLeft: style.SPACING_M,
    paddingRight: style.SPACING_M
  }
})

export default connect(mapStateToProps)(WarningPage)

/*
    Behöver fixa så att message är varningen man får från Api och sedan mappa varningarna samt väljer rätt typeOfWarning
    */
