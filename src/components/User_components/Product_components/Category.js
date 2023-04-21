import React from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { green, white } from "../../Common/Styles/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import { category } from "../../Common/dataArray";
import { Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";


const Category = () => {
  const { navigate } = useNavigation();
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container} horizontal>
      {
        category.map(((value, index) =>
          <Pressable onPress={() => navigate('Category')} key={index} style={styles.pressable}>
            <Icon name="left" type="antdesign" size={12} color='#bbb' />
            <Text style={styles.text}>{value.text}</Text>
          </Pressable>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  pressable: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: white,
    borderRadius: 100,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 5,
    elevation: 5,
    // justifyContent:'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: RFValue(15),
    color: '#5CB4C6',
    fontWeight: 'bold',
    marginLeft: 5
  }
})

export { Category }
