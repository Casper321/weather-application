import React, { Component } from 'react'
import { Text, View, TouchableHighlight, ScrollView, Button, Linking, StyleSheet, Modal, Platform } from 'react-native'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import BoxContainer from '../../Components/BoxContainer'
import { FontAwesome } from '@expo/vector-icons/'

import s from '../../Assets/style'
import * as style from '../../Assets/style'
import Title from '../../Components/Title'
import NormalText from '../../Components/NormalText'
import BackHeader from '../../Components/BackHeader'

export default class SettingsPage extends Component {
  state = {
    modalVisible: false
  }

  setModalVisible (visible) {
    this.setState({ modalVisible: visible })
  }

  render () {
    const { navigation } = this.props

    return (
      <View
        style={[
          s.flex1,
          s.col_bg_white,
          {
            paddingTop: Platform.OS === 'android' ? Expo.Constants.statusBarHeight : 0
          }
        ]}
      >
        <BackHeader stackNavigation={navigation} title='Inställningar' />
        <ScrollView contentContainerStyle={[s.pb3]}>
          <TouchableHighlight style={styles.itemContainer}>
            <View style={[s.flexJsa]}>
              <Text style={styles.itemHeader}>
                Vindenhet
              </Text>
              <Text style={styles.subItemHeader}>
                Meter per sekund (m/s)
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.itemContainer}>
            <View style={[s.flexJsa]}>
              <Modal
                animationType='slide'
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  alert('Modal has been closed.')
                }}
              >
                <View style={{ marginTop: 22 }}>
                  <View>
                    <Text>Hello World!</Text>

                    <TouchableHighlight
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible)
                      }}
                    >
                      <Text>Hide Modal</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(true)
                }}
              >
                <Text>Show Modal</Text>
              </TouchableHighlight>
              <Text style={styles.subItemHeader}>
                Meter per sekund (m/s)
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.itemContainer}>
            <View style={[s.flexJsa]}>
              <Text style={styles.itemHeader}>
                Vindenhet
              </Text>
              <Text style={styles.subItemHeader}>
                Meter per sekund (m/s)
              </Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: style.SPACING_M,
    borderBottomWidth: style.BORDER_WIDTH_STANDARD,
    borderColor: style.COL_GREY
  },
  itemHeader: {
    fontSize: style.FONT_SIZE_S
  },
  subItemHeader: {
    fontSize: style.FONT_SIZE_XS,
    color: style.COL_DARK_GREY
  }
})
