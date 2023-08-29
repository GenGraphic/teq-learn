import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.body} >
        <View style={styles.compLogo}>
            <Image source={require('../assets/images/logo.jpg')} style={styles.logo}/>
      
            <View>
                <Text style={styles.title}>TEQLearn</Text>
                <Text style={styles.slogan}>Project | Program | Portfolio Excellence</Text>
            </View>
        </View>
        
        <TouchableOpacity>
           <Image source={require('../assets/images/menu.png')} style={styles.menuIcon}/> 
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
   body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
   },
    logo: {
        width: 70,
        height: 70,
        objectFit: 'cover',
        borderRadius: 50
    },
    menuIcon: {
        width: 30,
        height: 30,
        objectFit: 'cover'
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    slogan: {
        color: '#FFF',
        fontSize: 10
    },
    compLogo: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 10
    }
})