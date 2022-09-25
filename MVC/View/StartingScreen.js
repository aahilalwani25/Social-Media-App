import React, {Component, useEffect} from "react";
import { View, Text, Dimensions, TouchableOpacity, BackHandler } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { styles } from "../../StyleSheet";

const {height}= Dimensions.get('screen');


function BottomSheet({props}){

    const trY=useSharedValue(0);

    useEffect(()=>{
        trY.value= withSpring(-height/3)
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
            <Animated.View style={[styles.headerStyle]}>
                <Text style={[styles.headerTextStyle]}>PLEASE SELECT EITHER TO SIGN UP OR LOGIN</Text>
            </Animated.View>

            <Animated.View style={[styles.row, {justifyContent:'center'}]}>
                <TouchableOpacity style={{backgroundColor:'red', borderRadius:20, margin:'10%'}}
                onPress={()=>{props.navigation.navigate('SignUp')}}>
                    <Text style={[{color:'white', padding:20}, styles.buttonTextSize]}>SIGN UP</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:'blue', borderRadius:20, margin:'10%'}}
                onPress={()=>{props.navigation.navigate('Login')}}>
                    <Text style={[{color:'white', padding:20}, styles.buttonTextSize]}>LOGIN</Text>
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    );
}


export default class StartingScreen extends Component{

    constructor(){
        super();
    }

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
