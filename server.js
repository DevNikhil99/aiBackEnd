// const fs =require("fs");

// fs.readFile("./first.txt",(err,data)=>{
//     if(err){
//         console.log("erorererererer")
//     }

//     console.log(data.toString())
// })

// fs.writeFile("bye.txt","sad to see you go",err=>{if(err){console.log(err)}})
// fs.unlink("bye.txt",err=>{if(err){console.log(err)}} )




// fs.appendFile("./first.txt", " we are having fun while learning", err=>{if(err){console.log(err)}}) 

const expres = require("express");
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors")

const app = expres();

app.use(bodyParser.json())
app.use(cors())

const database = {
    users: [
        {
            id: "123",
            name: "nikhil",
            email: "ns@gmail.com",
            password: "nik",
            entries: 0,
            joined: new Date()
        },
        {
            id: "234",
            name: "nik",
            email: "nik@gmail.com",
            entries: 0,
            joined: new Date()
        }
    ],

    login:[
        {
            id:"123",
            has:"",
            email:"ns@gmail.com"
        }
    ]
}

app.get("/", (req, res) => {

    res.send(database.users)
})

app.post("/signin", (req, res) => {
    database.users.forEach(item => {
        if (req.body.email === item.email && req.body.password === item.password)
            return res.send("successfully signin")
        else {
            res.status(404).send("error occured")
        }
    })
})


app.post("/register", (req, res) => {
    const { email, name, password } = req.body
    database.users.push({
        id: "345",
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })

    res.json(database.users[database.users.length - 1])

})

app.get("/profile/:id", (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true
            return res.json(user)
        }
    })
    if (!found) {
        res.status(404).json("not found")
    }
})

app.put("/image",(req,res)=>{
    const {id} = req.body;
    let found = false;

    database.users.forEach(user=>{
        if(user.id === id){
            found = true
            user.entries++;
           return res.json(user.entries)
        }
    })
    if(!found){
        res.status(404).json("notfound")
    }

})
app.listen(3005 , () => {
    console.log("app is runnig")
})

