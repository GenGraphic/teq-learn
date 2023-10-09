import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import React, {useState} from 'react';
import SideMenu from '../comp/SideMenu';
import Header from '../comp/Header';
import { LinearGradient } from 'expo-linear-gradient';

const Contact = () => {
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
                  <Image style={styles.emailIcon} source={require('../assets/images/mail.png')}/>
                </View>

                <Text style={styles.title}>Send us an E-mail</Text>

                <TextInput style={styles.textInput} placeholder='Your name'/>
                <TextInput style={styles.textInput} placeholder='E-mail Adress'/>
                <TextInput editable multiline style={styles.textInputMessage} placeholder='Your message...' textAlignVertical='top'/>

                <TouchableOpacity style={styles.sendBtn}>
                  <Text style={styles.sendBtnText}>SEND E-MAIL</Text>
                </TouchableOpacity>
              </View >
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  )
}

export default Contact

const styles = StyleSheet.create({
  bkg: {
    flex: 1,
  },
  safeView: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-between',
    paddingTop: 50,
  },
  whiteFilter: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },  
  formCont: {
    flex: 1,
    justifyContent: 'center'
  },
  form: {
    backgroundColor: 'rgba(219, 219, 219, 0.5)',
    width: '100%',
    height: '80%',
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
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20
  },
  textInput: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderBottomColor: 'rgba(0, 0, 0, 0.7)',
    borderBottomWidth: 1,
    minHeight: 40,
    marginBottom: 20
  },
  textInputMessage: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderColor: 'rgba(0, 0, 0, 0.7)',
    borderWidth: 1,
    flex: 1,
    marginBottom: 20,
    minHeight: 40,
  },
  sendBtn: {
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
  sendBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14
  },
})