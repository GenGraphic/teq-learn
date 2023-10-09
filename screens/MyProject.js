import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import React, {useState} from 'react';
import SideMenu from '../comp/SideMenu';
import Header from '../comp/Header';
import { LinearGradient } from 'expo-linear-gradient';
import Project from '../comp/Project';

const MyProject = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const [projectData, setProjectData] = useState([
    {
        id: 1,
        section: 1,
        title: 'Section title 1',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sem nisi. Ut eget turpis est. Donec quis rutrum mi, sed accumsan nulla.`,
        completed: 0,
        image: require('../assets/images/muster.jpg')
    },
    {
        id: 2,
        section: 2,
        title: 'Section title 2',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sem nisi. Ut eget turpis est. Donec quis rutrum mi, sed accumsan nulla.`,
        completed: 0,
        image: require('../assets/images/muster.jpg')
    },
    {
        id: 3,
        section: 3,
        title: 'Section title 3',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sem nisi. Ut eget turpis est. Donec quis rutrum mi, sed accumsan nulla.`,
        completed: 0,
        image: require('../assets/images/muster.jpg')
    },
    {
        id: 4,
        section: 4,
        title: 'Section title 4',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sem nisi. Ut eget turpis est. Donec quis rutrum mi, sed accumsan nulla.`,
        completed: 0,
        image: require('../assets/images/muster.jpg')
    },
    {
        id: 5,
        section: 5,
        title: 'Section title 5',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sem nisi. Ut eget turpis est. Donec quis rutrum mi, sed accumsan nulla.`,
        completed: 0,
        image: require('../assets/images/muster.jpg')
    },
    {
        id: 6,
        section: 6,
        title: 'Section title 6',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sem nisi. Ut eget turpis est. Donec quis rutrum mi, sed accumsan nulla.`,
        completed: 0,
        image: require('../assets/images/muster.jpg')
    },
    {
        id: 7,
        section: 7,
        title: 'Section title 7',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sem nisi. Ut eget turpis est. Donec quis rutrum mi, sed accumsan nulla.`,
        completed: 0,
        image: require('../assets/images/muster.jpg')
    },
    {
        id: 8,
        section: 8,
        title: 'Section title 8',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sem nisi. Ut eget turpis est. Donec quis rutrum mi, sed accumsan nulla.`,
        completed: 0,
        image: require('../assets/images/muster.jpg')
    },
]);

  return (
    <LinearGradient colors={['#0074D9', '#FFFFFF']} style={styles.bkg} start={{x: 0.1, y: 0.2}} end={{x: 0.6, y: 0.7}}>
      {sideMenu &&
        <SideMenu toggler={setSideMenu} />
      }
      <SafeAreaView style={styles.safeView}>
        <Header sideMenuToggler={setSideMenu}/>

        <Text style={styles.title}>Hi Eduard, welcome back!</Text>

        <FlatList 
          data={projectData}
          renderItem={({item}) => <Project item={item} />}
          keyExtractor={item => item.id}
        />

      </SafeAreaView>
    </LinearGradient>
  )
}

export default MyProject

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
  title: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  }
})