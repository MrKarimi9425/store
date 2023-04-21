import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Content from '../components/SignupScreen/Content'
import MyHeader from '../components/Header/MyHeader'
import MyFooter from '../components/Footer/MyFooter'
import { Container } from 'native-base'
import { useNavigation } from '@react-navigation/native'


let headerProps = {
  type: 'profile',
  headName: 'ثبت نام'
}
let footerProps = {
  color:'green',
  text:'ثبت نام در دیجی کالا'
}


const Signup = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <MyHeader {...headerProps} navigation={navigation}/>
      <ScrollView>
        <Content />
      </ScrollView>
      <MyFooter  {...footerProps}/>
    </Container>
  )
}

export default React.memo(Signup)

const styles = StyleSheet.create({

})