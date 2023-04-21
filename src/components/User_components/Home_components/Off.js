import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Ripple from "react-native-material-ripple";
import { OffImage } from '../../Common/dataArray';
const Width = Dimensions.get("window").width;

const Off = () => {
  const {navigate} = useNavigation()
  return (
    <Ripple onPress={() => navigate('Off')} style={styles.container}>
      {
        OffImage.map((value, index) =>
          <Image key={index} style={styles.image} source={{uri:value.image}} />
        )
      }
    </Ripple>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:Width/2.5,
    marginVertical:25
  },
  image: {
    width: "100%",
    height: "100%",
  },

});

export default React.memo(Off);
