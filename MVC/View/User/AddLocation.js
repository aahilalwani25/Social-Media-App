import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import { styles } from "../../../StyleSheet";

function Map(){
    return(
        
            <MapView
            style={{height:'100%', width:'100%'}}
            mapType='satellite'
            initialRegion={{
                latitude:30.3753,
                longitude:69.3451,
            }}
            provider='google'
            >

            </MapView>
        
    );
}

export default class Location extends React.Component{
    render(){

        return(
            <View style={[styles.container]}>
                <Map/>
            </View>
            
        );
    }
}