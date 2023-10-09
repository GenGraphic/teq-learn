import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React from 'react';

const Project = ({item}) => {

  return (
    <View key={item.id} style={styles.projectSection}>
        <View style={styles.progressCont}>
            <View style={styles.progressCircle}></View>
            <View style={styles.progressLine}></View>
        </View>
        <View style={styles.contentCont}>
            <ImageBackground source={item.image} style={styles.sectionImage} borderTopLeftRadius={10} borderBottomLeftRadius={10}/>
            <View style={styles.sectionTextCont}>
                <Text style={styles.sectionTitle}>{item.title}</Text>
                <Text style={styles.sectionText}>{item.text}</Text>
            </View>
        </View>
    </View>
  )
}

export default Project

const styles = StyleSheet.create({
    projectSection: {
        flexDirection: 'row',
        gap: 10,
    },
    progressCont: {
        alignItems: 'center'
    },
    progressCircle: {
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: 'rgba(0, 0, 0, 0.7)',
        borderWidth: 5
    },
    progressLine: {
        width: 2,
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    contentCont: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 10
    },
    sectionImage: {
        width: 100,
        height: 'auto',
        objectFit: 'cover',
    },
    sectionTextCont: {
        flex: 1,
        padding: 10
    },
    sectionText: {
        fontSize: 10
    },
    sectionTitle: {
        fontSize: 14
    },
})