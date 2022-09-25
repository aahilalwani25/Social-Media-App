export class Post{

    constructor(){
        this.post_description = null;
        this.post_picture = null;
        this.post_video = null;
        this.curr_date = null;
        this.curr_time = null;
        this.likes = null;
        this.location = null;
    }

    setDescription=(description)=>this.post_description=description;
    setPic=(pic)=>this.post_picture=pic;
    setVideo=(video)=>this.post_video=video;
    setDate=(date)=>this.curr_date=date;
    setTime=(time)=>this.curr_time=time;
    setLikes=(like)=>this.likes=like;
    setLocation=(loc)=>this.location=loc;

    getDescription=()=>this.post_description;
    getPic=()=>this.post_picture;
    getVideo=()=>this.post_video;
    getDate=()=>this.curr_date;
    getTime=()=>this.curr_time;
    getLikes=()=>this.likes;
    getLocation=()=>this.location;

}