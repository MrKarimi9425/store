import { Alert, Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { black, white } from '../../Common/Styles/Colors'
import { Icon } from 'native-base'
import { RFValue } from 'react-native-responsive-fontsize'
import { Cart } from '../../Common/dataArray'
import Ripple from 'react-native-material-ripple'


const Content_shopBox = () => {
    const { width } = useWindowDimensions();
    const [count, setCount] = useState(0);

    const _alert = () => {
        Alert.alert(
            null,
            'آیا مایل به حذف این محصول از سبد خرید هستید؟',
            [
                {
                    text: 'بله',
                    onPress: () => { }
                },
                {
                    text: 'خیر',
                    onPress: () => { }
                }
            ]
        )
    }

    return (
        <>
            {
                Cart.map((value, index) => {
                    return (
                        <View key={index} style={styles.content}>
                            <View style={[styles.sec1, styles.border_top]}>
                                <View style={styles.sec1_left}>
                                    <Text style={styles.h3}>
                                        {value.eName}
                                    </Text>
                                    <Text style={styles.h4_lightGray}>
                                        {value.pName}
                                    </Text>
                                    <View style={styles.flexRow}>
                                        <View style={{ ...styles.border_color, backgroundColor: value.color_rgb }} />
                                        <Text style={styles.h4_lightGray}>{value.color_text}</Text>
                                        <Text style={styles.h4_darkGray}>رنگ :</Text>
                                    </View>
                                    <View style={styles.flexRow}>
                                        <Text style={styles.h4_lightGray}>{value.warranty}</Text>
                                        <Text style={styles.h4_darkGray}>گارانتی :</Text>
                                    </View>
                                    <View style={styles.flexRow}>
                                        <Text style={styles.h4_lightGray}>{value.seler}</Text>
                                        <Text style={styles.h4_darkGray}>فروشنده :</Text>
                                    </View>
                                    <View style={{ ...styles.flexRow, justifyContent: 'flex-start', padding: 15 }}>
                                        <Pressable onPress={() => {
                                            if (count != 0) setCount(count - 1)
                                        }}>
                                            <Icon name='minuscircle' type='antdesign' />
                                        </Pressable>
                                        <Text style={{ ...styles.h4_lightGray, marginHorizontal: 10 }}>{count}</Text>
                                        <Pressable onPress={() => setCount(count + 1)}>
                                            <Icon name='pluscircle' type='antdesign' />
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={styles.sec1_right}>
                                    <Image style={styles.image}
                                        source={{ uri: value.image }}
                                        resizeMode={'contain'}
                                        resizeMethod={'resize'}
                                    />
                                </View>
                            </View>
                            <View style={[styles.sec2, styles.border_top]}>
                                <Text style={styles.h4_lightGray}>{value.price} تومان</Text>
                                <Text style={styles.h4_lightGray}>قیمت</Text>
                            </View>
                            <View style={[styles.sec3, styles.border_top]}>
                                <Text style={styles.h3_green}>{value.endPrice} تومان</Text>
                                <Text style={styles.h3_green}>قیمت نهایی</Text>
                            </View>
                            <Ripple onPress={() => _alert()} style={[styles.sec4, styles.border_top]}>
                                <Text style={styles.delete}>حذف</Text>
                            </Ripple>
                        </View>
                    )
                })
            }
        </>
    )
}

export { Content_shopBox }

const styles = StyleSheet.create({
    content: {
        margin: 10,
        backgroundColor: white,
        elevation: 5,
        borderRadius: 10,
        overflow: 'hidden'
    },
    sec1: {
        flexDirection: 'row',
    },
    sec1_left: {
        flex: 3,
        padding: 10
    },
    sec1_right: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        alignItems: 'flex-start',
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '50%',
    },
    h3: {
        fontSize: RFValue(14),
        color: black,
        textAlign: 'right'
    },
    h4_lightGray: {
        fontSize: RFValue(12),
        color: '#aaa'
    },
    h4_darkGray: {
        fontSize: RFValue(12),
        color: '#555',
        paddingLeft: 5
    },
    textRight: {
        textAlign: 'right'
    },
    flexRow: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    border_color: {
        width: 15,
        height: 15,
        borderRadius: 100,
        marginRight: 5,
        borderWidth: 0.4,
        borderColor: '#ccc'
    },
    sec2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f9f9f9',
        padding: 15,
    },
    sec3: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f9f9f9',
        padding: 15,
    },
    sec4: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: white,
    },
    delete: {
        color: 'red',
        fontSize: RFValue(14)
    },
    border_top: {
        borderWidth: 0.4,
        borderColor: '#bbb'
    },
    h3_green: {
        color: 'green',
    }
})