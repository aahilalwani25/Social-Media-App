import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


class LoginState{

    constructor(){
        this.checkUsername=false;
        this.checkPassword=false;
        this.id=null;
    }

    setUsernameState=(usernameState)=>this.checkUsername=usernameState;
    setPasswordState=(passState)=>this.checkPassword=passState;
    setId=(id)=>this.id=id;

    getUsernameState=()=>this.checkUsername;
    getPasswordState=()=>this.checkPassword;
    getId=()=>this.id;

}


export class LoginController{
    
    constructor(){
        this.state=new LoginState();
    }

    setCredentials=(username, password)=>this.getLogin(username,password);


    async getLogin(username, password){
        const getUser= await axios.get(`http://192.168.2.106:3000/api/user/${username}/${password}`);
        const res= getUser.data; //returns an array

        console.log(res)
        if(res) {
            
            //if we get empty array [] then return false
            if(!Object.keys(res).length){
                return false;
            }else{ //else do some additional part

                //used for making case sensitive in url
                res.forEach(obj => {
                    for(const key in obj){
                        if(key==='u_id') this.state.setId(obj[key]);
                        if(key==='u_name' && obj[key]===username) this.state.setUsernameState(true);
                        if(key==='password' && obj[key]===password) this.state.setPasswordState(true);
                        
                    }
                });

                console.log(this.state.getUsernameState() && this.state.getPasswordState())
                if(this.state.getUsernameState() && this.state.getPasswordState()) {
                    console.log(this.state.getId());

                    //used to manage login state even if user closes the application
                    AsyncStorage.multiSet([['username',this.state.getUsernameState().toString()],
                    ['id',this.state.getId().toString()]]);


                    return true
                }
                return false;
            }
            
        }
    }
}
