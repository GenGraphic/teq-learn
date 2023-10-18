import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Animated } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SideMenu = ({ toggler }) => {
    const slideToLeft = useRef(new Animated.Value(-300)).current; // Initial Value
    const navigator = useNavigation();
    const [isOn, setIsOn] = useState(false);
    const [adminIsOn, setAdminIsOn] = useState(false);

    useEffect(() => {
        userIsOn()
    }, []);

    //animation to Slide in
    useEffect(() => {
        Animated.timing(slideToLeft, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false, // Change this to false for 'right' property
        }).start();
    }, [slideToLeft]);

    //animation to slide out
    const closeMenu = () => {
        Animated.timing(slideToLeft, {
            toValue: -300,
            duration: 300,
            useNativeDriver: false,
        }).start();

        //wait for the animation to finish before closing the Menu
        setTimeout(() => {
            toggler(false)
        }, 300)
    }

    //Check if the user is signed in or not
    const userIsOn = async () => {
        //check if the token is admin, that means admin is online
        if (await AsyncStorage.getItem('userToken') === 'admin' ) {
            setAdminIsOn(true);
        }

        //check id any user is online
        if(await AsyncStorage.getItem('userToken')) {
            setIsOn(true);
        } else {
            setIsOn(false);
            setAdminIsOn(false);
        }
    }
 
    const signOutUser = async () => {
        setIsOn(false);
        setAdminIsOn(false);

        await AsyncStorage.removeItem('userToken');

        navigator.navigate('LogIn');
    }

    return (
        <View style={styles.body}>
            <Animated.View style={[styles.animatedContainer, { right: slideToLeft }]}>
                <LinearGradient style={styles.cont} colors={['rgba(0,0,0,0.6)', 'rgba(144, 144, 152, 0.6)']} start={{ x: 0.1, y: 0.2 }} end={{ x: 0.6, y: 0.7 }}>
                    <SafeAreaView style={styles.subCont}>
                        <View>
                            <TouchableOpacity onPress={closeMenu}>
                                <Image style={styles.closeIcon} source={require('../assets/images/close-button.png')} />
                            </TouchableOpacity>
                            <Text style={styles.title}>ergonTEQ</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.link} onPress={() => {
                                toggler(false);
                                navigator.navigate('Home');
                            }}
                            >
                                <Image style={styles.icon} source={require('../assets/images/home.png')}/>
                                <Text style={styles.linkText}>Home</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.link} onPress={() => {
                                toggler(false);
                                navigator.navigate('Services');
                                }}
                            >
                                <Image style={styles.icon} source={require('../assets/images/services.png')}/>
                                <Text style={styles.linkText}>SERVICES</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.link} onPress={() => {
                                toggler(false);
                                navigator.navigate('MyProject');
                                }}
                            >
                                <Image style={styles.icon} source={require('../assets/images/project.png')}/>
                                <Text style={styles.linkText}>MY PROJECT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.link} onPress={() => {
                                toggler(false);
                                navigator.navigate('Learning');
                                }}
                            >
                                <Image style={styles.icon} source={require('../assets/images/brain.png')}/>
                                <Text style={styles.linkText}>LEARNING SYSTEM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.link} onPress={() => {
                                toggler(false);
                                navigator.navigate('Contact');
                                }}
                            >
                                <Image style={styles.icon} source={require('../assets/images/support.png')}/>
                                <Text style={styles.linkText}>CONTACT</Text>
                            </TouchableOpacity>
                            { adminIsOn &&
                                <TouchableOpacity style={styles.link} onPress={() => {
                                    toggler(false);
                                    navigator.navigate('AddUser');
                                    }}
                                >
                                    <Image style={styles.icon} source={require('../assets/images/user.png')}/>
                                    <Text style={styles.linkText}>ADD USER</Text>
                                </TouchableOpacity>
                            }
                            { adminIsOn &&
                                <TouchableOpacity style={styles.link} onPress={() => {
                                    toggler(false);
                                    navigator.navigate('AdminProjects');
                                    }}
                                >
                                    <Image style={styles.icon} source={require('../assets/images/project-admin.png')}/>
                                    <Text style={styles.linkText}>PROJECTS</Text>
                                </TouchableOpacity>
                            }
                        </View>
                        
                        <View>
                            {isOn ? 
                               <TouchableOpacity style={[styles.loginBtn, {backgroundColor: '#d00000'}]} onPress={signOutUser}>
                                    <Text style={styles.loginBtnText}>SIGN OUT</Text>
                                </TouchableOpacity>
                            : 
                                <TouchableOpacity style={styles.loginBtn} onPress={() => {
                                    toggler(false);
                                    navigator.navigate('LogIn');
                                    }}
                                >
                                    <Text style={styles.loginBtnText}>LOGIN</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            </Animated.View>
        </View>
    )
}

export default SideMenu

const styles = StyleSheet.create({
    body: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        elevation: 5,
        alignItems: 'flex-end'
    },
    animatedContainer: {
        position: 'absolute',
        right: 0, // Start off-screen to the right
        height: '100%',
        width: '70%',
    },
    cont: {
        flex: 1,
        padding: 20,
    },
    subCont: {
        flex: 1,
        justifyContent: 'space-between'
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center'
    },
    closeIcon: {
        width: 25,
        height: 25
    },
    loginBtn: {
        backgroundColor: '#464E78',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 20

    },
    loginBtnText: {
        color: '#FFF',
        fontSize: 18,
    },
    icon: {
        width: 25,
        height: 25
    },
    link: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 20
    },
    linkText: {
        color: '#FFF',
        fontSize: 20
    }
})
