import React,{useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function Body() {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
           
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});