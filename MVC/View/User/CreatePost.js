import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../../StyleSheet";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

export default class CreatePost extends React.Component{

    render(){
        return(
            <View style={{flexDirection:'row', margin:5}}>
                {/*User Image*/}
                <Image style={{alignItems:'center', borderColor:'black', borderWidth:2, borderRadius:50}}/>
                
                {/* User Info*/}
                <View style={{flexDirection:'column'}}>
                    <Text></Text>
                    <View style={{flexDirection:'row', margin:5}}>
                        <Text style={{paddingRight:10}}>{today}</Text>
                        <Text style={{paddingRight:10}}>{new Date().getTime()}</Text>
                        
                    </View>
                </View>

            </View>
        )
    }
}