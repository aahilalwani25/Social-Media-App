import React from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "../../../StyleSheet";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";


const {width,height}=Dimensions.get('screen');

function Map(){
    return(
        <View>

            <GooglePlacesAutocomplete
                query={{
                    key:'API_KEY',
                    language:'en'
                }}
                
                isRowScrollable={true}
                placeholder={'Search Place'}
                fetchDetails={true}
                onPress={(data, detail)=>{
                    console.log(detail)
                }}
                styles={{
                    container:{
                        flex:1
                    },
                    textInput:{
                        width:'90%',
                        height:50,
                        borderRadius:20
                    },
                    textInputContainer:{
                        borderColor:'grey',
                        borderWidth:2,
                        width:width,
                        height:100,
                        paddingTop:50,
                        borderRadius:20
                    },
                    listView:{
                        padding:10,
                    },
                    row: {
                        backgroundColor: '#FFFFFF',
                        padding: 13,
                        height: 44,
                        flexDirection: 'row',
                    },
                    separator: {
                        height: 0.5,
                        backgroundColor: '#c8c7cc',
                    },
                    loader: {
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        height: 20,
                    },
                }}
                
                />
        
            <MapView
            style={{height:100, width:width, top:300}}
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
            <SafeAreaView style={[styles.container]}>
                <View>
                    <Map/>
                </View>
            </SafeAreaView>
            
        );
    }
}