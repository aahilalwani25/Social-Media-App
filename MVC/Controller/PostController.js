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
}