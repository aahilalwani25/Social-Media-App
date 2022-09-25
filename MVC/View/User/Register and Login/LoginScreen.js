import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {Component, useEffect, useState} from "react";
import { View, Text, Dimensions, TouchableOpacity, TextInput, ScrollView, Alert } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { styles } from "../../../../StyleSheet";
import {LoginController} from "../../../Controller/LoginController";


const {height}= Dimensions.get('screen');


function BottomSheet({props}){

    const trY=useSharedValue(0);
    const [username,setUsername]= useState(null)
    const [password,setPass]= useState(null)

    useEffect(()=>{
        trY.value= withSpring(-height/2)
    },[])
    

    const animationEffect= useAnimatedStyle(()=>{
            return{
                transform:[{
                    translateY:trY.value
                }]
            }
        });
    
    return(
        <Animated.View style={[styles.bottomSheetStyle, animationEffect]}>

            <ScrollView>
                <Animated.View style={[styles.headerStyle]}>
                    <Text style={[styles.headerTextStyle]}>SIGN IN</Text>
                </Animated.View>

                <View style={[styles.row, {justifyContent:'center', flexDirection:'column'}]}>
                    
                    <View>
                        <View style={[styles.inputBorderStyling, styles.row]}>
                            <TextInput placeholder="Enter Username" keyboardType='default' textContentType='username' secureTextEntry={false} onChangeText={(text)=>setUsername(text)}/>
                        </View>
                        <View style={[styles.inputBorderStyling, styles.row]}>
                            <TextInput placeholder="Enter Password" keyboardType='default' textContentType='password' secureTextEntry={true} onChangeText={(text)=>setPass(text)}/>
                        </View>
                    </View>


                    <View>
                        <TouchableOpacity style={{backgroundColor:'blue', borderRadius:20, margin:'10%'}}
                        onPress={
                            ()=>{
                                console.log(username,password);
                                let loginController=new LoginController();
                                loginController.setCredentials(username,password)
                                .then(res=>res.valueOf()).then(
                                    (data)=>{
                                        if(data){
                                            Alert.alert('Login Successful');
                                            props.navigation.navigate('Dashboard');
                                        }else{
                                            Alert.alert('Wrong Username or password');
                                        }
                                    }
                                );
                                
                            }}>
                            <Text style={[{color:'white', padding:20, textAlign:'center'}, styles.buttonTextSize]}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </ScrollView>
        </Animated.View>
    );
}


export default class LoginScreen extends Component{
    

    componentDidMount(){
        this.isUserLoggedIn();
    }

    isUserLoggedIn(){

        try{
            AsyncStorage.getItem('id')
            .then(value=>{
                if(value!=null){
                    this.props.navigation.navigate('Dashboard');
                    console.log(value)
                }
            })
            
        }catch{
            this.props.navigation.goBack();
        }
    }
    render(){
        return(
            <View style={styles.container}>

                {/* Bottom Sheet Container */}
                <BottomSheet props={this.props}/>
            </View>
        );
    }
}
