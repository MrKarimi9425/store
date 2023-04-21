import React from "react";
import { Image, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { Products } from "../../Common/dataArray";
import { Styles } from "../../Common/Styles/Styles";
const SimilarProduct = () => {
  const { width } = useWindowDimensions()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text_right}>محصولات که دیگران خریده اند</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          Products.map((value, index) => {
            return (
              <Pressable onPress={() => navigate('Product', { headName: value.pName })} key={index} style={{ ...Styles.products.box, width: width / 3, height: width / 2, }}>
                <View style={Styles.products.imageView}>
                  <Image style={Styles.products.image} source={value.img} />
                </View>
                <View style={Styles.products.view_name}>
                  <Text style={Styles.products.name}>{value.pName}</Text>
                  <Text numberOfLines={1} style={Styles.products.name}>{value.eName}</Text>
                </View>
                <View style={Styles.products.view_price}>
                  <Text style={Styles.products.price}>تومان {value.price}</Text>
                </View>
              </Pressable>
            )
          })
        }
      </ScrollView>
    </View>
  );
};

export { SimilarProduct }