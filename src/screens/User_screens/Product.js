import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Slider from '../components/ProductScreen/Slider'
import Sharee from '../components/ProductScreen/Sharee'
import Buttons from '../components/ProductScreen/Buttons'
import Warranty from '../components/ProductScreen/Warranty'
import Description from '../components/ProductScreen/Description'
import Rating from '../components/ProductScreen/Rating'
import Category from '../components/ProductScreen/Category'
import SimilarProduct from '../components/ProductScreen/SimilarProduct'
import MyHeader from '../components/Header/MyHeader'
import { useNavigation } from '@react-navigation/native'




const Product = (props) => {
  const headerProps = {
    type: 'main',
    headName:props.route.params.headName,
    icon: 'arrow'
  }
  return (
    <View style={styles.container}>
      <MyHeader {...headerProps} />
      <ScrollView>
        {/* <Slider />
        <Sharee />
        <View style={{ paddingHorizontal: 20 }}>
          <Buttons />
          <Warranty />
          <Description />
          <Rating />
        </View>
        <Category /> */}
        {/* <SimilarProduct /> */}
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default React.memo(Product)