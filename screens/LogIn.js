import { StyleSheet, Text, View, ImageBackground, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Image, TextInput } from 'react-native';
import React, {useState} from 'react';
import SideMenu from '../comp/SideMenu';
import Header from '../comp/Header';


const LogIn = () => {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <ImageBackground style={styles.bkg} resizeMode='cover' source={require('../assets/images/login_bkg.jpg')}>
      <View style={styles.whiteFilter}>
        {sideMenu &&
          <SideMenu toggler={setSideMenu} />
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
                    <TextInput style={styles.textInputField} placeholder='Username'/>
                  </View>

                  <View style={styles.textInput}>
                    <View style={styles.textInputIconBkg}>
                      <Image style={styles.textInputIcon} source={require('../assets/images/padlock.png')}/>
                    </View>
                    <TextInput style={styles.textInputField} placeholder='Password' secureTextEntry/>
                  </View>

                  <TouchableOpacity style={styles.loginBtn}>
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
})