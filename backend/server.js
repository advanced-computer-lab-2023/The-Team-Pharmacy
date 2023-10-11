
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const pharmcistReqRoutes = require('./routes/pharmcistReqRoutes')

const cors = require('cors');
app.use(cors());

//middleware
app.use(express.json())


//routes
app.use( '/api/pharmcistReq',pharmcistReqRoutes)



//connect to db
mongoose.connect("mongodb+srv://TheTeam:AclProj@aclpharmdb.ukxxvcp.mongodb.net/?retryWrites=true")
.then(()=>{
    //listen for req
    app.listen(4000 ,()=>{
        console.log("connect to db & listing to port " , 4000)
})
})
.catch((error)=>{
    console.log(error)
})





// const cors=require("cors");
// const corsOptions ={
//    origin:'*', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

// app.use(cors(corsOptions)) // Use this after the variable declaration