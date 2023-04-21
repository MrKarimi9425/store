import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'native-base'
import { main, white } from '../../Common/Styles/Colors'
import { RFValue } from 'react-native-responsive-fontsize'
import Ripple from 'react-native-material-ripple'
import { useNavigation } from '@react-navigation/native'

const AddComment = () => {
    const {navigate} = useNavigation();
    return (
        <Ripple style={styles.button} onPress={() => navigate('AddComment')}>
            <Icon name='pencil' type='MaterialCommunityIcons' style={styles.icon} />
        </Ripple>
    )
}

export default React.memo(AddComment)

const styles = StyleSheet.create({
    button: {
        width:60,height:60,
        borderRadius:100,
        backgroundColor:main,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:10,
        left:10
    },
    icon:{
        color:white,
        fontSize:RFValue(22)
    }
})