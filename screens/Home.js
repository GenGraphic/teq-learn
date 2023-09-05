import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../comp/Header';
import SideMenu from '../comp/SideMenu';

const Home = () => {
    const [sideMenu, setSideMenu] = useState(false);
  return (
    <LinearGradient colors={['#0074D9', '#FFFFFF']} style={styles.bkg} start={{x: 0.1, y: 0.2}} end={{x: 0.6, y: 0.7}}>
        {sideMenu &&
            <SideMenu toggler={setSideMenu}/>
        }
        <View style={styles.safeView}>
            <Header  sideMenuToggler={setSideMenu}/>

            <View>
                <Text style={styles.title}>About us</Text>
                <Text style={styles.aboutText}>
                    Lorem ipsum dolor sit amet, <Text style={styles.accentWord}>consectetur</Text> adipiscing elit. Quisque non malesuada magna, ac tristique turpis. Vestibulum id metus magna. 
                    Nulla porttitor ultrices condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Fusce porttitor sit amet tortor ut porta. Aliquam vel purus at risus luctus ullamcorper. Curabitur elementum elit non mattis interdum. 
                    Sed mollis rutrum mattis. <Text style={styles.accentWord}>Aliquam</Text> erat volutpat. Fusce venenatis, purus id placerat mattis, tellus tortor vehicula quam, vitae mollis magna neque eu tortor. 
                    Nam odio felis, euismod sit amet <Text style={styles.accentWord}>lacus</Text> at, convallis commodo nisi. Vestibulum semper tincidunt massa sit amet tincidunt. Donec lacus justo.
                </Text>
            </View>

            <Image style={styles.heroImg} source={require('../assets/images/homeHero.png')}/>
        </View>
    </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50,
        paddingRight: 20,
        paddingLeft: 20     
    },
    bkg: {
        flex: 1,
    },
    accentWord: {
        color: '#FF851B',
        fontWeight: 'bold',
        fontSize: 16
    },
    heroImg: {
        width: '100%',
        height: 200,
        objectFit: 'fill'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    },
    aboutText: {
        opacity: 0.9
    },
})