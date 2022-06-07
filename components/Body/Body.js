import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput,FlatList,ScrollView } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
export default function Body() {
    const [text, setText] = useState('');
    // let openImagePickerAsync = async () => {
    //     let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    //     if (permissionResult.granted === false) {
    //         alert("Permission to access camera roll is required!");
    //         return;
    //     }

    //     let pickerResult = await ImagePicker.launchImageLibraryAsync();
    //     console.log(pickerResult);
    // }
    const handlePress = (e) =>{
        alert(e)
    }
    return (
      <ScrollView>
                <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item} onPress ={() =>handlePress(item.key)}>{item.key}</Text>}
      />

      </ScrollView>
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