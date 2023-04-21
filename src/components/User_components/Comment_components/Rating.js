import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native'
import React, { useState } from 'react'
import Stars from 'react-native-stars';
import { Icon } from 'native-base';
import { Normalize } from '../../Common/Normalize';
import { Rank } from '../../Common/dataArray';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}


const Rating = () => {
  const [change_height, setChange_height] = useState(false);
  const [change_text, setChange_text] = useState('ادامه مطلب');

  const _changeHeight = () => {
    LayoutAnimation.configureNext({
      duration: 500,
      create: { type: 'linear', property: 'opacity' },
      update: { type: 'spring', springDamping: 20 },
      delete: { type: 'linear', property: 'opacity' }
    });
    setChange_height(!change_height);
    change_height ? setChange_text('ادامه مطلب') : setChange_text('بستن')
  }

  const color = '#FF3C35'
  const size = 20
  return (
    <View style={styles.container}>
      <View style={styles.sec1}>
        <View style={styles.sec1_part}>
          <Text style={styles.text_size13}>4.30 از 5</Text>
          <Stars
            half={true}
            default={2.5}
            starSizeW={50}
            starSizeH={10}
            // update={(val) => { this.setState({ stars: val }) }}
            spacing={4}
            count={5}
            fullStar={<Icon name='star' type='font-awesome' size={size} color={color} />}
            emptyStar={<Icon name='star-o' type='font-awesome' size={size} color={color} />}
            halfStar={<Icon name='star-half-empty' type='font-awesome' size={size} color={color} />} />
        </View>
        <View style={{ ...styles.sec1_part, flex: 2 }}>
          <Text style={[styles.text_size11, styles.text_color_gray]}>امتیاز محصول :</Text>
          <Text style={[styles.text_size11, styles.text_color_lightGray]}>از مجموع 1492 رای ثبت شده</Text>
        </View>


      </View>
      {
        change_height ?
          <View style={styles.sec2}>
            {
              Rank.map((value, index) => {
                return (
                  <View key={index} style={styles.sec2_part1}>
                    <Stars
                      half={true}
                      default={value.dufaultRank}
                      // update={(val) => { this.setState({ stars: val }) }}
                      spacing={5}
                      starSizeW={40}
                      starSizeH={8}
                      count={5}
                      fullStar={require('../../assets/image/fullStar.png')}
                      emptyStar={require('../../assets/image/emptyStar.png')}
                      halfStar={require('../../assets/image/halfStar.png')} />
                    <Text style={[styles.text_size11, styles.text_color_gray]}>
                      {value.text}
                    </Text>
                  </View>
                )
              })
            }
          </View> : null
      }
      <TouchableOpacity onPress={() => _changeHeight()} style={styles.touchableOpacity}>
        <Text>
          {change_text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default React.memo(Rating)

const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    // marginTop: 10,
    elevation: 2,
    margin: 5,
    backgroundColor: '#fff'
  },
  sec1: {
    // paddingVertical: 10,
    // paddingHorizontal:5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  sec2: {
    padding: 10
  },
  sec2_part1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    overflow: 'hidden'
  },
  sec1_part: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: 15
  },
  text_size13: {
    fontSize: Normalize(13),
    color: '#333',
    textAlign: 'center',
    // margin:10
  },
  text_size11: {
    fontSize: Normalize(11),
  },
  text_color_lightGray: {
    color: '#bbb',
    marginVertical: 10
  },
  text_color_gray: {
    color: '#888'
  },
  touchableOpacity: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#bbb',
    borderTopWidth: 0.4,
  }
})