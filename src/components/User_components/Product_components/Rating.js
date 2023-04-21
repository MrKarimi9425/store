import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Stars from 'react-native-stars';
import { Icon } from 'native-base';
import { Normalize } from '../../Common/Normalize';

const Rank = ({ text, defaultRank }) => {
  return (
    <View style={styles.sec2_part1}>
      <Stars
        half={true}
        default={defaultRank}
        // update={(val) => { this.setState({ stars: val }) }}
        spacing={4}
        starSizeW={40}
        starSizeH={8}
        count={5}
        fullStar={require('../../assets/image/fullStar.png')}
        emptyStar={require('../../assets/image/emptyStar.png')}
        halfStar={require('../../assets/image/halfStar.png')} />
      <Text style={[styles.text_size11, styles.text_color_gray]}>
        {text}
      </Text>
    </View>
  )
}
const Rating = () => {
  const color = '#FF3C35'
  const size = 20
  return (
    <View style={styles.container}>
      <View style={styles.sec1}>
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
        <Text style={styles.text_size13}>4.30 از 5</Text>
        <Text style={[styles.text_size11, styles.text_color_lightGray]}>از مجموع 1492 رای ثبت شده</Text>
      </View>
      <View style={styles.sec2}>
        <Rank defaultRank={4} text={'کنترل ساخت'} />
        <Rank defaultRank={2.5} text={'ارزش خرید نسبت به قیمت'} />
        <Rank defaultRank={4} text={'نوآوری'} />
        <Rank defaultRank={3.5} text={'امکانات و قابلیت'} />
        <Rank defaultRank={2.5} text={'سهولت استفاده'} />
        <Rank defaultRank={5} text={'طراحی و ظاهر'} />
      </View>
    </View>
  )
}

export {Rating}

const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    marginTop: 10,
    elevation: 2,
    padding: 5,
    backgroundColor: '#fff'
  },
  sec1: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sec2: {
    paddingVertical: 10
  },
  sec2_part1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4
  },
  text_size13: {
    fontSize: Normalize(13),
    color: '#333',
    marginHorizontal: 5
  },
  text_size11: {
    fontSize: Normalize(11),
  },
  text_color_lightGray: {
    color: '#bbb',
  },
  text_color_gray: {
    color: '#888'
  }
})