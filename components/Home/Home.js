import React,{useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function Home() {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
             {/* <Text style={styles.title}>{text}</Text> */}
            <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
            <TouchableOpacity onPress={() => alert(`Dcm ${text}`)} style={styles.button}>
                <Text style={styles.buttonText}>Pick a photo</Text>
            </TouchableOpacity>
            <TextInput
                style={{ height: 40 }}
                placeholder="input your name !"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: 'black'

    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});