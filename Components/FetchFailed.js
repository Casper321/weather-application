import React from 'react'
import s from '../Assets/style'
import * as style from '../Assets/style'
import NormalText from './NormalText'
import BoxContainer from './BoxContainer'
import { View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons/'

const FetchFailed = ({ text }) => {
  return (
    <BoxContainer paddingize>
      <View>
        <View style={[s.mb2, s.flexAce]}>
          <FontAwesome name='warning' size={style.ICON_SIZE_MEDIUM} color={style.COL_WARNING} />
        </View>
        <NormalText>
          {text}
        </NormalText>
      </View>
    </BoxContainer>
  )
}

export default FetchFailed
