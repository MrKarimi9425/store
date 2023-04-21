import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ranks from '../../Common/Ranks'
import { RFValue } from 'react-native-responsive-fontsize'
import SendCo from './SendCo'

const Content_addComment = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.ratingText}>امتیاز شما به این محصول</Text>
            <Ranks />
            <SendCo />
        </View>
    )
}

export { Content_addComment }

const styles = StyleSheet.create({
    container: {

    },
    ratingText: {
        fontSize: RFValue(14),
        fontFamily: 'yekan',
        color: '#666',
        margin: 10
    }
})