import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Linking } from 'react-native'
import Container from '../../Components/Container'
import BoxContainer from '../../Components/BoxContainer'
import Header from '../../Components/Header'
import { connect } from 'react-redux'

import s from '../../Assets/style'
import * as style from '../../Assets/style'
import Title from '../../Components/Title'
import NormalText from '../../Components/NormalText'

export default class AnalysisPage extends Component {
  render () {

    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <BoxContainer containerStyle={styles.containerStyle}>
        <Title text='Under utveckling' />
            <NormalText>
              Spännande funktionalitet kommer läggas till i kommande uppdateringar.
              Hör gärna av dig med önskemål!
            </NormalText>
            <View style={[s.flexJce, s.flexAfs, s.mt2]}>
              <Button
                style={[s.col_water_blue, s.pb2]}
                onPress={() => Linking.openURL('mailto:kontakta.native@gmail.com')}
                title='Kontakta oss'
              />
            </View>
          </BoxContainer>
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