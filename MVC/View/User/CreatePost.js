import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../../../StyleSheet";
import iconSet from "@expo/vector-icons/build/Fontisto";
import { PostController } from "../../Controller/PostController";


var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = date.getFullYear();

let today = dd + '/' + mm + '/' + yyyy;
let myTime = date.getHours()+':'+date.getMinutes()+':'+ date.getSeconds();


const UserPictureImage= React.forwardRef((image, ref)=>{
    
    if(image!=null){
        return(
            <Image source={require('../../../assets/default-user-image.png')} 
                style={{borderColor:'black', borderWidth:2, borderRadius:50, height:50, width:50
                }}/>
        );
    }else{
        return(
            <Image source={require('../../../assets/default-user-image.png')} 
                style={{borderColor:'black', borderWidth:2, borderRadius:50, height:50, width:50
                }}/>
        );
    }
    
})

const PostPictureImage= React.forwardRef((props, ref)=>{
    

    const [show,setShow]=useState(null);
    const [img, setImg] =useState(null);

    useImperativeHandle(ref,()=>({
        openImage:()=>setShow(true),
        closeImage:()=>setShow(false),
        image:(image)=>setImg(image),
    }))

    if(show==null){
        return;
    }else if(!show){
        return(
            <Image source={require('../../../assets/default-user-image.png')} 
                style={{borderColor:'black', borderWidth:2, borderRadius:50, height:50, width:50
                }}/>
        );
    }else{
        return(
            <Image source={{uri:img}} 
                style={{borderColor:'black', borderWidth:2, height:100, width:100
                }}/>
        );
    }
    
})

function CreatePostLayout({props}){

    let postController=new PostController();
    const [curr_date, setDate]=useState(today);
    const [curr_time,setTime]=useState(myTime);
    const [audience,setAudience]=useState(null);
    const [u_id, setId]=useState(null);
    const [post_description,setDescription]=useState(null);
    const [u_profile_pic, setUserImage]=useState(null);
    const [u_name,setUsername]=useState('Username');
    const [post_picture, setPostImage]=useState(null);
    const [location, setLocation]=useState(null);
    //making references
    const postImageRef=useRef();

    useEffect(()=>{
        AsyncStorage.getItem('id')
        .then(id=>{
            if(id){
                setId(id);
                getIdAndUsername(id);
            }
        })
    },[])

    const getIdAndUsername=(u)=>{
        postController.fetchUsernameAndImage(u)
        .then(res=>res.user_name)
        .then((data)=>{
            console.log(data);
            setUsername(data);
        })
    }


    return(
            <View style={{flexDirection:'column', borderColor:'black', borderWidth:2, borderRadius:20, alignItems:'flex-start'}}>

                <View style={{flexDirection:'row', margin:5}}>
                    {/*User Image*/}
                    <UserPictureImage ref={postImageRef}
                    />
                    
                    {/* User Info*/}
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize:20, marginLeft:7}}>{u_name}</Text>
                        <View style={{flexDirection:'row', margin:5}}>
                            <Text style={{paddingRight:10}}>{curr_date}</Text>
                            <Text style={{paddingRight:10}}>{curr_time}</Text>
                        </View>
                    </View>

                </View>

                <View style={[styles.pickerBorderStyling,{width:'50%'}]} >
                    <Picker
                    selectedValue={audience}
                    onValueChange={(itemValue)=>setAudience(itemValue)}
                    collapsable={true}>
                        <Picker.Item value={0} label='Select Audience' style={{color:'grey'}} enabled={false}/>
                        <Picker.Item value={1} label='Private'/>
                        <Picker.Item value={2} label='Public'/>
                        <Picker.Item value={3} label='Friends'/>
                    </Picker>

                </View>

                <PostPictureImage ref={postImageRef} />

                
                <View style={[styles.inputBorderStyling, {width:'90%', justifyContent:'center'}]}>
                    <TextInput multiline={true}
                    placeholder='Write description'
                    onChangeText={text=>setDescription(text)}/>
                </View>

                <View style={[styles.row]}>
                    <iconSet.Button name="picture" iconStyle={{justifyContent:'center', backgroundColor:'black'}}
                    style={{backgroundColor:'black'}}
                    onPress={()=>{
                        postController.openGallery().then(res=>res.uri)
                        .then((data)=>{
                            if(data){
                                //console.log(data);
                                setPostImage(data);
                                postImageRef.current.image(post_picture);
                                postImageRef.current.openImage()
                            }else{
                                postImageRef.current.closeImage();
                            }
                            
                        }).catch((err)=>console.log(err));
                    }}/>

                    <iconSet.Button name="camera" iconStyle={{justifyContent:'center', backgroundColor:'black'}}
                    style={{backgroundColor:'black'}}
                    onPress={()=>{
                        postController.openCamera().then(res=>res.uri)
                        .then((data)=>{
                            if(data){
                                //console.log(data);
                                setPostImage(data);
                                postImageRef.current.image(post_picture);
                                postImageRef.current.openImage();
                            }else{
                                postImageRef.current.closeImage();
                            }
                            
                        }).catch((err)=>console.log(err));
                    }}
                    />

                    <iconSet.Button
                    onPress={()=>props.navigation.navigate('AddLocation')}
                     name="map-marker-alt" iconStyle={{justifyContent:'center', backgroundColor:'black'}}
                    style={{backgroundColor:'black'}}/>
                </View>

                <View style={[styles.inputBorderStyling, {backgroundColor:'blue', alignItems:'center'}]}>
                    <TouchableOpacity
                    onPress={postController.createPost.bind(this)}
                    >
                        <Text style={[{color:'white'}, styles.buttonTextSize]}>Create Post</Text>
                    </TouchableOpacity>
                </View>
        </View>
        );
}

export default class CreatePost extends React.Component{


    render(){
        return(
            <CreatePostLayout props={this.props}/>
        )
    }
}