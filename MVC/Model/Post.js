export class Post{

    constructor(){
        this.audience=null;
        this.post_description = null;
        this.post_picture = null;
        this.post_video = null;
        this.likes = null;
        this.location = null;
    }

    setAudience=(audience)=>this.audience=audience;
    setDescription=(description)=>this.post_description=description;
    setPic=(pic)=>this.post_picture=pic;
    setVideo=(video)=>this.post_video=video;
    setLikes=(like)=>this.likes=like;
    setLocation=(loc)=>this.location=loc;
    
    getDescription=()=>this.post_description;
    getPic=()=>this.post_picture;
    getVideo=()=>this.post_video;
    getLikes=()=>this.likes;
    getLocation=()=>this.location;
    getAudience=()=>this.audience;

}