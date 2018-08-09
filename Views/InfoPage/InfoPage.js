import React, { Component } from 'react'
import { Text, View, TouchableHighlight, ScrollView, Button, Linking, StyleSheet } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import BoxContainer from '../../Components/BoxContainer'
import { FontAwesome } from '@expo/vector-icons/'

import s from '../../Assets/style'
import * as style from '../../Assets/style'
import Title from '../../Components/Title'
import NormalText from '../../Components/NormalText'
import BackHeader from '../../Components/BackHeader'

export default class InfoPage extends Component {
  render () {
    const { navigation, drawerNavigation } = this.props

    return (
      <Container>
        <BackHeader stackNavigation={navigation} drawerNavigation={drawerNavigation} title='Information' />
        <ScrollView contentContainerStyle={[s.pb3]}>

          <BoxContainer containerStyle={styles.containerStyle}>
            <Title text='Om appen' />
            <NormalText>
              Allt material kommer från SMHI:s väderdata.
              Läs mer på www.smhi.se.
            </NormalText>
          </BoxContainer>

          <BoxContainer containerStyle={styles.containerStyle}>
            <Title text='Om oss' />
            <NormalText>
              Vi är en grupp utvecklare från Chalmers som bygger applikationer för android och ios. Denna och våra andra applikationer är utvecklade i React Native.
            </NormalText>
            <View style={[s.flexDr, s.flexWw, s.mt2]}>
              <TouchableHighlight
                style={[s.mt1, s.mb1]}
                underlayColor={style.COL_GREY}
                activeOpacity={1}
                onPress={() => Linking.openURL('https://www.linkedin.com/in/joel-rudsberg-111a1915a/')}
              >
                <View style={[s.flexDr, s.flexAce]}>

                  <FontAwesome name='linkedin-square' color={style.COL_WATER_BLUE} size={style.ICON_SIZE_MEDIUM} />
                  <Text style={[s.pl1]}>
                    Joel Rudsberg
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={[s.mt1, s.mb1, s.ml3]}
                underlayColor={style.COL_GREY}
                activeOpacity={1}
                onPress={() => Linking.openURL('https://www.facebook.com/carl.claesson.1')}
              >
                <View style={[s.flexDr, s.flexAce]}>

                  <FontAwesome name='linkedin-square' color={style.COL_WATER_BLUE} size={style.ICON_SIZE_MEDIUM} />
                  <Text style={[s.pl1]}>
                    Carl Claesson
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={[s.mt1, s.mb1]}
                underlayColor={style.COL_GREY}
                activeOpacity={1}
                onPress={() => Linking.openURL('https://www.linkedin.com/in/casperlindberg1997')}
              >
                <View style={[s.flexDr, s.flexAce]}>
                  <FontAwesome name='linkedin-square' color={style.COL_WATER_BLUE} size={style.ICON_SIZE_MEDIUM} />
                  <Text style={[s.pl1]}>
                    Casper Lindberg
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </BoxContainer>

          <BoxContainer containerStyle={styles.containerStyle}>
            <Title text='Kontakt' />
            <NormalText>
              Har du synpunkter eller frågor om vår app? Behöver du hjälp att bygga en app?
              Kontakta gärna oss.
            </NormalText>
            <View style={[s.flexJce, s.flexAfs, s.mt2]}>
              <Button
                style={[s.col_water_blue, s.pb2]}
                onPress={() => Linking.openURL('mailto:kontakta.native@gmail.com')}
                title='Kontakta oss'
              />
            </View>
          </BoxContainer>

        </ScrollView>
      </Container>
    )
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
