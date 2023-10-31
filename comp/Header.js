import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';

const Header = ({sideMenuToggler}) => {

  return (
    <View style={styles.body} >
        <View style={styles.compLogo}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
      
            <View>
                <Text style={styles.title}>ergonTEQ</Text>
                <Text style={styles.slogan}>Project | Program | Portfolio Excellence</Text>
            </View>
        </View>
        
        <TouchableOpacity onPress={() => sideMenuToggler(true)}>
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
    width: '100%'
   },
    logo: {
        width: 70,
        height: 70,
        objectFit: 'cover',
        borderRadius: 50
    },
    menuIcon: {
        width: 40,
        height: 40,
        objectFit: 'cover'
    },
    title: {
        fontSize: 20,
    },
    slogan: {
        fontSize: 12
    },
    compLogo: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 10
    }
})