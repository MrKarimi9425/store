import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple'
import { Icon } from 'native-base'
import { Black, White } from './Colors'

const DropDown = () => {

    return (
        <Ripple style={styles.dropDown}>
            <View style={styles.icon}>
            <Icon name='down' type='antdesign' size={25} />
            </View>
            {/* <View style={[styles.Input, (errors && touched) && { borderColor: '#ff5e5e', borderWidth: 1, width: '63%' }]}> */}
                <View style={styles.textContainer}>
                    <Text style={styles.text}>ایران</Text>
                </View>
            {/* </View > */}
        </Ripple>
    )
}

export default React.memo(DropDown)

const styles = StyleSheet.create({
    textContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontFamily:'BYekan',
        color:Black,
        fontSize:20
    },
    dropDown: {
        backgroundColor: '#C4C4C4',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '70%',
        marginVertical:10
    },
    icon:{
        padding:5
    }
})