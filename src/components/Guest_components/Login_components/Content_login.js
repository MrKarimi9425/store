import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'native-base'
import { RFValue } from 'react-native-responsive-fontsize'
import Ripple from 'react-native-material-ripple'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Content_login = () => {
    const { navigate } = useNavigation();
    const [user, setUser] = useState(false)
    const [password, setPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const changeborderUser = () => {
        setUser(!user);
        setPassword(false);
    }
    const changeborderPassword = () => {
        setPassword(!password);
        setUser(false);
    }
    const changeShowing = () => {
        setShowPassword(!showPassword)
    }
    return (
        <View style={styles.container}>
            <View style={styles.sec1}>
                <View style={[styles.sec1_part, user ? { borderColor: 'green' } : { borderColor: '#999' }]}>
                    <TextInput
                        placeholder='شماره موبایل یا ایمبل'
                        // placeholde
                        placeholderTextColor={'#999'}
                        onFocus={() => changeborderUser()}
                        onBlur={() => changeborderUser()}
                        style={styles.textInput}
                    />
                    <Icon name='email' type='materialcommunityicon' color={'#aaa'} size={20} />
                </View>
                <View style={[styles.sec1_part, password ? { borderColor: 'green' } : { borderColor: '#999' }]}>
                    <TextInput
                        placeholder='کلمه عبور'
                        placeholderTextColor={'#999'}
                        onFocus={() => changeborderPassword()}
                        onBlur={() => changeborderPassword()}
                        secureTextEntry={!showPassword}
                        style={styles.textInput}
                    />
                    <Icon name='key' type='font-awesome-5' color={'#aaa'} size={20} />
                </View>
            </View>
            <View style={styles.sec2}>
                <Text style={styles.sec2_text}>نمایش کلمه عبور</Text>
                <Ripple onPress={() => changeShowing()} style={styles.sec2_check}>
                    {
                        showPassword ?
                            <Icon name='check' type='antdesign' size={15} /> : null

                    }
                </Ripple>
            </View>
            <View style={styles.sec3}>
                <Text style={styles.sec3_text1} onPress={() => navigate('ForgetPass')}>
                    کلمه عبور خود را فراموش  کردم
                </Text>
                <Text style={styles.sec3_text2} onPress={() => navigate('Signup')}>
                    ثبت نام در آژمان
                </Text>
            </View>
        </View>
    )
}

export default React.memo(Content_login)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    sec1_part: {
        margin: 5,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
        width: '90%'
    },
    textInput: {
        padding: 5,
        flex: 1,
        textAlign: 'right'
    },
    sec2: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 20,
        marginRight: 15,
    },
    sec2_text: {
        fontSize: RFValue(12),
        color: '#888',
        marginRight: 8
    },
    sec2_check: {
        width: 20,
        height: 20,
        backgroundColor: '#ddd',
        elevation: 2,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sec3: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
        // padding:25
    },
    sec3_text1: {
        fontSize: RFValue(12),
        color: '#aaa',
    },
    sec3_text2: {
        fontSize: RFValue(12),
        color: 'green',
        textDecorationLine: 'underline',
        marginTop: 15
    }

})