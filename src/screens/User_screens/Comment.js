import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import MyHeader from '../components/Header/MyHeader'
import Content from '../components/CommentScreen/Content'
import AddComment from '../components/CommentScreen/AddComment'

const props = {
  type: 'password',
  headName: 'نظرات کاربران'
}

const Comment = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <MyHeader {...props} />
        <Content />
      </ScrollView>
      <AddComment />
    </View>
  )
}

export default React.memo(Comment)

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})