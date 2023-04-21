import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import { RFValue } from 'react-native-responsive-fontsize'
import { CategoryContent } from '../../Common/dataArray';
import { useNavigation } from '@react-navigation/native';

const Content_Category = () => {
    const { width } = useWindowDimensions();
    const { navigate } = useNavigation();

    return (
        <ScrollView>
            {
                CategoryContent.map((value, index) => {
                    return (
                        <Ripple onPress={() => navigate('AboutCategory', { headName: value.name })} key={index} style={{ ...styles.ripple, width: width, height: width / 7 }}>
                            <Image resizeMode='contain' style={{ ...styles.image, width: width / 7 }}
                                source={{ uri: value.img }} />
                            <Text style={styles.text}>{value.name}</Text>
                        </Ripple>
                    )
                })
            }
        </ScrollView>
    )
}

export { Content_Category }

const styles = StyleSheet.create({
    ripple: {
        borderBottomWidth: 0.4,
        borderColor: 'gray',
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        height: '90%'
    },
    text: {
        fontFamily: 'yekan',
        fontSize: RFValue(14),
        color: '#555'
    }
})