import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../assets/image/health-care.jpg'
import CustomInput from '../../components/CustomInput'
const SignInScreen = () => {

    const {height} = useWindowDimensions();
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    return (
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo,{height:height*0,3}]} resizeMode="contain" />

        <CustomInput placeholder="User Name" value={username} setValue = {setusername}/>
        <CustomInput placeholder="Password" value={password} setValue= {setpassword}/>

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