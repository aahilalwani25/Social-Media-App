const express = require('express');
const app=express();
const bodyparser = require('body-parser');
const { connection } = require('../Database/Connection');
const { urlencoded } = require('body-parser');

app.use(bodyparser.json());
app.use(urlencoded({extended:true}));

connection.connect((err)=>{
    if(err) console.log(err);
});

//login
app.get('/api/user/:username/:password', (req,res)=>{
    
    const login=req.params;
    connection.query(`Select * from user where u_name='${login.username}' and password='${login.password}'`,(err, row)=>{
        if(err) console.log(err);
        res.send(row);
    })
});


//sign up
app.get('/api/user/:username/:fullname/:country/:gender/:phone/:email/:picture/:password/:activate',(req,res)=>{

    const user=req.params;
    connection.query(
        `insert into User(u_name,u_country,gender,phone,u_email,u_profile_pic,activate,full_name,password) `+
        `values('${user.username}',${user.country},${user.gender},${user.phone},'${user.email}',${user.picture},${user.activate},'${user.fullname}','${user.password}');`,
        (err, row)=>{
            if(err) console.log(err);
            res.send(row);
        }
    );
})

//get countries
app.get('/api/country',(req,res)=>{
    connection.query(`Select * from country`,(err, row)=>{
        if(err) console.log(err);
        res.send(row);
    })
})

//get gender
app.get('/api/gender',(req,res)=>{
    connection.query(`Select * from Gender`,(err, row)=>{
        if(err) console.log(err);
        res.send(row);
    })
})

//fetch post acc to user id
app.get('/api/userpost/:user_id',(req,res)=>{
    connection.query(`select u_name, u_profile_pic, post_description, posted_id, post_picture, post_video, curr_date, curr_time, likes, location from posted inner join post p, user u where p.post_id=posted.post_id and  posted.user_id=${req.params.user_id};`,(err, row)=>{
        if(err) console.log(err);
        res.send(row);
    })
})

app.get('/api/getUserImageAndUsername/:u_id',(req,res)=>{
    connection.query(`select u_name, u_profile_pic from user where u_id=${parseInt(req.params.u_id)};`,(err, row)=>{
        if(err) console.log(err);
        res.send(row);
    })
})

app.get('/api/post/:user_id/:audience/:post_description/:post_picture/:post_video/:location', (req,res)=>{
    
    const {user_id,audience,post_description,post_picture,post_video,location,}=req.params;
    connection.query(`insert into post(post_description, post_picture, post_video, curr_date, curr_time, likes, audience, location) `+
    `values('${post_description}',`+
    `'${post_picture}',`+
    `'${post_video}',current_date(),current_time(),`+
    `0,${audience},${location});`,(err,row)=>{
        if(err) console.log(err);
        res.send(row);
    });
})

app.listen(3000,()=>{
    console.log('http://localhost:3000/api/user');
})

