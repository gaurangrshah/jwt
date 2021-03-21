const Pool = require('pg').Pool; 

const pool = new Pool({
    user: "postgres", 
    password: "Iwont4getu!", 
    host: "localhost", 
    port: 5432, 
    database: "jwt_todo"
}); 

module.exports = pool; 