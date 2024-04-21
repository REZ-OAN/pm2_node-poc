const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send({
        message:"Hello Seekers!!!",
    })
});


app.listen(3000,()=>{
    console.log("Server is listening to port 3000!!");
})