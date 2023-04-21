import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Footer, FooterTab, Icon } from 'native-base'
import { white } from '../../Common/Styles/Colors'
import { RFValue } from 'react-native-responsive-fontsize'
import { makeStyles } from 'native-base'

const MyFooter = (props) => {
    return (
        <Footer>
            <FooterTab style={props.color == 'green' ? styles.backgroundGreen : makeStyles.backgroundBlue}>
                <Button full style={styles.button}>
                    {
                        props.text ?
                            <Text style={styles.text}>{props.text}</Text>
                            :
                            <View style={styles.button}>
                                <Icon name="left" type='AntDesign' style={styles.icon} />
                                <Text style={styles.text}>{props.text}</Text>
                            </View>
                    }

                </Button>
            </FooterTab>
        </Footer>
    )
}

export default React.memo(MyFooter)

const styles = StyleSheet.create({

    backgroundBlue: {
        backgroundColor: '#1e88e5'
    },
    backgroundGreen: {
        backgroundColor: '#66bb6a'
    },
    text: {
        color: white,
        fontSize: RFValue(12),
        fontFamily: 'yekan'
    },
    icon: {
        color: white,
        fontSize: RFValue(14)
    },
    button: {
        flexDirection: 'row'
    }
})