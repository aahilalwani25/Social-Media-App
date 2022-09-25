const mysql = require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'aahil',
    database:'sasta_entertainment_app'
});

module.exports={connection}
