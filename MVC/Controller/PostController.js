import axios from "axios";
import * as ImagePicker from 'expo-image-picker';
import { Post } from "../Model/Post";

export class PostController{


    //fetch post here
    async getUserPost(user_id){
        const fetchPosts= await axios.get(`http://192.168.2.106:3000/api/userpost/${user_id}`);
        //returns json data, so use .json() in ViewPost Boundary Class
        return fetchPosts;
    }

    async openGallery(){
        
        //returns object
        let result=await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            //allowsEditing: true,
            allowsMultipleSelection:true,
            aspect: [4, 3],
            quality: 1,
            });
        console.log(result);
        //if pic not selected, return uri
        if(!result.cancelled) return result;
    }

    async openCamera(){
        let result=await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if(!result.cancelled) return result;

    }

    //create user post here
    async createPost(user_id, audience, post_description, post_picture, post_video, location){

        let post=new Post();
        post.setDescription(post_description);
        post.setPic(post_picture);
        post.setLocation(location);
        post.setAudience(audience);
        post.setVideo(post_video);


        const result= await axios.get(`http://192.168.2.106:3000/api/post/${user_id}/${post.getAudience()}/${post.getDescription()}/${post.getPic()}/${post.getVideo()}/${post.getLocation()}`);
        const res=result.data;

        if(res){
            return true;
        }
        return false;
    }



    //fetch username and image
    async fetchUsernameAndImage(id){
        const username_and_image_fetch= await axios.get(`http://192.168.2.106:3000/api/getUserImageAndUsername/${id}`);
        const res= username_and_image_fetch.data;
        const myobj={
                user_name:null, user_img:null
            };
        if(res){
            res.forEach(obj => {
                for(const key in obj){
                    if(key==='u_profile_pic') myobj.user_img= obj[key];
                    if(key==='u_name') myobj.user_name= obj[key];
                }
            });
            return myobj;
        }
    }
}