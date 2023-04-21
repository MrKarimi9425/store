import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Header, Left, Right, Icon } from 'native-base';
import Ripple from 'react-native-material-ripple';
import { black, darkRed, main, red, white } from '../../../Common/Styles/Colors';
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native';
import { appName } from '../../../Common/Styles/Name';

const MyHeader = (props) => {
  const { navigate, toggleDrawer, goBack } = useNavigation();

  const goCart = () => {
    navigate('ShopCart')
  }

  const goSearch = () => {
    navigate('Search')
  }

  const MainHeader = () => {
    return (
      <Header style={styles.backgroundRed} androidStatusBarColor={main}>
        <Left style={styles.row}>
          <Ripple onPress={goCart} style={styles.ripple}>
            <Icon style={styles.icon} name='cart' />
          </Ripple>
          <Ripple onPress={goSearch} style={styles.ripple}>
            <Icon style={styles.icon} name='search' />
          </Ripple>
        </Left>
        <Right style={styles.row}>
          <Text style={{ ...styles.text, fontWeight: !props.headName ? 'bold' : null }}>
            {
              props.headName ? props.headName : appName.eName
            }
          </Text>
          {
            props.icon == 'arrow' ?
              <Ripple onPress={() => goBack()} style={styles.ripple}>
                <Icon style={styles.icon} name='arrow-forward-sharp' />
              </Ripple> :
              <Ripple onPress={() => toggleDrawer()} style={styles.ripple}>
                <Icon style={styles.icon} name='menu' />
              </Ripple>
          }
        </Right>
      </Header>
    )
  }

  const CartHeader = () => {
    return (
      <Header style={styles.backgroundRed} androidStatusBarColor={main}>
        <Left style={styles.row}>
          <Ripple onPress={goCart} style={styles.ripple}>
            <Icon style={styles.icon} name='cart' />
          </Ripple>
        </Left>
        <Right style={styles.row}>
          <Text style={{ ...styles.text, fontWeight: !props.headName ? 'bold' : null }}>
            سبد خرید شما
          </Text>
          <Ripple onPress={() => goBack()} style={styles.ripple}>
            <Icon style={{ ...styles.icon, color: black }} name='close' />
          </Ripple>
        </Right>
      </Header>
    )
  }

  const ProfileHeader = () => {
    return (
      <Header style={styles.backgroundRed} androidStatusBarColor={main}>
        <Left style={styles.row}>
          <Ripple onPress={goCart} style={styles.ripple}>
            <Icon style={styles.icon} name='cart' />
          </Ripple>
          <Ripple onPress={goSearch} style={styles.ripple}>
            <Icon style={styles.icon} name='search' />
          </Ripple>
        </Left>
        <Right style={styles.row}>
          <Text style={{ ...styles.text, fontWeight: !props.headName ? 'bold' : null }}>
            {props.headName}
          </Text>
          <Ripple onPress={() => goBack()} style={styles.ripple}>
            <Icon style={{ ...styles.icon, color: black }} name='close' />
          </Ripple>
        </Right>
      </Header>
    )
  }

  const SearchHeader = () => {
    return (
      <Header style={styles.backgroundWhite} androidStatusBarColor={main}>
        <Left style={styles.row}>
          <Ripple style={styles.ripple}>
            <Icon style={styles.iconGray} name='qrcode-scan' type='MaterialCommunityIcons' />
          </Ripple>
          <Ripple style={styles.ripple}>
            <Icon style={styles.iconGray} name='keyboard-voice' type='MaterialIcons' />
          </Ripple>
        </Left>
        <Right style={styles.row}>
          <TextInput style={styles.textInput} textAlign={'right'} placeholderTextColor={'#888'} selectionColor={red} placeholder='جستجو در دیجی کالا ...' />
          <Ripple onPress={() => goBack()} style={styles.ripple}>
            <Icon style={styles.iconGray} name='arrow-forward' />
          </Ripple>
        </Right>
      </Header>
    )
  }

  const PasswordHeader = () => {
    return (
      <Header style={styles.backgroundRed} androidStatusBarColor={main}>
        <Right style={styles.row}>
          <Text style={{ ...styles.text, fontWeight: !props.headName ? 'bold' : null }}>
            {props.headName}
          </Text>
          {
            props.icon == 'arrow' ?
              <Ripple onPress={() => goBack()} style={styles.ripple}>
                <Icon style={styles.icon} name='arrow-forward' />
              </Ripple>
              :
              <Ripple onPress={() => goBack()} style={styles.ripple}>
                <Icon style={styles.icon} name='close' />
              </Ripple>
          }
        </Right>
      </Header>
    )
  }


  switch (props.type) {
    case 'main':
      return MainHeader();
      break;
    case 'cart':
      return CartHeader();
      break;
    case 'profile':
      return ProfileHeader();
      break;
    case 'password':
      return PasswordHeader();
      break;
    case 'search':
      return SearchHeader();
      break;
    default:
      return MainHeader();
      break;
  }

}

export { MyHeader }

const styles = StyleSheet.create({
  backgroundRed: {
    backgroundColor: main
  },
  backgroundWhite: {
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ripple: {
    padding: 10,
    borderRadius: 100,
  },
  icon: {
    fontSize: RFValue(20),
    color: white
  },
  iconGray: {
    fontSize: RFValue(20),
    color: '#888'
  },
  text: {
    fontSize: RFValue(14),
    color: white,
    marginRight: 8
  },
  textInput: {
    height: '100%',
    width: '100%'
  }
})