import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShopBox from '../components/ShopCart/ShopBox'
import MyHeader from '../components/Header/MyHeader'
import { useNavigation } from '@react-navigation/native'


let props = {
  type: 'cart',
  headName: 'گوشی موبایل ...',
  icon: 'arrow'
}

const ShopCart = () => {
  return (
    <View style={styles.container}>
      <MyHeader {...props} />
      <ScrollView>
        <ShopBox />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default React.memo(ShopCart)

