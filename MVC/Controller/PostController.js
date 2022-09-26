import axios from "axios";

export class PostController{


    //fetch post here
    async getUserPost(user_id){
        const fetchPosts= await axios.get(`http://192.168.2.106:3000/api/userpost/${user_id}`);
        //returns json data, so use .json() in ViewPost Boundary Class
        return fetchPosts;
    }


    //create user post here
    createPost(){

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