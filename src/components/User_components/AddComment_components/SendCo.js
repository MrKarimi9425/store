import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { white } from '../../Common/Styles/Colors'

const SendCo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>عنوان نقد و بررسی شما</Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>نقاط قوت</Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>نقاط ضعف</Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View style={styles.view}>
                <TextInput style={{...styles.textInput,height:null}} 
                multiline
                placeholder='متن نقد و بررسی شما'
                placeholderTextColor={'#888'}  
                numberOfLines={6}/>
            </View>
        </View>
    )
}

export {SendCo}

const styles = StyleSheet.create({
    container:{
        marginTop:15
    },
    view:{
        width:'100%',
        height:null, 
        justifyContent:'flex-end',
        padding:10
    },
    text:{
        fontSize:RFValue(12),
        fontFamily:'yekan',
        color:'#777',
        marginBottom:10
    },
    textInput:{
        width:'100%',
        backgroundColor:white,
        fontSize:RFValue(14),
        color:'#666',
        fontFamily:'yekan',
        height:60,
        textAlignVertical:'top',
        textAlign:'right'
    }
})