const bodyParser = require("body-parser");
const express = require("express");



const app = express()


// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json({extended:false}))

// app.get("/:id",(req,res)=>{
//     console.log(req.params)
//     res.status(404).send("not found")   
// })


app.use(express.static(__dirname + "/public"))



app.listen(3001)