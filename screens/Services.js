import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React, {useState} from 'react';
import SideMenu from '../comp/SideMenu';
import Header from '../comp/Header';
import { LinearGradient } from 'expo-linear-gradient';

const Services = () => {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <LinearGradient colors={['#0074D9', '#FFFFFF']} style={styles.bkg} start={{x: 0.1, y: 0.2}} end={{x: 0.6, y: 0.7}}>
      {sideMenu &&
        <SideMenu toggler={setSideMenu} />
      }
      <SafeAreaView style={styles.safeView}>
        <Header sideMenuToggler={setSideMenu}/>

        <Text style={styles.title}>Top 5 <Text style={{color: '#FF851B'}}>SERVICES</Text> we offer</Text>
        
        <View style={styles.servicesCont}>
          <View style={styles.service}>
            <Image source={require('../assets/images/project-management.png')} style={styles.serviceImg}/>
            <View style={styles.serviceTextCont}>
              <Text style={styles.serviceTitle}>Outsourced Project Management Services:</Text>
              <Text style={styles.serviceText}>
                We manage projects from idea to delivery, freeing your organization to focus on its strengths.
              </Text>
            </View>
          </View>

          <View style={styles.service}>
            <Image source={require('../assets/images/data-complexity.png')} style={styles.serviceImg}/>
            <View style={styles.serviceTextCont}>
              <Text style={styles.serviceTitle}>Outsourced Project Management Services:</Text>
              <Text style={styles.serviceText}>
                We manage projects from idea to delivery, freeing your organization to focus on its strengths.
              </Text>
            </View>
          </View>  

          <View style={styles.service}>
            <Image source={require('../assets/images/puzzle.png')} style={styles.serviceImg}/>
            <View style={styles.serviceTextCont}>
              <Text style={styles.serviceTitle}>Outsourced Project Management Services:</Text>
              <Text style={styles.serviceText}>
                We manage projects from idea to delivery, freeing your organization to focus on its strengths.
              </Text>
            </View>
          </View>  

          <View style={styles.service}>
            <Image source={require('../assets/images/process.png')} style={styles.serviceImg}/>
            <View style={styles.serviceTextCont}>
              <Text style={styles.serviceTitle}>Outsourced Project Management Services:</Text>
              <Text style={styles.serviceText}>
                We manage projects from idea to delivery, freeing your organization to focus on its strengths.
              </Text>
            </View>
          </View>  

          <View style={styles.service}>
            <Image source={require('../assets/images/data-transformation.png')} style={styles.serviceImg}/>
            <View style={styles.serviceTextCont}>
              <Text style={styles.serviceTitle}>Outsourced Project Management Services:</Text>
              <Text style={styles.serviceText}>
                We manage projects from idea to delivery, freeing your organization to focus on its strengths.
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Services

const styles = StyleSheet.create({
  bkg: {
    flex: 1,
  },
  safeView: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30
  },
  serviceImg: {
    width: 70,
    height: 70,
    objectFit: 'cover'
  },
  servicesCont: {
    justifyContent: 'space-between',
    flex: 1,
  },
  service: {
    flexDirection: 'row',
    alignItems:'center',
    flex: 1,
    width: '100%',
    gap: 5
  },
  serviceTitle: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  serviceText: {
    opacity: 0.9,
    fontSize: 12
  },
  serviceTextCont: {
    flex: 1
  }
})