import { StyleSheet, Image, Text, View, useWindowDimensions, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import { black, green, red, white } from '../../Common/Styles/Colors';
import Ripple from 'react-native-material-ripple';
import { OffList } from '../../Common/dataArray';
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'native-base';

const Content_off = () => {
    const { width, height } = useWindowDimensions();
    const [display, setDisplay] = useState('half');
    const [showModal, setShowModal] = useState(false);
    const { navigate } = useNavigation();

    const changeShowModal = () => setShowModal(!showModal)

    const changeDisplay = () => {
        switch (display) {
            case 'half':
                setDisplay('full')
                break;
            case 'full':
                setDisplay('twoBox')
                break;
            case 'twoBox':
                setDisplay('half')
                break;
            default:
                break;
        }
    }

    const goPruduct = () => {
        navigate("Product")
    }

    const A_header = () => {
        return (
            <View style={{ ...styles.aHeader.container, height: width / 10, }}>
                <Ripple onPress={changeDisplay} style={{ ...styles.aHeader.center, width: width / 10, }}>
                    {
                        display == 'half' ?
                            <Icon name='control-pause' type='SimpleLineIcons' style={{ ...styles.aHeader.icon, marginLeft: 0, transform: [{ rotate: '90deg' }] }} /> :
                            display == 'full' ?
                                <Icon name='size-fullscreen' type='SimpleLineIcons' style={{ ...styles.aHeader.icon, marginLeft: 0 }} /> :
                                display == 'twoBox' ?
                                    <Icon name='grid-outline' type='Ionicons' style={{ ...styles.aHeader.icon, marginLeft: 0 }} /> : null
                    }
                </Ripple>
                <Ripple onPress={changeShowModal} style={{ ...styles.aHeader.center, ...styles.aHeader.topRight, ...styles.aHeader.border_left_Right }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.aHeader.h3Text}>مرتب سازی</Text>
                        <Text style={styles.aHeader.h4Text}>پربازدید ترین</Text>
                    </View>
                    <Icon name='sort' type='MaterialIcons' iconStyle={styles.icon} />
                </Ripple>
                <Ripple style={{ ...styles.aHeader.center, ...styles.aHeader.topRight }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.aHeader.h3Text}>فیلتر کردن</Text>
                        <Text style={styles.aHeader.h4Text}>رنگ،نوع،قیمت و ...</Text>
                    </View>
                    <Icon name='filter' type='ionicon' iconStyle={styles.aHeader.icon} />
                </Ripple>
            </View>
        )
    }

    const FullDisplay = (value) => {
        return (
            <Ripple onPress={goPruduct} style={{ ...styles.fullDisplay.box, height: width / 1.2, }}>
                <View style={styles.fullDisplay.sec1}>
                    <View style={styles.fullDisplay.imageBox}>
                        <Image source={{ uri: value.img }}
                            style={styles.fullDisplay.image}
                            resizeMode={'contain'}
                            resizeMethod={'resize'}
                        />
                    </View>
                    <Text style={styles.fullDisplay.pName}>{value.pName}</Text>
                    <Text style={styles.fullDisplay.eName}>{value.eName}</Text>
                </View>
                <View style={styles.fullDisplay.sec2}>
                    <View style={styles.fullDisplay.priceBox}>
                        <Text style={styles.fullDisplay.red_p}>{value.lastPrice} تومان</Text>
                        <Text style={styles.fullDisplay.green_p}>{value.newPrice} تومان</Text>
                    </View>
                    <View style={styles.fullDisplay.s_s}>
                        <Text style={styles.fullDisplay.s_s_text}>پیشنهاد ویژه</Text>
                    </View>
                </View>
            </Ripple>
        )
    }

    const HalfDisplay = (value) => {
        return (
            <Ripple onPress={goPruduct} style={[styles.halfDisplay.container, { height: width > height ? width / 3 : width / 2.2 }]}>
                <View style={styles.halfDisplay.left}>
                    <View style={styles.halfDisplay.leftPart1}>
                        <Text style={{ ...styles.halfDisplay.pName, marginBottom: 0 }}>{value.pName}</Text>
                    </View>
                    <View style={styles.halfDisplay.sec2}>
                        <View style={styles.halfDisplay.priceBox}>
                            <Text style={styles.halfDisplay.red_p}>{value.lastPrice} تومان</Text>
                            <Text style={styles.halfDisplay.green_p}>{value.newPrice} تومان</Text>
                        </View>
                        <View style={styles.halfDisplay.s_s}>
                            <Text style={styles.halfDisplay.s_s_text}>پیشنهاد ویژه</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.halfDisplay.right}>
                    <Image source={{ uri: value.img }}
                        resizeMode='contain' resizeMethod='resize' style={styles.halfDisplay.image} />
                </View>
            </Ripple>
        )
    }

    const TwoBox = (value) => {
        return (
            <Ripple onPress={goPruduct} style={{ ...styles.twoBox.box, width: '49%', height: width / 1.6, }}>
                <View style={styles.twoBox.sec1}>
                    <View style={styles.twoBox.imageBox}>
                        <Image source={{ uri: value.img }}
                            style={styles.twoBox.image}
                            resizeMode={'contain'}
                            resizeMethod={'resize'}
                        />
                    </View>
                    <Text style={styles.twoBox.pName}>{value.pName}</Text>
                </View>
                <View style={styles.twoBox.sec2}>
                    <View style={styles.twoBox.priceBox}>
                        <Text style={styles.twoBox.red_p}>{value.lastPrice}</Text>
                        <Text style={styles.twoBox.green_p}>{value.newPrice}</Text>
                    </View>
                    <View style={styles.twoBox.s_s}>
                        <Text style={styles.twoBox.s_s_text}>پیشنهاد ویژه</Text>
                    </View>
                </View>
            </Ripple>
        )
    }

    const [checked, setChecked] = useState(0)
    const [radios] = useState([
        {
            id: 1,
            text: 'پربازدید ترین',
        },
        {
            id: 2,
            text: 'پرفروش ترین',
        },
        {
            id: 3,
            text: 'قیمت از زیاد به کم',
        },
        {
            id: 4,
            text: 'قیمت از کم به زیاد',
        },
        {
            id: 5,
            text: 'جدیدترین',
        },
    ]);

    const Radio = ({ value }) => {
        return (
            <Ripple onPress={() => setChecked(value.id)} style={styles.modal.ripple}>
                <Text style={styles.modal.text}>{value.text}</Text>
                {
                    checked == value.id ? <Icon name='circle-slice-8' type='MaterialCommunityIcons' style={{ fontSize: RFValue(12) }} />
                        : <Icon name='circle-outline' type='MaterialCommunityIcons' style={{ fontSize: RFValue(12) }} />
                }
            </Ripple>
        )
    }
    return (
        <View>
            <A_header />
            <View style={styles.contentContainer}>
                {
                    OffList.map((value, index) => (
                        display == 'half' ? <HalfDisplay {...value} index={index} /> :
                            display == 'full' ? <FullDisplay {...value} index={index} /> :
                                display == 'twoBox' ? <TwoBox {...value} index={index} /> : null
                    )
                    )
                }
            </View>
            <Modal visible={showModal} transparent>
                <Pressable onPress={changeShowModal} style={styles.modal.background}>
                    <View style={{ ...styles.modal.content, width: width / 1.2 }}>
                        {
                            typeof radios !== 'undefined' &&
                            radios.map((value) => {
                                return (
                                    <Radio value={value} />
                                )
                            })
                        }
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}

export { Content_off }

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10
    },
    aHeader: {
        container: {
            width: '100%',
            flexDirection: 'row',
            elevation: 5,
            backgroundColor: white
        },
        center: {
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
        },
        topRight: {
            width: '45%',
        },
        border_left_Right: {
            borderLeftWidth: 0.4,
            borderRightWidth: 0.4,
            borderColor: '#666'
        },
        icon: {
            color: '#666',
            marginLeft: 8
        },
        h3Text: {
            fontSize: RFValue(10),
            color: '#666',
            fontWeight: 'bold',

        },
        h4Text: {
            fontSize: RFValue(8),
            color: '#999',
        },
    },
    fullDisplay: {
        box: {
            width: '100%',
            backgroundColor: white,
            elevation: 5,
            borderRadius: 5,
            marginBottom: 10
        },
        sec1: {
            padding: 10,
            width: '100%',
            height: '80%',
        },
        sec2: {
            borderTopWidth: 0.5,
            borderColor: '#999',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        imageBox: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            width: '80%',
            height: '75%',
        },
        pName: {
            fontSize: RFValue(12),
            color: '#111',
            marginBottom: 10,
            fontFamily: 'yekan',
        },
        eName: {
            fontSize: RFValue(10),
            color: '#333',
            marginBottom: 30,
            fontFamily: 'yekan',
            textAlign: 'right',
        },
        red_p: {
            color: red,
            textDecorationLine: 'line-through',
            fontFamily: 'yekan',
            fontSize: RFValue(13),
            margin: 5,
            marginBottom: 5,
            textAlign: 'left'
        },
        green_p: {
            color: green,
            fontFamily: 'yekan',
            fontSize: RFValue(16),
            margin: 5
        },
        s_s_text: {
            fontSize: RFValue(10),
            color: white,
            padding: 5,
            fontFamily: 'yekan',
            backgroundColor: red,
            borderRadius: 5,
            margin: 5
        }
    },
    halfDisplay: {
        container: {
            width: null,
            flexDirection: 'row',
            backgroundColor: white,
            elevation: 5,
            marginBottom: 8,
            borderRadius: 5
        },
        right: {
            width: '30%',
            alignItems: 'center',
        },
        left: {
            height: '100%',
            width: '70%',
        },
        leftPart1: {
            flex: 2,
            justifyContent: 'center',
            paddingRight: 5
        },
        leftPart2: {
            flex: 1,
            borderTopWidth: 0.5,
        },
        image: {
            width: '100%',
            height: '100%'
        },
        sec2: {
            borderTopWidth: 0.5,
            borderColor: '#999',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        pName: {
            fontSize: RFValue(12),
            color: '#111',
            marginBottom: 10,
            fontFamily: 'yekan',
        },
        red_p: {
            color: red,
            textDecorationLine: 'line-through',
            fontFamily: 'yekan',
            fontSize: RFValue(13),
            margin: 5,
            marginBottom: 5,
            textAlign: 'left'
        },
        green_p: {
            color: green,
            fontFamily: 'yekan',
            fontSize: RFValue(16),
            margin: 5
        },
        s_s_text: {
            fontSize: RFValue(10),
            color: white,
            padding: 5,
            fontFamily: 'yekan',
            backgroundColor: red,
            borderRadius: 5,
            margin: 5
        }
    },
    twoBox: {
        box: {
            backgroundColor: white,
            elevation: 5,
            borderRadius: 5,
            marginBottom: 10
        },
        sec1: {
            padding: 10,
            width: '100%',
            height: '75%',
        },
        sec2: {
            width: '100%',
            height: '25%',
            borderTopWidth: 0.5,
            borderColor: '#999',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        imageBox: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            width: '70%',
            height: '70%',
        },
        pName: {
            fontSize: RFValue(10),
            color: '#111',
            marginBottom: 15,
            // margin:25,
            fontFamily: 'yekan',
        },
        red_p: {
            color: red,
            textDecorationLine: 'line-through',
            fontFamily: 'yekan',
            fontSize: RFValue(10),
            margin: 5,
            marginBottom: 5,
            textAlign: 'left'
        },
        green_p: {
            color: green,
            fontFamily: 'yekan',
            fontSize: RFValue(12),
            margin: 5
        },
        s_s_text: {
            fontSize: RFValue(10),
            color: white,
            padding: 5,
            fontFamily: 'yekan',
            backgroundColor: red,
            borderRadius: 5,
            margin: 5
        }
    },
    modal: {
        content: {
            backgroundColor: white,
            justifyContent: 'center',
            borderRadius: 15
        },
        ripple: {
            flexDirection: 'row',
            padding: 10,
            width: '100%',
            paddingRight: 20,
            justifyContent: 'flex-end',
            // backgroundColor: blue,
        },
        background: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
        },
        text: {
            marginRight: 10,
            fontSize: RFValue(12),
            fontFamily: 'yekan',
            color: black
        }
    }
})