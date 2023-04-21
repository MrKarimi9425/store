import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Content from '../components/ForgetPassScreen/Content'
import MyHeader from '../components/Header/MyHeader'


let props = {
  type:'password',
  headName:'تایید شماره تلفن همراه'
}
const ForgetPass = () => {
  return (
    <View>
      <MyHeader {...props}/>
        <Content/>
    </View>
  )
}

export default React.memo(ForgetPass)

const styles = StyleSheet.create({})