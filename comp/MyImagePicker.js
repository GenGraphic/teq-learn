import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const MyImagePicker = () => {
  const [newStepImage, setNewStepImage] = useState(null);

  const pickImage = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.canceled) {
      setNewStepImage(result.assets[0].uri);
    }
  }
  return (
    <TouchableOpacity style={styles.Btn} onPress={pickImage}>
      <Text style={styles.text}>Select Image</Text>
    </TouchableOpacity>
  )
}

export default MyImagePicker

const styles = StyleSheet.create({
  Btn: {
    width: '100%',
    height: 30,
    backgroundColor: '#464E78',
    marginBottom: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FFF',

  }
})