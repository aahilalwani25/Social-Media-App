import React, {Component, forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import { View, Text, Dimensions, TouchableOpacity, TextInput, Platform, ScrollView, Alert} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { styles } from "../../../../StyleSheet";
import { SignUpController } from "../../../Controller/SignUpController";
import Checkbox from "expo-checkbox";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";



const {height}= Dimensions.get('screen');


function BottomSheet({props}){

    let signUpController=new SignUpController();

    const trY=useSharedValue(0);

    //user states
    const [country, setCountry]=useState('');
    const [code, selectCode]=useState('');
    const [username, setUsername]=useState(null);
    const [fullname, setFullname]=useState(null);
    const [gender, setGender]=useState(1);
    const [pic, setPic]=useState(null);
    const [phone, setPhone]=useState(0);
    const [activate, setActivate]=useState(2);
    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const passRef= useRef();
    
    useEffect(()=>{
        trY.value= withSpring(-height/1.2);
        signUpController.getCountries().then(res=>setCountry(res))
        signUpController.getGender().then(res=>console.log(res))
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

                <View style={{margin:10}}>
                    <Animated.View style={[styles.headerStyle]}>
                        <Text style={[styles.headerTextStyle]}>SIGN UP</Text>
                    </Animated.View>

                    <View >
                        <AutocompleteDropdown
                        inputHeight={50}
                        inputContainerStyle={[styles.inputBorderStyling]}
                        onSelectItem={(item)=>{
                            for(const key in item){
                                if(key==='id') setCountry(item[key])
                                if(key==='code') selectCode(item[key].toString());
                            }
                        }}
                        showChevron={true}
                        closeOnBlur={false}
                        dataSet={country}
                        useFilter={true}
                        textInputProps={{
                            placeholder:'Select Country'
                        }}
                        emptyResultText={'No Country Found'}
                        clearOnFocus={false}
                        />
                    </View>

                    <ScrollView>
                        <View style={[styles.inputBorderStyling]}>
                            <TextInput placeholder="Enter Username" keyboardType='default' onChangeText={(text)=>setUsername(text)}/>
                        </View>

                        <View style={[styles.inputBorderStyling]}>
                            <TextInput placeholder="Enter Full Name" keyboardType='default' onChangeText={(text)=>setFullname(text)}/>
                        </View>

                        

                        <View style={[styles.row,{flex:1}]}>
                            <TextInput style={[styles.inputBorderStyling, {flex:0.1}]} editable={false} placeholderTextColor={'blue'} placeholder={'+ '+code}/>
                            <TextInput style={[styles.inputBorderStyling,{flex:0.9}]} placeholder="Enter Phone" keyboardType='phone-pad' onChangeText={(text)=>setPhone(parseInt(text))}/>
                        </View>
                        <View style={[styles.inputBorderStyling]}>
                            <TextInput placeholder="Enter Email" keyboardType='email-address' onChangeText={(text)=>setEmail(text)}/>
                        </View>

                        <View>
                            <Picker
                            onValueChange={(genderValue)=>{
                                setGender(genderValue)
                            }}
                            placeholder={'Select Gender'}
                            selectedValue={gender}
                            >
                                <Picker.Item label="Male" value={1}/>
                                <Picker.Item label="Female" value={2}/>
                            </Picker>
                        </View>

                        <View style={[styles.inputBorderStyling]}>
                            <TextInput placeholder="Enter Password" secureTextEntry={true} onChangeText={(text)=>setPassword(text)}/>
                        </View>

                        <View>
                            <TextInput style={[styles.inputBorderStyling]} placeholder="Enter Confirm Password" secureTextEntry={true} onChangeText={(text)=>{
                                if(text!==password){
                                    passRef.current.invisible();
                                }else{
                                    passRef.current.visible();
                                }
                                
                            }}/>

                            <PasswordIncorrectMessage ref={passRef} />
                        </View>

                        <View style={[styles.row, {alignContent:'space-around'}]}>
                            <Checkbox value={activate===2?false:true} onValueChange={()=>{
                                if(activate===2) setActivate(1); else setActivate(2); 
                            }}/>
                            <Text>By ticking this, you agree the policy of this app</Text>
                        </View>

                        <View style={[styles.inputBorderStyling, {backgroundColor:'blue', alignItems:'center'}]}>
                            <TouchableOpacity  disabled={activate===2?true:false} onPress={()=>{
                                //destructuring
                                signUpController.setSignup(username, fullname, country, gender, 
                                    phone, email, pic, activate, password)
                                .then(res=>res.valueOf())
                                .then(confirm=>{
                                    if(confirm){
                                        Alert.alert('Successfully Signed Up!!');
                                        props.navigation.navigate('Login')
                                    }else{
                                        Alert.alert('Not Signed Up!!');
                                    }
                                }).catch(err=>console.log(err))
                            }}>
                                <Text style={[{color:'white'}, styles.buttonTextSize]}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                
                

                
            </Animated.View>
       
        
    );
}


export default class SignUpScreen extends Component{
    

    render(){
        return(
            <View style={styles.container}>
                {/* Bottom Sheet Container */}
                <BottomSheet props={this.props}/>
            </View>
        );
    }
}


const PasswordIncorrectMessage=React.forwardRef((props,ref)=>{

    const [visible, setVisible]= useState(null);

    useImperativeHandle(ref,()=>({
        visible:()=>setVisible(true),
        invisible:()=>setVisible(false)
    }))

    if(visible===null){
        return;
    }else if(!visible){
        return(
            <Text ref={ref} style={{color:'red'}}>Password does not match</Text>
        )
    }else{
        return(
            <Text style={{color:'green'}}>Password Matched!!</Text>
        );
    }
})

