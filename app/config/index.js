const mysql = require('mysql');
const dotenv = require('dotenv').config();

const connection = mysql.createConnection({
    HOST: process.env.db_host,
    USER: process.env.db_user,
    PASSWORD : process.env.db_pass,
    PORT: process.env.db_port,
    DATABASE: process.env.db_name,
});


module.exports = connection;
