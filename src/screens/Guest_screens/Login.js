import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Content from '../../components/Guest_components/Login_components/Content_login'
import MyHeader from '../../components/Header/MyHeader'
import MyFooter from '../../components/Footer/MyFooter'
import { Container } from 'native-base'

let props = {
  type: 'profile',
  headName: 'ورود'
}
let footerProps = {
  color:'green',
  text:'ورود به دیجی کالا'
}

const Login = () => {
  return (
    <Container>
      <MyHeader {...props} />
      <ScrollView>
        <Content />
      </ScrollView>
      <MyFooter {...footerProps}/>
    </Container>
  )
}

export default React.memo(Login)

const styles = StyleSheet.create({})