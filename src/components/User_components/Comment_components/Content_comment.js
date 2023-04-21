import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Rating from '../CommentScreen/Rating'
import Filter from './Filter'
import PeopleComment from './PeopleComment'
import AddComment from './AddComment'

const CustomDrawer = () => {

  return (
    <View style={styles.container}>
      <View style={styles.nameView}>
        <Text style={styles.nameText}>هدفون</Text>
      </View>
      <View>
        <Rating />
      </View>
      <Filter />
      <PeopleComment />
      <PeopleComment />
      <PeopleComment />
      <PeopleComment />
      <PeopleComment />
    </View>
  )
}

export { CustomDrawer }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  nameView: {
    width: '100%',
    height: null
  },
  nameText: {
    width: '100%',
    fontSize: RFValue(15),
    fontFamily: 'yekan',
    color: '#222',
    textAlign: 'center',
    padding: 15
  }
})