import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Slider from "../components/HomeScreen/Slider";
import Category from "../components/HomeScreen/Category";
import Offer from "../components/HomeScreen/Offer";
import Off from "../components/HomeScreen/Off";
import FirstProduct from "../components/HomeScreen/FirstProduct";
import SecondProduct from "../components/HomeScreen/SecondProduct";
import AmazingSuggestion from "../components/HomeScreen/AmazingSuggestion";
import MyHeader from '../components/Header/MyHeader'


let props = {
  type: 'main',
}

const Main = () => {
  return (
    <View style={styles.container}>
      <MyHeader {...props} />
      <ScrollView>
        <Slider />
        <Category {...props} />
        <AmazingSuggestion />
        <Offer />
        <FirstProduct />
        <SecondProduct />
        <Off />
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default React.memo(Main)
