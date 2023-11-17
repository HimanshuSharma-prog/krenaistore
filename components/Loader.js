import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colours } from './Colours'

const Loader = () => {
  return (
    <View style={{
        width:'100%',
        alignItems:'center',
        padding:10
    }}>
        <ActivityIndicator size={'small'} color={Colours.textColor} />
      <Text style={{
        fontSize:18,
        color:Colours.textColor
      }}>Loading ...</Text>
    </View>
  )
}

export default Loader