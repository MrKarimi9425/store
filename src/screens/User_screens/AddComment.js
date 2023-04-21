import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyHeader from '../components/Header/MyHeader'
import MyFooter from '../components/Footer/MyFooter'
import { Container } from 'native-base'
import Content from '../components/AddCommentScreen/Content'


const props = {
    headName: 'ثبت نقد و بررسی',
    type: 'password',
    icon: 'arrow'
}
const AddComment = () => {
    return (
        <Container style={styles.container}>
            <MyHeader {...props} />
            <ScrollView>
                <Content />
            </ScrollView>
            <MyFooter text={'ثبت نقد و بررسی'} />
        </Container>
    )
}

export default React.memo(AddComment)

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f5f5f5'
    }
})