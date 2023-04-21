import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { green, lowBlue, white } from '../../Common/Styles/Colors';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

const Content = () => {
    const { width } = useWindowDimensions();
    const [value, setValue] = useState();
    const [errorCode, setErrorCode] = useState(false);
    const ref = useBlurOnFulfill({ value, cellCount: 4 });

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        const code = Array.from(String(value), num => Number(num))
        if (code.length == 4) {
            if (code.length == 4 && value == 1234) {
                setErrorCode(false)
            } else {
                setErrorCode(true)
            }
        }
    }, [value])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.sec1}>
                <Text style={styles.sec1_text}>کد تایید به شماره فرستاده شد</Text>
                <Text style={{ ...styles.sec1_text, color: lowBlue }}>ویرایش شماره تماس</Text>
            </View>
            <View style={styles.sec2}>
                <Text style={styles.sec2_text}>کد تایید را وارد کنید</Text>
                <View style={styles.sec2_part2}>
                    <CodeField
                        {...props}
                        ref={ref}
                        value={value}
                        onChangeText={(text) => {
                            setValue(text)
                        }}
                        autoFocus={true}
                        rootStyle={[styles.codeFieldRoot, { width: '70%' }]}
                        keyboardType="numeric"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <View
                                onLayout={getCellOnLayoutHandler(index)}
                                key={index}
                                style={[styles.cellRoot, { width: width / 8 }, isFocused && styles.focusCell]}>
                                <Text style={styles.cellText}>
                                    {symbol || (isFocused ? <Cursor cursorSymbol='*' delay={600}/> : null)}
                                </Text>
                            </View>
                        )}
                    />
                </View>
                {
                    errorCode == true && <Text style={styles.sec2_error}>کد وارد شده اشتباه است</Text>
                }
            </View>
        </ScrollView>
    )
}

export default React.memo(Content)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
    },
    sec1: {
        width: null,
        backgroundColor: white,
        padding: 10,
        borderWidth: 1,
        borderColor: green
    },
    sec2_part2: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    sec1_text: {
        fontSize: RFValue(13),
        margin: 5
    },
    sec2: {
        marginTop: 30,
    },
    codeFieldRoot: {
        marginTop: 20,
    },
    cellRoot: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
    },
    cellText: {
        color: '#000',
        fontSize: RFValue(36),
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#007AFF',
        borderBottomWidth: 2,
    },
    sec2_text: {

    },
    sec2_error: {
        color: 'red',
        fontSize: RFValue(13),
        margin: 25
    }
})