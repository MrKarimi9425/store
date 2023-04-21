import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'native-base'
import { RFValue } from 'react-native-responsive-fontsize'
import { white } from '../../Common/Styles/Colors'
import Ripple from 'react-native-material-ripple'

const Filter = () => {
    const [filterName, setFilterName] = useState('جدیدترین نظرات')
    const [checkFilter, setCheckFilter] = useState(true)

    const Change_Filter = () => {
        checkFilter == true ?
        setFilterName('مهم ترین نظرات')
        :
        setFilterName('جدیدترین نظرات')

        setCheckFilter(!checkFilter)

    }
    return (
        <View style={styles.filter}>
            <Ripple
                onPress={() => {
                    Change_Filter();
                }}
                style={{ ...styles.content, ...styles.sortBorder }}>
                <Text style={styles.text}>{filterName}</Text>
                <Icon name='sort' type='MaterialIcons' style={styles.text} />
            </Ripple>
            <View style={styles.content}>
                <Text style={styles.text}>15  نفر</Text>
                <Text style={styles.text}>نظرات کاربران -</Text>
            </View>
        </View>
    )
}

export default React.memo(Filter)

const styles = StyleSheet.create({
    filter: {
        padding: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'yekan',
        fontSize: RFValue(12),
        paddingLeft: 5
    },
    sortBorder: {
        borderWidth: 0.7,
        borderColor: '#666',
        padding: 2,
        paddingHorizontal: 8,
        borderRadius: 5,
        backgroundColor: white
    }
})