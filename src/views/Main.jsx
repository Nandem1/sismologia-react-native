import { View, Text } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import Sismos from '../components/Sismos'

const Main = () => {
  return (
    <View style={style.container}>
      <Text style={style.h1text}>Sismos recientes:</Text>
      <Sismos />
    </View>
  )
}

const style = {
  container: {
    marginTop: Constants.statusBarHeight
  },
  h1text: {
    fontSize: 32,
    backgroundColor: 'black',
    color: 'white',
    padding: 10
  }
}

export default Main