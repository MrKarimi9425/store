import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Product from "../../components/User_components/AboutCategory_components/Content_aboutCategory";
import MyHeader from "../../components/Header/MyHeader";



const AboutCategory = (props) => {

  let headerProps = {
    type: 'main',
    headName: props.route.params.headName
  }

  return (
    <View style={styles.container}>
      <MyHeader {...headerProps} />
      <ScrollView>
        <Product />
        <Product />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default React.memo(AboutCategory)