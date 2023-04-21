import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import MyHeader from '../components/Header/MyHeader';
import { useNavigation } from '@react-navigation/native';
import { Offs } from '../../components/OffScreen/Offs';

let props = {
  type:'main',
  headName: 'شارژر همراه',
  icon:'arrow'
}

function Off() {
  const navigation = useNavigation();

  return (
    <View style={styles.container} navigation={navigation}>
      <MyHeader {...props}/>
      <ScrollView>
        <Offs />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default React.memo(Off);