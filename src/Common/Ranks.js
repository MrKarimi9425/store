import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Rank } from './dataArray'
import Stars from 'react-native-stars'
import { white } from './Styles/Colors'
import { RFValue } from 'react-native-responsive-fontsize'


const Ranks = () => {
    return (
        <View style={styles.container}>
            {
                Rank.map((value, index) => {
                    return (
                        <View key={index} style={styles.rank}>
                            <Stars
                                half={true}
                                default={value.dufaultRank}
                                // update={(val) => { this.setState({ stars: val }) }}
                                spacing={5}
                                starSizeW={40}
                                starSizeH={8}
                                count={5}
                                fullStar={require('../../src/assets/image/fullStar.png')}
                                emptyStar={require('../../src/assets/image/emptyStar.png')}
                                halfStar={require('../../src/assets/image/halfStar.png')} />
                            <Text style={styles.text}>
                                {value.text}
                            </Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default React.memo(Ranks)

const styles = StyleSheet.create({
    rank: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    container:{
        margin:5,
        backgroundColor:white,
        padding:10
    },
    text:{
        color: '#888',
        fontSize:RFValue(10),
        fontFamily:'yekan'
    }
})