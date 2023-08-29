import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../comp/Header';

const Home = () => {
  return (
    <LinearGradient colors={['#FF851B', '#0074D9']} style={styles.bkg} start={{x: 0.1, y: 0.2}} end={{x: 0.6, y: 0.7}}>
        <SafeAreaView style={styles.safeView}>
            <Header />
        </SafeAreaView>
    </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    bkg: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20
    },
})