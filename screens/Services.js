import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground } from 'react-native';
import React, {useState} from 'react';
import SideMenu from '../comp/SideMenu';
import Header from '../comp/Header';


const Services = () => {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <ImageBackground style={styles.bkg} resizeMode='cover' source={require('../assets/images/services_bkg.jpg')}>
      <View style={styles.whiteFilter}>
        {sideMenu &&
          <SideMenu toggler={setSideMenu} />
        }
        <SafeAreaView style={styles.safeView}>
          <Header sideMenuToggler={setSideMenu}/>

          <Text style={styles.title}>SERVICES we offer</Text>
          
          <View style={styles.servicesCont}>
            <View style={styles.service}>
              <Image source={require('../assets/images/project-management.png')} style={styles.serviceImg}/>
              <View style={styles.serviceTextCont}>
                <Text style={styles.serviceTitle}>end-to-end  Project Management Services:</Text>
                <Text style={styles.serviceText}>
                  We manage projects from idea to delivery, enabling your organization to focus on its strengths.
                </Text>
              </View>
            </View>

            <View style={styles.service}>
              <Image source={require('../assets/images/data-complexity.png')} style={styles.serviceImg}/>
              <View style={styles.serviceTextCont}>
                <Text style={styles.serviceTitle}>Custom PM Frameworks and SOPs:</Text>
                <Text style={styles.serviceText}>
                  We tailor project management related frameworks and procedures that can boost efficiency, effectiveness and consistency across your organisation
                </Text>
              </View>
            </View>  

            <View style={styles.service}>
              <Image source={require('../assets/images/puzzle.png')} style={styles.serviceImg}/>
              <View style={styles.serviceTextCont}>
                <Text style={styles.serviceTitle}>Executive Education:</Text>
                <Text style={styles.serviceText}>
                  Elevate your project management skills with our workshops and certification programs.
                </Text>
              </View>
            </View>  

            <View style={styles.service}>
              <Image source={require('../assets/images/process.png')} style={styles.serviceImg}/>
              <View style={styles.serviceTextCont}>
                <Text style={styles.serviceTitle}>Workflow Automation Implementation:</Text>
                <Text style={styles.serviceText}>
                  We apply automation to project management workflows, from ideas and proposals to real-time tracking, increasing efficiency and accuracy.
                </Text>
              </View>
            </View>  

            <View style={styles.service}>
              <Image source={require('../assets/images/data-transformation.png')} style={styles.serviceImg}/>
              <View style={styles.serviceTextCont}>
                <Text style={styles.serviceTitle}>Expertise-Powered Transformation:</Text>
                <Text style={styles.serviceText}>
                  Harness our global-certified team's prowess to optimize projects, processes, and skills for your organizational success.
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
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
    marginRight: 20,
    paddingTop: 50,
  },
  whiteFilter: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  },
  title: {
    fontSize: 20,
    marginTop: 30
  },
  serviceImg: {
    width: 60,
    height: 60,
    objectFit: 'cover',
    marginRight: 10
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
    fontSize: 12,
    marginBottom: 5
  },
  serviceText: {
    opacity: 0.9,
    fontSize: 12
  },
  serviceTextCont: {
    flex: 1
  }
})