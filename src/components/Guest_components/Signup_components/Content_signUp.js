import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Icon } from 'native-base'
import Ripple from 'react-native-material-ripple'
import { lowBlue } from '../../Common/Styles/Colors'

const Content_signUp = () => {
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
                    {
                        user ?
                            <Text style={styles.sec1_part_text}>
                                شماره موبایل یا ایمیل
                            </Text> : null
                    }
                    <TextInput
                        placeholder='شماره موبایل یا ایمیل'
                        // placeholde
                        placeholderTextColor={'#999'}
                        onFocus={() => changeborderUser()}
                        onBlur={() => changeborderUser()}
                        style={styles.textInput}
                    />
                    <Icon name='email' type='materialcommunityicon' color={'#aaa'} size={20} />
                </View>
                <View style={[styles.sec1_part, password ? { borderColor: 'green' } : { borderColor: '#999' }]}>
                    {
                        password ? <Text style={styles.sec1_part_text}>
                            کلمه عبور
                        </Text> : null
                    }
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
        </View>
    )
}

export { Content_signUp }

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
    sec1_part_text: {
        position: 'absolute',
        bottom: 40,
        right: 20,
        fontSize: RFValue(12),
        color: lowBlue
    }
})