import React from "react";
import { Image, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { Products } from "../../Common/dataArray";
import { RFValue } from 'react-native-responsive-fontsize';
import { white } from "../../Common/Styles/Colors";
import { Styles } from "../../Common/Styles/Styles";
import CountDown from 'react-native-countdown-component';
import { useNavigation } from "@react-navigation/native";
import Ripple from "react-native-material-ripple";

const AmazingSuggestion = (props) => {
  const { navigate } = useNavigation();
  const { width } = useWindowDimensions()
  return (
    <View>
      <View style={Styles.products.container}>
        <CountDown
          until={24 * 60 * 60}
          size={12}
          onFinish={() => alert('Finished')}
          digitStyle={{ backgroundColor: '#777' }}
          digitTxtStyle={{ color: white, fontSize: RFValue(14), fontFamily: 'yekan' }}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{ h: '', m: '', s: '' }}
          showSeparator
        />
        <Text style={{ ...Styles.products.text_right, color: '#333' }}>
          پیشنهاد
          <Text style={{ ...Styles.text_right, color: '#ef394e' }}>
            شگفت انگیز
          </Text>
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          Products.map((value, index) => {
            return (
              <Ripple onPress={() => navigate('Product',{headName:value.pName})} key={index} style={{ ...Styles.products.box, width: width / 3, height: width / 2, }}>
                <View style={{ ...Styles.products.imageView, height: '60%' }}>
                  <Image style={Styles.products.image} source={value.img} />
                </View>
                <View style={Styles.products.view_name}>
                  <Text style={Styles.products.name}>{value.pName}</Text>
                  <Text numberOfLines={1} style={Styles.products.name}>{value.eName}</Text>
                </View>
                <View style={{ ...Styles.products.view_price, height: '20%' }}>
                  <Text style={{ ...Styles.products.price, fontSize: RFValue(8), color: 'red', textDecorationLine: 'line-through' }}>تومان {value.price}</Text>
                  <Text style={Styles.products.price}>تومان {value.price}</Text>
                </View>
              </Ripple>
            )
          })
        }
      </ScrollView>
    </View>
  );
};


export default React.memo(AmazingSuggestion);
