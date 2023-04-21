import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Ripple from "react-native-material-ripple";
import { OfferImage } from "../../Common/dataArray";
const Width = Dimensions.get("window").width;

const Offer = () => {
  const {navigate} = useNavigation()
  return (
    <View style={styles.container}>
      {
        OfferImage.map((value, index) =>
          index != 2 ?
            <Ripple key={index} onPress={() => navigate('Off')} style={styles.two_box}>
              <Image style={styles.image} source={{uri:value.image}} />
            </Ripple>
            :
            <Ripple  onPress={() => navigate('Off')} key={index} style={styles.one_box}>
              <Image style={styles.image} source={{uri:value.image}} />
            </Ripple>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around'
  },
  two_box:{
    width: '47%',
    height: Width/3.5,
  },
  one_box:{
    width: '95%',
    height: 150,
    marginVertical:15
  },
  image: {
    width: "100%",
    borderRadius:10,
    height: "100%",
  },

});

export default React.memo(Offer);
