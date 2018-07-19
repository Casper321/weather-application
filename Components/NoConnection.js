import React from 'react'
import { Text, View } from 'react-native'
import Container from './Container'
import s from '../Assets/Functions/style'

export const NoConnection = () => {
  return (
    <Container>
      <View style={[s.flexJce, s.flexAce]}>
        <Text>Vi kan tyvärr </Text>
      </View>
    </Container>
  )
}
