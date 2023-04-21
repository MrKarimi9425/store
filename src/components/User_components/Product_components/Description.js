import { LayoutAnimation, Platform, Pressable, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native'
import React, { useState } from 'react'
import { red, white } from '../../Common/Styles/Colors'

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const Description = () => {
    const [change_height, setChange_height] = useState(false);
    const [change_text, setChange_text] = useState('ادامه مطلب');

    const _changeHeight = () => {
        LayoutAnimation.configureNext({
            duration: 1000,
            create: { type: 'linear', property: 'opacity' },
            update: { type: 'spring', springDamping: 10 },
            delete: { type: 'linear', property: 'opacity' }
        });
        setChange_height(!change_height);
        change_height ? setChange_text('ادامه مطلب') : setChange_text('بستن')
    }

    return (
        <View style={styles.container}>
            <View style={[styles.sec1, change_height ? { height: null } : { height: 150 }]}>
                <Text>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است..</Text>
            </View>
            <TouchableOpacity onPress={() => _changeHeight()} style={styles.touchableOpacity}>
                <Text>
                    {change_text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export { Description }

const styles = StyleSheet.create({
    container: {
        width: null,
        height: null,
        marginTop: 10,
        elevation: 2,
        padding: 10,
        backgroundColor: white,
        paddingBottom: 0
    },
    sec1: {
        height: 150,
        overflow: 'hidden'
    },
    touchableOpacity: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#bbb',
        borderTopWidth: 0.4,
    }
})