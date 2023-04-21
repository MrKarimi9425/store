import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyHeader from '../components/Header/MyHeader'
import { useNavigation } from '@react-navigation/native'

let props = {
  type:'search',
}

const Search = () => {
  const navigation = useNavigation();

  return (
    <View>
      <MyHeader {...props} navigation={navigation}/>
    </View>
  )
}

export default React.memo(Search)

const styles = StyleSheet.create({})