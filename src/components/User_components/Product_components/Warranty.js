import { Dimensions, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { black, gray, green, red, white } from '../../Common/Styles/Colors'
import { Normalize } from '../../Common/Normalize';
import Ripple from 'react-native-material-ripple';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'native-base';

const Warranty = () => {
    const { width } = useWindowDimensions();
    const [color, setColor] = useState('black');

    const selectColor = (color) => {
        setColor(color)
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.sec1_part1}>
                    <Text style={{ ...styles.textSize, color: gray }}>3 رنگ</Text>
                    <Text style={{ ...styles.textSize }}>رنگ</Text>
                </View>
                <View style={styles.sec1_part2}>
                    <Ripple onPress={() => selectColor(white)} style={[styles.box, color === white ? { borderWidth: 0.2, elevation: 5 } : { elevation: 1 }]}>
                        <View style={{ ...styles.color, backgroundColor: white }} />
                        <Text style={styles.box_text}>سفید</Text>
                    </Ripple>
                    <Ripple onPress={() => selectColor('#ff0000')} style={[styles.box, color === '#ff0000' ? { borderWidth: 0.2, elevation: 5 } : { elevation: 1 }]}>
                        <View style={{ ...styles.color, backgroundColor: '#ff0000' }} />
                        <Text style={styles.box_text}>قرمز</Text>
                    </Ripple>
                    <Ripple onPress={() => selectColor('#0700ff')} style={[styles.box, color === '#0700ff' ? { borderWidth: 0.2, elevation: 5 } : { elevation: 1 }]}>
                        <View style={{ ...styles.color, backgroundColor: '#0700ff' }} />
                        <Text style={styles.box_text}>آبی</Text>
                    </Ripple>
                </View>
                <View style={styles.sec1_part3}>
                    <Text style={styles.secText}>گارانتی 18 ماهه</Text>
                    <Icon name={'shield-check'} type={'MaterialCommunityIcons'} size={18} color={gray} />
                </View>
            </View>
            <View style={styles.sec2}>
                <View style={styles.sec2_part}>
                    <Text style={styles.secText}>فروش توسط آژمان | رضایت خرید : 83%</Text>
                    <Icon name={'store-alt'} type={'FontAwesome5'} color={gray} />
                </View>
                <View style={styles.sec2_part}>
                    <Text style={styles.secText}>آماده ارسال از آژمان <Text style={{ ...styles.secText, color: black }}>در 1 روز آینده</Text></Text>
                    <Icon name={'truck'} type={'FontAwesome5'} size={15} color={gray} />
                </View>
            </View>
            <View style={styles.sec3}>
                <View style={styles.sec3_part1}>
                    <Text style={styles.sec3_Text}>6,199,000 تومان</Text>
                    <Text style={styles.sec3_text2}>7,199,000 تومان</Text>
                </View>
                <Ripple style={styles.sec3_btn}>
                    <Text style={styles.btn_Text}>افزودن به سبد خرید </Text>
                    <Icon name='opencart' type='Fontisto' color={white} />
                </Ripple>
            </View>
            <Ripple style={styles.sec4}>
                <View>
                    <Icon name='chevron-back' type='Ionicons' color={gray} />
                </View>
                <View style={styles.sec4_part2}>
                    <Text style={styles.sec4_Text}>4 فروشنگان و گارانتی برای این کالا وجود دارد</Text>
                    <Icon name={'store-alt'} type={'FontAwesome5'} size={15} color={gray} />
                </View>
            </Ripple>
        </View>
    )
}

export { Warranty }

const styles = StyleSheet.create({
    container: {
        width: null,
        height: null,
        backgroundColor: white,
        padding: 10,
        elevation: 5,
        paddingBottom: 0
    },
    sec1_part1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sec1_part2: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    sec1_part3: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 5,
        marginVertical: 5
    },
    box: {
        margin: 5,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
        // padding:15,
        width: 50,
        height: 50
    },
    box_text: {
        fontSize: RFValue(10),
        color: black
    },
    color: {
        width: 20,
        height: 20,
        borderRadius: 100,
        borderWidth: 0.1,
        // borderColor: gray
    },
    colorName: {
        fontSize: RFValue(12)
    },
    secText: {
        color: gray,
        marginRight: 5
    },
    borderTop: {
        borderColor: gray,
        borderTopWidth: 0.5,
    },
    sec2: {
        padding: 5,
        borderTopWidth: 0.5,
        marginVertical: 5
    },
    sec3: {
        padding: 10,
        borderTopWidth: 0.5
    },
    sec4: {
        flexDirection: 'row',
        borderTopWidth: 0.5,
        justifyContent: 'space-between',
        padding: 10
    },
    sec2_part: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 5
    },
    sec3_Text: {
        fontSize: RFValue(14),
        fontWeight: 'bold',
        color: green,
        margin: 5
    },
    sec4_Text: {
        color: '#237FAC',
        marginRight: 5,
        fontSize: RFValue(10),
        fontWeight: 'bold',
    },
    sec4_part2: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sec3_btn: {
        width: '100%',
        backgroundColor: green,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 2,
        paddingVertical: 7,
        alignSelf: 'center'
    },
    btn_Text: {
        color: white,
        fontSize: RFValue(12),
        marginRight: 5
    },
    textSize: {
        color: black,
        fontWeight: 'bold',
    },
    sec3_part1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sec3_text2: {
        fontSize: RFValue(12),
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
        color: red,
    }
})