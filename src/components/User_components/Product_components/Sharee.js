import { StyleSheet, Text, View, Dimensions,Share } from 'react-native'
import React,{ useState } from 'react'
import { Icon } from 'native-base';
import { Product } from '../../Common/dataArray';
import { Normalize } from '../../Common/Normalize';
import { white } from '../../Common/Styles/Colors';
import Ripple from 'react-native-material-ripple';
import { RFValue } from 'react-native-responsive-fontsize';

const Width = Dimensions.get('window').width;
const Sharee = () => {
    const [share,setShare] = useState('')
    const shareProduct = () => {
        Share.share({
            message:share.toString(),
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Ripple onPress={() => shareProduct()}>
                    <Icon iconStyle={styles.Icon} name='share-alt' type='font-awesome' color={'#888'} />
                </Ripple>
                <Ripple>
                    <Icon iconStyle={styles.Icon} name='bell' type='font-awesome' color={'#888'} />
                </Ripple>
                <Ripple>
                    <Icon iconStyle={styles.Icon} name='heart' type='font-awesome' color={'#888'} />
                </Ripple>
            </View>
            {
                Product.map((value, index) => {
                    return (
                        <View key={index} style={styles.box2}>
                            <Text style={styles.p_name}>{value.p_name}</Text>
                            <Text style={styles.e_name}>{value.e_name}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}
export {Sharee}

const styles = StyleSheet.create({
    container: {
        elevation: 6,
        backgroundColor: white,
        borderColor: '#ccc',
        borderBottomWidth: 1
    },
    Icon: {
        margin: 10,
        fontSize:RFValue(16)
    },
    box1: {
        flexDirection: 'row',
    },
    box2: {
        padding: 10
    },
    p_name: {
        color: '#111',
        fontSize: RFValue(14)
    },
    e_name: {
        color: '#999',
        fontSize: RFValue(12),
        textAlign: 'right'
    }
})