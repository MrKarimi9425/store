import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Products } from "../../Common/dataArray";
import { Styles } from "../../Common/Styles/Styles";
const OtherBuyProduct = () => {
  const { width, height } = useWindowDimensions();
  const { navigate } = useNavigation();
  return (
    <View>
      <View style={Styles.products.container}>
        <Text style={Styles.products.text_right}>محصولات پرفروش</Text>
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

export { OtherBuyProduct }
