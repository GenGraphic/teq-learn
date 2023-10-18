import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import * as ImagePicker from 'expo-image-picker';

const MyImagePicker = ({ showError, setNewStepImage }) => {
  
  async function pickImage() {

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false, // higher res on iOS
      aspect: [4, 3],
    });
  
    if (result.cancelled) {
      return;
    }
  
    let localUri = result.uri;
    let filename = localUri.split('/').pop();
  
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
  
    setNewStepImage({ uri: localUri, name: filename, type });
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
    marginBottom: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FFF',
  }
})
