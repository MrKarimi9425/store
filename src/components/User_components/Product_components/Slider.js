import { Dimensions, StyleSheet, Text, View,Image, useWindowDimensions } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { ProductImage } from '../../Common/dataArray';

const Slider = () => {
  const {width,height} = useWindowDimensions();
  return (
    <View style={width > height?{height: width / 3}:{ height: width / 1.6}}>
      <Swiper>
        {
          ProductImage.map((value,index) => {
            return (
              <Image key={index} source={value.img} style={styles.image}/>
            )
          })
        }
      </Swiper>
    </View>
  )
}

export {Slider}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  }
})