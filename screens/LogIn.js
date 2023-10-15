import { StyleSheet, Text, View, ImageBackground, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Image, TextInput } from 'react-native';
import React, {useState} from 'react';
import SideMenu from '../comp/SideMenu';
import Header from '../comp/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LogIn = ({navigation}) => {
  const [sideMenu, setSideMenu] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const logUserIn = async () => {
    if (userName.length < 1 || userPassword.length < 1) {
      showError('Please fill both fields.', 2000);
    } else {
      const formData = new FormData();
      formData.append('userName', userName);
      formData.append('userPassword', userPassword);
  
      try {
        const response = await fetch('https://ergonteq.com/api/logUserIn.php', {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          const data = await response.json();
          
          // Dismiss Keyboard
          Keyboard.dismiss();
  
          // Show the error message
          setErrorMessage(data.message);
  
          // Hide the Error after 2 seconds
          setTimeout(() => {
            setErrorMessage('');
          }, 2000);
  
          if (data.success) {
            // Store the token to be used to remember the user
            await AsyncStorage.setItem('userToken', data.token);
  
            // Navigate to the 'Home' screen
            navigation.navigate('Home');
          }
        } else {
          console.log('Network response was not ok');
        }
      } catch (error) {
        console.log(error);
      }
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
                    <Image style={styles.emailIcon} source={require('../assets/images/userEmpty.png')}/>
                  </View>

                  <Text style={styles.title}>If you are a customer, use your credentials to view the timeline and progress of your project</Text>

                  <View style={styles.textInput}>
                    <View style={styles.textInputIconBkg}>
                      <Image style={styles.textInputIcon} source={require('../assets/images/userFull.png')}/>
                    </View>
                    <TextInput onChangeText={(e) => setUserName(e)} style={styles.textInputField} placeholder='Username'/>
                  </View>

                  <View style={styles.textInput}>
                    <View style={styles.textInputIconBkg}>
                      <Image style={styles.textInputIcon} source={require('../assets/images/padlock.png')}/>
                    </View>
                    <TextInput onChangeText={(e) => setUserPassword(e)} style={styles.textInputField} placeholder='Password' secureTextEntry/>
                  </View>

                  <TouchableOpacity onPress={logUserIn} style={styles.loginBtn}>
                    <Text style={styles.loginBtnText}>LOGIN</Text>
                  </TouchableOpacity>
                </View >
              </TouchableWithoutFeedback>
            </SafeAreaView>
          </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  )
}

export default LogIn

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
    gap: 150,
    paddingTop: 50,
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