import axios from "axios";
import User from "../Model/User";

export class SignUpController{
    

    async getCountries(){
        const countries=await axios.get('http://192.168.2.106:3000/api/country');
        const res=countries.data;
        let countryArray=[];
        res.forEach(obj => {

            //initialize a country object and then insert it in the array
            const countryObject={
                id: null,
                title: null,
                code:null,
            }
            for(const key in obj){
                if(key==='c_id') countryObject.id=obj[key].toString();
                if(key==='c_name') countryObject.title=obj[key];
                if(key==='c_code') countryObject.code=obj[key];
            }
            countryArray.push(countryObject);
        });
        return countryArray;
    }

    async getGender(){
        const gender=await axios.get('http://192.168.2.106:3000/api/gender');
        const res=gender.data;
        let genderArray=[];

        res.forEach(obj => {
            //initialize a country object and then insert it in the array
            const genderObject={
                id: null,
                title: null,
            }
            for(const key in obj){
                if(key==='g_id') genderObject.id= obj[key].toString();
                if(key==='g_name') genderObject.title= obj[key];
            }
            genderArray.push(genderObject);
        });
        
        return genderArray;
    }


    async setSignup(username, fullname, country, gender, phone, email, pic=null, activate, password){

        let user= new User(username,fullname,country,gender,phone,email,pic,activate,password);
        const getResponse= await axios.get(`http://192.168.2.106:3000/api/user/${user.getUsername()}/${user.getFullname()}/${user.getCountry()}/${user.getGender()}/${user.getPhone()}/${user.getEmail()}/${user.getPic()}/${user.getPassword()}/${user.getActivate()}`);
        const res= getResponse.data; //returns an array

        console.log(res);
        if(res) {

            //returns boolean value, so use .valueOf() in .then() method
            return true;
        }

        //returns boolean value, so use .valueOf() in .then() method
        return false;
    }
}


