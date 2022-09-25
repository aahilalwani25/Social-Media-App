import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../MVC/View/User/Register and Login/LoginScreen";
import SignUpScreen from "../../MVC/View/User/Register and Login/SignUpScreen";
import StartingScreen from "../../MVC/View/StartingScreen";
import Dashboard from "../../MVC/View/User/Dashboard";



const Stack= createStackNavigator();

export default function UserScreenStack(){

    return(

        <NavigationContainer>
            <Stack.Navigator initialRouteName="SastaEntertainmentApplication">

                <Stack.Screen
                component={StartingScreen}
                name='SastaEntertainmentApplication'
                options={
                    {
                        headerTitle:'Sasta Entertainment Application',
                        headerBackTitleVisible:true,
                        headerBackgroundContainerStyle:{
                            borderWidth:2,
                            borderColor:'black',
                            backgroundColor:'white',
                            borderRadius:10,
                        }
                        
                    }
                    
                }
                />
                <Stack.Screen 
                component={SignUpScreen}
                name='SignUp'
                options={
                    {
                        headerTitle:'Sign Up',
                        headerBackTitleVisible:true,
                        headerBackgroundContainerStyle:{
                            borderWidth:2,
                            borderColor:'black',
                            backgroundColor:'white',
                            borderRadius:10,
                        }
                        
                        
                    }
                    
                }
                />

                <Stack.Screen 
                component={LoginScreen}
                name='Login'
                options={
                    {
                        headerTitle:'Login',
                        headerBackTitleVisible:true,
                        headerBackgroundContainerStyle:{
                            borderWidth:2,
                            borderColor:'black',
                            backgroundColor:'white',
                            borderRadius:10,
                        }
                        
                    }
                    
                }
                />

                <Stack.Screen 
                component={Dashboard}
                name='Dashboard'
                options={{
                    headerShown:false,
                }}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}