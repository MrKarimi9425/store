import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { black, gray, main, red, white } from '../../Common/Styles/Colors'
import { RFValue } from 'react-native-responsive-fontsize'
import { Badge, Icon } from 'native-base'
import Ripple from 'react-native-material-ripple'
import { appName } from '../../Common/Styles/Name'
import { useNavigation } from '@react-navigation/native'

const button = [
  {
    id: 1,
    text: 'خانه',
    iconName: 'home',
    iconType: 'MaterialIcons',
    navigation: 'Main'
  },
  {
    id: 2,
    text: 'لیست دسته بندی محصولات',
    iconName: 'format-list-bulleted',
    iconType: 'MaterialIcons',
    borderBottom: true,
    navigation: 'Category'
  },
  {
    id: 3,
    text: 'سبد خرید',
    iconName: 'shopping-cart',
    iconType: 'FontAwesome',
    borderBottom: true,
    navigation: 'ShopCart'
  },
  {
    id: 4,
    text: 'پرفروش ترین ها',
    iconName: 'star-sharp',
    iconType: 'Ionicons',
    navigation: 'Off'

  },
  {
    id: 5,
    text: `پیشنهاد ویژه ${appName.pName}`,
    iconName: 'star-sharp',
    iconType: 'Ionicons',
    navigation: 'Off'
  },
  {
    id: 6,
    text: 'پربازید ترین ها',
    iconName: 'star-sharp',
    iconType: 'Ionicons',
    navigation: 'Off'
  },
  {
    id: 7,
    text: 'جدید ترین ها',
    iconName: 'star-sharp',
    iconType: 'Ionicons',
    borderBottom: true,
    navigation: 'Off'
  },
  {
    id: 8,
    text: 'تنظیمات',
    iconName: 'settings-sharp',
    iconType: 'Ionicons',
    navigation: 'Main'
  },
  {
    id: 9,
    text: 'سوالات متداول',
    iconName: 'questioncircleo',
    iconType: 'AntDesign',
    navigation: 'Main'
  },
  {
    id: 10,
    text: 'درباره ما',
    iconName: 'shopify',
    iconType: 'Fontisto',
    navigation: 'Main'
  },
]
const SideMenu = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text onPress={() => navigate('Tab',{screen:'Login'})} style={styles.headText}>
          ورود و ثبت نام
        </Text>
        <Icon name='user-alt' type='FontAwesome5' style={styles.icon} />
      </View>
      <View style={styles.body}>
        {
          button.map((value, index) => {
            return (
              <Ripple onPress={() => navigate(value.navigation)} key={index} style={[styles.bodyButton, value.borderBottom ? { borderBottomWidth: 0.2, borderColor: gray } : null]}>
                {
                  value.id == 3 ?
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>
                        1
                      </Text>
                    </View> : null
                }
                <Text style={styles.bodyText}>{value.text}</Text>
                <Icon name={value.iconName} type={value.iconType} style={styles.bodyIcon} />
              </Ripple>
            )
          })
        }
      </View>
    </View>
  )
}

export default React.memo(SideMenu)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  head: {
    width: '100%',
    height: '10%',
    backgroundColor: main,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 15
  },
  body: {
    width: '100%',
    height: '90%'
  },
  headText: {
    fontSize: RFValue(12),
    color: white,
    borderColor: white,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  },
  icon: {
    color: white,
    fontSize: RFValue(15),
    padding: 5
  },
  bodyButton: {
    width: '100%',
    height: null,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative'
  },
  bodyText: {
    fontSize: RFValue(12),
    fontFamily: 'yekan',
    color: black,
    marginRight: 20
  },
  bodyIcon: {
    fontSize: RFValue(20),
    color: '#666'
  },
  badge: {
    backgroundColor: main,
    width: 20,
    height: 20,
    borderRadius: 50,
    position: 'absolute',
    left: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    color: white,
    fontFamily: 'yekan'
  }
})