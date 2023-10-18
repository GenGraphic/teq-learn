import { StyleSheet, Text, SafeAreaView, FlatList, View, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import SideMenu from '../comp/SideMenu';
import Header from '../comp/Header';
import { LinearGradient } from 'expo-linear-gradient';
import Project from '../comp/Project';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyProject = ({navigation}) => {
  const [sideMenu, setSideMenu] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [projectSteps, setProjectSteps] = useState();
  const [dataLoaded, setDataLoaded] = useState(false); // Add this state
  const [userIsOn, setUserIsOn] = useState(false);

  useEffect(() => {
    fetchProjectSteps();
    checkUserIsOn();
  }, [])

  const checkUserIsOn = async () => {
    const token = await AsyncStorage.getItem('userToken')
    //check id any user is online
    if(token) {
      setUserIsOn(true);
    } else {
      setUserIsOn(false);
    }
    
}

  useEffect(() => {
    if(dataLoaded){
      setProjectSteps(JSON.parse(projectData.project_steps));
    }
  }, [dataLoaded, projectData])

  
  const fetchProjectSteps = async () => {
    const token = await AsyncStorage.getItem('userToken');
  
    if (token !== 'admin') {
      const formData = new FormData();
      formData.append('userToken', token);
  
      fetch('https://ergonteq.com/api/fetchProject.php', {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          showError(data.message, 2000);
  
          if (data.success) {
            setProjectData(data.project);

            setUserName(data.userName);
  
            setDataLoaded(true);
          }
        })
        .catch((error) => console.log(error.message));
    } else {
      showError("You are an Admin and can't have a project!", 5000);
    }
  };

  const showError = (text, time) => {
    //Show the error message
    setErrorMessage(text);

    //after time, hide the message
    setTimeout(() => {
      setErrorMessage('');
    },time)
  }

  return (
    <LinearGradient colors={['#0074D9', '#FFFFFF']} style={styles.bkg} start={{x: 0.1, y: 0.2}} end={{x: 0.6, y: 0.7}}>
      {sideMenu &&
        <SideMenu toggler={setSideMenu} />
      }
      {errorMessage.length > 0 &&
        <View style={styles.errorMessageBKG}>
          <Text style={styles.errorMessageText}>{errorMessage}</Text>
        </View>
      }
      <SafeAreaView style={styles.safeView}>
        <Header sideMenuToggler={setSideMenu}/>

        {userIsOn ?
          <View style={{flex: 1}}>
            <Text style={styles.title}>Hi {userName}, welcome back!</Text>
            {dataLoaded ? (
              <FlatList
                data={projectSteps}
                renderItem={({ item }) => <Project image={item.step_image} title={item.step_title} content={item.step_content} date={item.step_datum}/>}
                keyExtractor={(item) => item.step_id}
              />
            ) : (
              <Text>Loading...</Text>
            )}
          </View> 
        :
          <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.noUser}>Press here to log in</Text>
          </TouchableOpacity>
        }
        
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
  },
  errorMessageBKG: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
  },
  errorMessageText: {
    backgroundColor: 'rgba(52, 58, 64, 0.7)', // Add your background color here
    padding: 6,
    color: '#FFF'
  },
  noUser: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
})