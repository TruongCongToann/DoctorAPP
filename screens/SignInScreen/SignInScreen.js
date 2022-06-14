import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Logo from '../../assets/image/health-care.jpg'
import CustomInput from '../../components/CustomInput'
const SignInScreen = () => {
    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />

        <CustomInput/>
        </View>
    )
}
const styles = StyleSheet.create({
    root:{
            alignItems:'center',
            padding:20,

    },
    logo: {
        width: '70%' ,
        maxWidth:300,
        maxHeight: 200,
        borderRadius:10,
        
    }
})

export default SignInScreen     