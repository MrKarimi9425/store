import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { black, blue } from "./Colors";
import React from "react";
const Width = Dimensions.get("window").width;

const Styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  categoryContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-end'
  },
  products: {
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      alignItems: 'center',
    },
    text_left: {
      fontSize: RFValue(12),
      color: blue,
      fontFamily: 'yekan'
    },
    text_right: {
      fontSize: RFValue(16),
      color: '#666',
      fontFamily: 'yekan',
    },
    box: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginHorizontal: 5,
      borderRadius: 10,
      borderColor: '#ddd',
      marginBottom:10,
      overflow:'hidden',
      elevation:5
    },
    imageView: {
      width: '100%',
      height: '65%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: '100%',
      height: '100%',
      // resizeMode:'contain'
    },
    view_name: {
      height: '20%',
      width: '100%',
      padding: 5
    },
    view_price: {
      height: '15%',
      width: '100%',
      borderColor: '#dddddd',
      borderTopWidth: 0.5,
      justifyContent: 'center',
      padding:5
    },
    name: {
      fontSize: RFValue(10),
      color: '#333',
      textAlign: "right",
      fontFamily: 'yekan'
    },
    price: {
      color: '#57b12f',
      fontSize: RFValue(10),
      textAlign: "left",
      fontFamily: 'yekan'
    }
  }

});

export { Styles }
