import React, {Component, useEffect, useState} from "react";
import { View, Text, Dimensions, TouchableOpacity, TextInput, Platform, ScrollView, Alert} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { styles } from "../../../../StyleSheet";
import { getCountry, SignUp } from "../../../Controller/SignUpController";
import Checkbox from "expo-checkbox";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";


const {height}= Dimensions.get('screen');


function BottomSheet(){

    const trY=useSharedValue(0);

    useEffect(()=>{
        trY.value= withSpring(-height/1.2);
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
            
            </ScrollView>
        </Animated.View>
    );
}


export default class SignUpScreen extends Component{
    

    render(){
        return(
            <View style={styles.container}>

                {/* Bottom Sheet Container */}
                <BottomSheet/>
            </View>
        );
    }
}
