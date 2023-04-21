import React, { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { green, white } from "../../Common/Styles/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import { category } from "../../Common/dataArray";
import { useNavigation } from "@react-navigation/native";


const Category = (props) => {
  const { navigate } = useNavigation();
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container} horizontal>
      {
        category.map(((value, index) =>
          <Pressable onPress={() => navigate('Category',{numKey:index})} key={index} style={styles.pressable}>
            <Text style={styles.text}>{value.text}</Text>
          </Pressable>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  pressable: {
    paddingHorizontal: 10,
    backgroundColor: green,
    borderRadius: 100,
    marginHorizontal: 5
  },
  text: {
    fontSize: RFValue(12),
    color: white
  }
})

export default React.memo(Category)
