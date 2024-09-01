const express = require("express");

const app = express();



app.get("/",(req, res)=>{
    return res.status(200).json({"message" : "Welcome to my first deployment"})
})

app.get("/get-admin", (req, res)=>{

    const adminInfo = {
        name : "Aiwan Maswood",
        skill : "Nodejs, express, Postgres, Aws, Redis, mysql, mongodb, github",
        Location : "New Delhi Indi"
    }

    return res.status(200).json({ "message" : "below is your response" , data  :  adminInfo })
})

app.listen(8000, ()=>{
    console.log("server running on port 8000")
})