import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React, {useState} from 'react';
import Header from '../comp/Header';
import SideMenu from '../comp/SideMenu';

const Home = () => {
    const [sideMenu, setSideMenu] = useState(false);
  return (
    <ImageBackground style={styles.bkg} resizeMode='cover' source={require('../assets/images/home_bkg.jpg')}>
        <View style={styles.whiteFilter}>
            {sideMenu &&
                <SideMenu toggler={setSideMenu} />
            }
            <View style={styles.safeView}>
                <Header  sideMenuToggler={setSideMenu}/>

                <View style={styles.content}>
                    <Text style={styles.aboutText}>
                        Maximize the Business Value you get from your projects through professional project management services
                    </Text>

                    <View style={styles.list}>
                        <Text style={styles.listItem}>Integrated Excellence</Text>
                        <Text style={styles.listItem}>Predictive and Adaptive approaches</Text>
                        <Text style={styles.listItem}>Bespoke Solutions</Text>
                        <Text style={styles.listItem}>Stakeholder Synergy</Text>
                        <Text style={styles.listItem}>Global Perspective, Local Insight.</Text>
                        <Text style={styles.listItem}>Trustworthy Partnerships</Text>
                        <Text style={styles.listItem}>Embrace technology</Text>
                        <Text style={styles.listItem}>Sustainability Focus</Text> 
                    </View>
                    
                </View>
            </View>
        </View>
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        paddingRight: 20,
        paddingLeft: 20,     
    },
    bkg: {
        flex: 1,
    },
    whiteFilter: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    accentWord: {
        color: '#FF851B',
        fontWeight: 'bold',
        fontSize: 16
    },
    aboutText: {
       fontSize: 16
    },
    list: {
        marginTop: 25
    },
    listItem: {
        letterSpacing: 2,
        marginBottom: 10,
        fontSize: 14
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },
})