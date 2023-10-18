import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

const Project = ({image, title, content, date}) => {
    const baseImgUrl = "https://ergonteq.com/api/steps_images/";
    const [viewMore, setViewMore] = useState(false);

  return (
    <View style={styles.projectSection}>
        <View style={styles.progressCont}>
            <View style={styles.progressCircle}></View>
            <View style={styles.progressLine}></View>
        </View>
        <TouchableOpacity style={styles.contentCont} onPress={() => setViewMore(!viewMore)}>
            <ImageBackground source={{uri: baseImgUrl + image}} style={styles.sectionImage} borderTopLeftRadius={10} borderBottomLeftRadius={10}/>
            <View style={styles.sectionTextCont}>
                <Text style={styles.sectionTitle}>{title}</Text>
                {viewMore ?
                    <Text style={styles.sectionText}>{content}</Text>
                :
                    <Text numberOfLines={3} ellipsizeMode="tail" style={styles.sectionText}>{content}</Text>
                }
                <Text style={styles.sectionDate}>{date}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Project

const styles = StyleSheet.create({
    projectSection: {
        flexDirection: 'row',
        gap: 10,
        minHeight: 100
    },
    projectSectionExtended: {
        flexDirection: 'row',
        gap: 10,
        minHeight: 150
    },
    progressCont: {
        alignItems: 'center'
    },
    progressCircle: {
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: '#70e000',
        borderWidth: 5
    },
    progressLine: {
        width: 2,
        flex: 1,
        backgroundColor: '#70e000'
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
        padding: 10,
        gap: 5
    },
    sectionText: {
        fontSize: 12
    },
    sectionTitle: {
        fontSize: 14
    },
    sectionDate: {
        fontSize: 10,
        textAlign: 'right',
        opacity: 0.5
    },
})