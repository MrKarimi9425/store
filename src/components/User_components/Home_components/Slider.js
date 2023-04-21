import { Dimensions, Image, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Swiper from 'react-native-swiper'
import { image } from '../../Common/dataArray'

const Width = Dimensions.get("window").width;

const Slider = () => {
  return(
    <View style={styles.container}>
      <Swiper autoplay>
        {
          image.map((value,index) => {
            return(
              <Pressable key={index} style={styles.button}>
                <Image resizeMode="cover" source={{uri:value.image}} style={styles.image}/>
              </Pressable>
            )
          })
        }
      </Swiper>

    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    height:Width/2
  },
  button:{
    flex:1
  },
  image:{
    width:'100%',
    height: '100%'
  }
})

export default React.memo(Slider)
