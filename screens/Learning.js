import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground } from 'react-native';
import React, {useState} from 'react';
import SideMenu from '../comp/SideMenu';
import Header from '../comp/Header';
import { LinearGradient } from 'expo-linear-gradient';

const Learning = () => {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <ImageBackground style={styles.bkg} source={require('../assets/images/project_bkg.jpg')}>
      <View style={styles.whiteFilter}>
        {sideMenu &&
          <SideMenu toggler={setSideMenu} />
        }
        <SafeAreaView style={styles.safeView}>
          <Header sideMenuToggler={setSideMenu}/>

          <View style={styles.mainCont}>
            <Text style={styles.title}>We are working on this feature and will be soon be avalible.</Text>
            <Image style={styles.workingImg} source={require('../assets/images/working.png')}/>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  )
}

export default Learning

const styles = StyleSheet.create({
  bkg: {
    flex: 1
  },
  safeView: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 50,
  },
  whiteFilter: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },  
  mainCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    textAlign: 'center'
  },
  workingImg: {
    width: 250 ,
    height: 250,
  },
})