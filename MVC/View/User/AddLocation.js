import React from "react";
import { Dimensions, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "../../../StyleSheet";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const {width,height}=Dimensions.get('screen');

function Map(){
    return(
        <View>

            <GooglePlacesAutocomplete
            
                query={{
                    key:'',
                    language:'en'
                }}
                placeholder={'Search Place'}
                styles={{
                    container:{
                        flex:1
                    },
                    textInput:{
                        width:width,
                        height:100,
                        paddingTop:50,
                        borderRadius:20
                    },
                    textInputContainer:{
                        borderColor:'grey',
                        borderWidth:2
                    }
                }}
                />
        
            <MapView
            style={{height:height, width:width, top:100}}
            mapType='satellite'
            initialRegion={{
                latitude:24.8607,
                longitude:67.0011,
                latitudeDelta:0.03,
                longitudeDelta:0.03,
            }}
            provider='google'
            >
                
                <Marker
                coordinate={{
                    latitude:24.8607,
                    longitude:67.0011,
                    latitudeDelta:0.03,
                    longitudeDelta:0.03,
                }}
                title={'Karachi'}
                />
            </MapView>
            
        </View>
        
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