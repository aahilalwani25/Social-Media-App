export class Post{

    constructor(){
        this.post_description = null;
        this.post_picture = null;
        this.post_video = null;
        this.likes = null;
        this.location = null;
    }

    setDescription=(description)=>this.post_description=description;
    setPic=async(pic)=>{
        const result= await fetch(pic);
        const res=result.blob();
        this.post_picture=res;
    }
    setVideo=async(video)=>{
        const result= await fetch(pic);
        const res=result.blob();
        this.post_video=res;
    }
    setDate=(date)=>this.curr_date=date;
    setTime=(time)=>this.curr_time=time;
    setLikes=(like)=>this.likes=like;
    setLocation=(loc)=>this.location=loc;
    getDescription=()=>this.post_description;
    getPic=()=>this.post_picture;
    getVideo=()=>this.post_video;
    getLikes=()=>this.likes;
    getLocation=()=>this.location;

}