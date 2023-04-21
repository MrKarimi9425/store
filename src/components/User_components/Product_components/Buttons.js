import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple'
import { black, white } from '../../Common/Styles/Colors'
import { Icon } from 'native-base';
import { Normalize } from '../../Common/Normalize';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

const Buttons = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Ripple onPress={() => navigate('Comment')} style={styles.button}>
        <Text style={styles.text}>
          نظرات کاربران
        </Text>
        <Icon name={'content-paste'} size={14} />
      </Ripple>
      <Ripple style={styles.button}>
        <Text style={styles.text}>
          مشخصات
        </Text>
        <Icon name={'forum'} size={14} />
      </Ripple>
    </View>
  )
}

export { Buttons }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: white,
    width: '47%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    paddingVertical: 5
  },
  text: {
    fontSize: RFValue(12),
    color: black
  }
})