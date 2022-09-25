import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../../StyleSheet";
const image= require('C:/Users/Dell/React Native Projects/Sasta Entertainment Application/Sasta/assets/favicon.png');

export default function PostLayout({item}){

    // state={
    //     u_name:null, 
    //     u_profile_pic:null, 
    //     post_description:null, 
    //     audience:null,
    //     posted_id:null, 
    //     post_picture:null, 
    //     post_video:null, 
    //     curr_date:null, 
    //     curr_time:null, 
    //     likes:null, 
    //     location:null,
    // }

    if(item!=null){
        return(
            <View style={{flexDirection:'column', borderColor:'black', borderWidth:2, borderRadius:20, alignItems:'flex-start'}}>

            <View style={{flexDirection:'row', margin:5}}>
                {/*User Image*/}
                <Image source={item.u_profile_pic} style={{alignItems:'center', borderColor:'black', borderWidth:2, borderRadius:50}}/>
                
                {/* User Info*/}
                <View style={{flexDirection:'column'}}>
                    <Text>{item.u_name}</Text>
                    <View style={{flexDirection:'row', margin:5}}>
                        <Text style={{paddingRight:10}}>{item.curr_date}</Text>
                        <Text style={{paddingRight:10}}>{item.curr_time}</Text>
                        <Text style={{paddingRight:10}}>{item.location}</Text>
                    </View>
                </View>

            </View>
            
            <View style={{alignItems:'center', justifyContent:'center'}}>
                {/*Post Image*/}
                <Image source={item.post_picture}/>

                <View style={{flexDirection:'row'}}>
                    <View>
                        <TouchableOpacity style={{borderColor:'grey', borderWidth:1, padding:10}}>
                            <Text>{item.likes}</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={{borderColor:'grey', borderWidth:1, padding:10}}>
                            <Text>Comment</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={{borderColor:'grey', borderWidth:1, padding:10}}>
                            <Text>Save</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={{borderColor:'grey', borderWidth:1, padding:10}}>
                            <Text>Report</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            
        </View>
        );
    }
    return(
        
        <View style={{flexDirection:'column', borderColor:'black', borderWidth:2, borderRadius:20, alignItems:'flex-start'}}>

            <View style={{flexDirection:'row', margin:5}}>
                {/*User Image*/}
                <Image source={image} style={{alignItems:'center', borderColor:'black', borderWidth:2, borderRadius:50}}/>
                
                {/* User Info*/}
                <View style={{flexDirection:'column'}}>
                    <Text>Username</Text>
                    <View style={{flexDirection:'row', margin:5}}>
                        <Text style={{paddingRight:10}}>date</Text>
                        <Text style={{paddingRight:10}}>time</Text>
                        <Text style={{paddingRight:10}}>Location</Text>
                    </View>
                </View>

            </View>
            
            <View style={{alignItems:'center', justifyContent:'center'}}>
                {/*Post Image*/}
                <Image source={image}/>

                <View style={{flexDirection:'row'}}>
                    <View>
                        <TouchableOpacity style={{borderColor:'grey', borderWidth:1, padding:10}}>
                            <Text>Like</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={{borderColor:'grey', borderWidth:1, padding:10}}>
                            <Text>Comment</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={{borderColor:'grey', borderWidth:1, padding:10}}>
                            <Text>Save</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={{borderColor:'grey', borderWidth:1, padding:10}}>
                            <Text>Report</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            
        </View>
    );
}