import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import SideMenu from '../comp/SideMenu';
import Header from '../comp/Header';
import { LinearGradient } from 'expo-linear-gradient';

const Learning = () => {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <LinearGradient colors={['#0074D9', '#FFFFFF']} style={styles.bkg} start={{x: 0.1, y: 0.2}} end={{x: 0.6, y: 0.7}}>
      {sideMenu &&
        <SideMenu toggler={setSideMenu} />
      }
      <Header sideMenuToggler={setSideMenu}/>
    </LinearGradient>
  )
}

export default Learning

const styles = StyleSheet.create({
  bkg: {
    flex: 1,
  },
})