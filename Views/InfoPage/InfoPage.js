import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Button,
  Linking
} from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import BoxContainer from '../../Components/BoxContainer'
import { FontAwesome } from '@expo/vector-icons/'

import s from '../../Assets/style'
import * as style from '../../Assets/style'

export default class InfoPage extends Component {
  render () {
    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <ScrollView>

          <BoxContainer>
            <Text style={[s.col_black, s.fw1, s.fz1, s.pl2]}>
              Om appen
            </Text>
            <Text style={[s.pl2]}>
              Allt material kommer från SMHI:s väderdata.
              Läs mer på www.smhi.se.
            </Text>
          </BoxContainer>
          <BoxContainer>
            <Text style={[s.col_black, s.fw1, s.fz1, s.pl2]}>
              Om oss
            </Text>
            <Text style={[s.pb1, s.pl2]}>
              Vi är en grupp utvecklare från Chalmers.
            </Text>
            <TouchableHighlight
              underlayColor={style.COL_GREY}
              activeOpacity={1}
              onPress={() =>
                Linking.openURL(
                  'https://www.linkedin.com/in/joel-rudsberg-111a1915a/'
                )}
            >
              <View style={[s.flexDr, s.flexAce, s.pl2]}>

                <FontAwesome
                  name='linkedin-square'
                  color={style.COL_WATER_BLUE}
                  size={style.ICON_SIZE_MEDIUM}
                />
                <Text style={[s.pl1]}>
                  Joel Rudsberg
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={style.COL_GREY}
              activeOpacity={1}
              onPress={() =>
                Linking.openURL('https://www.facebook.com/carl.claesson.1')}
            >
              <View style={[s.flexDr, s.flexAce, s.pl2]}>

                <FontAwesome
                  name='linkedin-square'
                  color={style.COL_WATER_BLUE}
                  size={style.ICON_SIZE_MEDIUM}
                />
                <Text style={[s.pl1]}>
                  Carl Claesson
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={style.COL_GREY}
              activeOpacity={1}
              onPress={() =>
                Linking.openURL(
                  'https://www.linkedin.com/in/casperlindberg1997'
                )}
            >
              <View style={[s.flexDr, s.flexAce, s.pl2]}>

                <FontAwesome
                  name='linkedin-square'
                  color={style.COL_WATER_BLUE}
                  size={style.ICON_SIZE_MEDIUM}
                />
                <Text style={[s.pl1]}>
                  Casper Lindberg
                </Text>
              </View>
            </TouchableHighlight>

          </BoxContainer>

          <BoxContainer>
            <View style = {[s.pb3]}>
              <Text style={[s.col_black, s.fw1, s.fz1, s.pl2]}>
                Kontakt
              </Text>
              <Text style={[s.pb2, s.pl2]}>
                Har du synpunkter eller frågor om vår app? Behöver du hjälp att bygga en app?
                Kontakta gärna oss.
              </Text>
              <Button
                style={[s.col_water_blue, s.pb2]}
                onPress={() =>
                  Linking.openURL('mailto:kontakta.native@gmail.com')}
                title='Kontakta oss'
              />
            </View>
          </BoxContainer>
        </ScrollView>
      </Container>
    )
  }
}
