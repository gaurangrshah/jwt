const express = require('express'); 
const app = express(); 
const cors = require("cors"); 



app.use(express.json()) //allows us to access data from client side 
app.use(cors())

//Routes 
app.use("/auth",require("./routes/jwtAuth")); 


//dashboard route
app.use("/dashboard", require("./routes/dashboard"));


app.listen(5000, () => {
    console.log("Server running on port 5000"); 
})