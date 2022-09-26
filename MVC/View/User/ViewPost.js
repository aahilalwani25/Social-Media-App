import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, FlatList } from "react-native";
import { PostController } from "../../Controller/PostController";
import PostLayout from "./PostLayout";

export  class Home extends React.Component{

    state={
        u_name:null, 
        u_profile_pic:null, 
        post_description:null, 
        posted_id:null, 
        post_picture:null, 
        post_video:null, 
        curr_date:null, 
        curr_time:null, 
        likes:null, 
        location:null,
        audience:null,
    }

    postArray=[];

    componentDidMount(){
        //get Posts
        let postController=new PostController();
        AsyncStorage.getItem('id')
        .then(value=>{
            if(value!=null){

                postController.getUserPost(value)
                .then(res=>res.data)
                .then(val=>{
                    val.forEach(obj => {
                        for(const key in obj){
                            if(Object.keys(this.state)===key){ //OR this.state[key]!=null
                                this.setState({key: obj[key]});
                            }
                        }
                    });
                }).catch(err=>console.log(err));
                this.postArray.push(this.state);
            }
        })
        
        
    }
    render(){
        return(
            <View>
                <FlatList
                data={[1,2,3,4]}
                renderItem={(item)=><PostLayout/>}
                />
            </View>
        );
    }
}