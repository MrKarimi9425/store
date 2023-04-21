import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native'
import React, { useState } from 'react'
import Stars from 'react-native-stars';
import { Icon } from 'native-base';
import { Normalize } from '../../Common/Normalize';
import { Rank } from '../../Common/dataArray';
import { RFValue } from 'react-native-responsive-fontsize';
import { green, red } from '../../Common/Styles/Colors';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const PeopleComment = () => {
    const [change_height, setChange_height] = useState(false);
    const [change_text, setChange_text] = useState('ادامه مطلب');

    const _changeHeight = () => {
        LayoutAnimation.configureNext({
            duration: 700,
            create: { type: 'linear', property: 'opacity' },
            update: { type: 'spring', springDamping: 20 },
            delete: { type: 'linear', property: 'opacity' }
        });
        setChange_height(!change_height);
        change_height ? setChange_text('ادامه مطلب') : setChange_text('بستن')
    }

    return (
        <View style={styles.container}>
            <View style={styles.sec1}>
                <View style={styles.sec1_left}>
                    <View style={styles.button}>
                        <Text>1</Text>
                        <Icon name='dislike' type='Foundation' style={{ ...styles.iconGray, color: red }} />
                    </View>
                    <View style={styles.button}>
                        <Text>1</Text>
                        <Icon name='like' type='Foundation' style={{ ...styles.iconGray, color: green }} />
                    </View>
                </View>
                <View style={styles.sec1_right}>
                    <Text style={styles.textH3}>
                        رامین شیخ پور
                    </Text>
                    <Text style={styles.textH5}>
                        6 آذر 1398
                    </Text>
                </View>
            </View>
            <View style={styles.sec2}>
                <View style={styles.sec2Button}>
                    <Text style={styles.buttonText}>خرید این محصول  را حتما پیشنهاد میکنم</Text>
                </View>
                <Text style={styles.sec2Text}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </Text>
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

export default React.memo(PeopleComment)

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
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sec1_left: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
    },
    sec1_right: {
        flex: 2,
    },
    button: {
        width: '50%',
        padding: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#666',
        borderWidth: 0.8,
        borderRadius: 5,
        marginHorizontal: 3
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
    touchableOpacity: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#bbb',
        borderTopWidth: 0.4,
    },
    iconGray: {
        fontSize: RFValue(16),
        color: '#999'
    },
    textH3: {
        color: '#222',
        fontFamily: 'yekan',
        fontSize: RFValue(14)
    },
    textH5: {
        color: '#999',
        fontFamily: 'yekan',
        fontSize: RFValue(8)
    },
    sec2Button: {
        width: null,
        height: null,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#adfca9',
        borderRadius: 10,
        borderColor: '#73f96c',
        borderWidth: 1
    },
    sec2Text: {
        margin: 5,
        fontFamily: 'yekan',
        textAlign: 'right',
    }
})