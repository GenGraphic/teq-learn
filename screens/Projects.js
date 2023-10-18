import { StyleSheet, Text, View, ImageBackground, FlatList, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Image, TextInput, Platform } from 'react-native';
import React, {useState, useEffect} from 'react';
import SideMenu from '../comp/SideMenu';
import Header from '../comp/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-virtualized-view';
import MyImagePicker from '../comp/MyImagePicker';

const Projects = ({navigation}) => {
  const baseImgUrl = "https://ergonteq.com/api/steps_images/";
  const [sideMenu, setSideMenu] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedProjectID, setSelectedProjectID] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsList, setProjectsList] = useState(null);
  const [projectsID, setProjectsId] = useState([]);
  const [newStepTitle, setNewStepTitle] = useState('');
  const [newStepConten, setNewStepContent] = useState('');

  useEffect(() => {
    const checkUserIsAdmin = async () => {
      const isAdmin = await checkIfAdmin();
      if (isAdmin) {
        fetchProjects();
      } else {
        navigation.navigate('Home');
      }
    };
  
    checkUserIsAdmin();
  }, []);

  useEffect(() => {
    if(selectedProjectID !== null) {
      projectConverter();
    }
  }, [selectedProjectID])

  //Send new Step


  //fetch Projects
  const fetchProjects = () => {
    fetch('https://ergonteq.com/api/fetchProjects.php', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const newProjectsList = data.projectsList;
        setProjectsList(newProjectsList);
  
        // Create a new array to store project IDs
        const newProjectsId = newProjectsList.map(element => {
          return { label: element.project_title, value: element.project_id };
        });
  
        // Set the newProjectsId array to the state
        setProjectsId(newProjectsId);
      } else {
        showError(data.message, 2000);
      }
    })
    .catch(error => console.log("Error Fetching Projects:" + error.message));
  };

  //check is the admin is not on, redirect the user
  const checkIfAdmin = async () => {
    if(await AsyncStorage.getItem('userToken') === 'admin'){
      return true;
    } else {
      return false
    }
  }
  const showError = (text, time) => {
    //Show the error message
    setErrorMessage(text);

    //after time, hide the message
    setTimeout(() => {
      setErrorMessage('');
    },time)
  }


  // convert selected Project into fully JSON object
  const projectConverter = () => {
    try {
      // Filter the projectsList to find the selected project
      const newSelectedProject = projectsList.find(item => item.project_id === selectedProjectID);
  
      if (newSelectedProject) {
        // Parse the project_steps JSON string within the selected project
        newSelectedProject.project_steps = JSON.parse(newSelectedProject.project_steps);
  
        // Set the selected project in state
        setSelectedProject(newSelectedProject);
      } else {
        showError('Selected project not found!', 2000);
      }
    } catch (error) {
      showError('Error converting data: ' + error.message, 5000);
    }
  }


  return (
    <ImageBackground style={styles.bkg} resizeMode='cover' source={require('../assets/images/login_bkg.jpg')}>
      <View style={styles.whiteFilter}>
        {sideMenu &&
          <SideMenu toggler={setSideMenu} />
        }
        {errorMessage.length > 0 &&
          <View style={styles.errorMessageBKG}>
            <Text style={styles.errorMessageText}>{errorMessage}</Text>
          </View>
        }
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
            <SafeAreaView style={styles.safeView}>
              <Header sideMenuToggler={setSideMenu}/>
                <TouchableWithoutFeedback style={styles.formCont} onPress={Keyboard.dismiss}> 
                  <View style={{flex: 1}}>
                    <DropDownPicker
                      open={open}
                      value={selectedProjectID}
                      items={projectsID}
                      setOpen={setOpen}
                      setValue={setSelectedProjectID}
                      style={styles.dropDown}
                    />
                    <ScrollView style={styles.myScrollView}>
                      <View style={styles.form}> 
                        <View style={styles.emailIconCont}>
                            <Image style={styles.emailIcon} source={require('../assets/images/managing.png')}/>
                        </View>

                        <Text style={styles.title}>From here you can manage your clients projects, by adding new steps.</Text>
                        
                        <View style={styles.textInput}>
                            <Text>Add Tittle</Text>
                            <TextInput style={styles.textInputField} onChangeText={(e) => setNewStepTitle(e)} placeholder='Title'/>
                        </View>

                        <View style={styles.textInput}>
                            <Text>Description</Text>
                            <TextInput 
                                textAlignVertical='top' 
                                editable  
                                multiline 
                                style={styles.textAreaField} 
                                placeholder='Write a description of this step' 
                                secureTextEntry
                                onChangeText={(e) => setNewStepContent(e)}
                            />
                        </View>

                        <MyImagePicker />

                        <TouchableOpacity style={styles.loginBtn}>
                            <Text style={styles.loginBtnText}>SAVE</Text>
                        </TouchableOpacity>


                        {selectedProject &&
                          <View>
                            <Text style={styles.title}>Steps</Text>
                            {selectedProject.project_steps.map((item, index) => {
                              return(
                                <TouchableOpacity style={styles.step} key={item.step_id}>
                                  <Image style={styles.stepIMG} source={{uri:baseImgUrl + item.step_image}}/>
                                  <View>
                                    <Text style={styles.smallTitle}>{index + 1  + ". " + item.step_title}</Text>
                                    <Text>{item.step_content}</Text>
                                  </View>
                                  <Text  style={styles.stepDate}>{item.step_datum}</Text>
                                </TouchableOpacity>
                              )
                            })}
                          </View>
                        }
                      </View >
                    </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
              <Text></Text>
            </SafeAreaView>
          </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  )
}

export default Projects

const styles = StyleSheet.create({
  bkg: {
    flex: 1,
  },
  whiteFilter: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  safeView: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  formCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: 'rgba(219, 219, 219, 0.5)',
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: 50,
    padding: 10,
    flex: 1,
    marginBottom: 70
  },
  emailIconCont: {
    backgroundColor: '#464E78',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -50,
  },
  emailIcon: {
    width: 60,
    height: 60
  },
  title: {
    fontSize: 16,
    marginTop: 20,
    width: '80%',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '600'
  },
  smallTitle: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '600'
  },
  textInput: {
    minHeight: 50,
    marginBottom: 10,
    width: '100%',
    marginBottom: 30
  },
  dropDown: {
    marginTop: 20
  },
  textAreaField: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 10,
    minHeight: 200
  },
  loginBtn: {
    backgroundColor: '#464E78',
    width: 200,
    height: 30,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14
  },
  textInputField: {
    flex: 1,
    backgroundColor: '#FFF',
    minHeight: 50,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 10
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
  myScrollView: {
    paddingTop: 60,
    flex: 1,
  },
  stepIMG: {
    width: '100%',
    height: 300
  },
  stepDate: {
    textAlign: 'right',
    fontWeight: 'bold',
    opacity: 0.5
  },
  step: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderColor: 'rgba(0, 0, 0, 0.7)',
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginBottom: 10
  }
})