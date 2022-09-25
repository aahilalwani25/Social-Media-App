export default class User{

    constructor(username, fullname, country, gender, phone, email, pic=null, activate, password){
        this.username=username;
        this.fullname=fullname;
        this.country=country;
        this.gender=gender;
        this.phone=phone;
        this.pic=pic;
        this.email=email;
        this.activate=activate;
        this.pass=password;
    }

    getUsername=()=>this.username;
    getFullname=()=>this.fullname;
    getCountry=()=>this.country;
    getGender=()=>this.gender;
    getPhone=()=>this.phone;
    getEmail=()=>this.email;
    getPic=()=>this.pic;
    getActivate=()=>this.activate;
    getPassword=()=>this.pass;
}