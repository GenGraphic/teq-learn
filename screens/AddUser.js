import { StyleSheet, Text, View, ImageBackground, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Alert, Keyboard, Image, TextInput, Platform } from 'react-native';
import React, {useState, useEffect} from 'react';
import SideMenu from '../comp/SideMenu';
import Header from '../comp/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AddUser = ({navigation}) => {
  const [sideMenu, setSideMenu] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    checkIfAdmin();
  }, []);

  //check is the admin is not on, redirect the user
  const checkIfAdmin = async () => {
    if(await AsyncStorage.getItem('userToken') === 'admin'){
      return;
    } else {
      navigation.navigate('Home');
    }
  }

  const createTwoButtonAlert = () =>
    Alert.alert('Are those value right?', 'Please check if the values are corect. If they are, confirm them by pressing YES', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'YES', onPress: () => {
        addUser();
      }},
    ]);

  const addUser = () => {
    const formData = new FormData();
    formData.append('userName', userName);
    formData.append('userPassword', userPassword);
    formData.append('projectTitle', projectTitle);

    if(userName.length < 1 || userPassword < 1 || projectTitle.length < 1) {
      setErrorMessage("Please fill all the fields");
    } else {
      fetch('https://ergonteq.com/api/addNewUser.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        //show the API message
        showError(data.message, 2000)

        //if success, empty the Fields
        if(data.success) {
          setProjectTitle('');
          setUserName('');
          setUserPassword('');
        }
      })
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
              <View style={styles.form}> 
                <View style={styles.emailIconCont}>
                  <Image style={styles.emailIcon} source={require('../assets/images/add-user.png')}/>
                </View>

                <Text style={styles.title}>From Here you can add new users to you DB.</Text>

                <View style={styles.textInput}>
                  <View style={styles.textInputIconBkg}>
                    <Image style={styles.textInputIcon} source={require('../assets/images/userFull.png')}/>
                  </View>
                  <TextInput value={userName} onChangeText={(e) => setUserName(e)} style={styles.textInputField} placeholder='Username'/>
                </View>

                <View style={styles.textInput}>
                  <View style={styles.textInputIconBkg}>
                    <Image style={styles.textInputIcon} source={require('../assets/images/padlock.png')}/>
                  </View>
                  <TextInput value={userPassword} onChangeText={(e) => setUserPassword(e)} style={styles.textInputField} placeholder='Password' />
                </View>

                <View style={styles.textInput}>
                  <View style={styles.textInputIconBkg}>
                    <Image style={styles.textInputIcon} source={require('../assets/images/project_id.png')}/>
                  </View>
                  <TextInput value={projectTitle} onChangeText={(e) => setProjectTitle(e)} style={styles.textInputField} placeholder='Project Title' />
                </View>

                <TouchableOpacity style={styles.loginBtn} onPress={createTwoButtonAlert}>
                  <Text style={styles.loginBtnText}>ADD USER</Text>
                </TouchableOpacity>
              </View >
            </TouchableWithoutFeedback>

            <Text></Text>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  )
}

export default AddUser

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
    paddingBottom: 20
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
    fontSize: 13,
    marginTop: 20,
    width: '80%',
    textAlign: 'center',
    marginBottom: 10
  },
  textInput: {
    width: '90%',
    backgroundColor: 'rgb(255, 255, 255)',
    borderBottomColor: 'rgba(0, 0, 0, 0.7)',
    borderBottomWidth: 1,
    minHeight: 40,
    marginBottom: 20,
    flexDirection: 'row',
    gap: 10
  },
  textInputIcon: {
    width: 20,
    height: 20
  },
  textInputIconBkg: {
    backgroundColor: '#464E78',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
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
    flex: 1
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
})