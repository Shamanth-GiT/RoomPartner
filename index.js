const express = require("express");
const bodyParser = require("body-parser");
const User = require("./users");
const path = require("path");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "/client")));
app.use(bodyParser.urlencoded({extended: false}));

// Routes

app.route("/")
    .get((req, res) => {
        res.sendFile(path.join(__dirname, 'client/views/register.html'));
    })
    .post((req, res) => {
        let obj = req.body;
        
        bcrypt.hash(obj['password'], saltRounds, (err, hash) => {
            const user = new User({
                first_name: obj['first-name'],
                last_name: obj['last-name'],
                email: obj['email'],
                password: hash
            });

            user.save(err => {
                if(err) console.log(err);
                else res.sendFile(path.join(__dirname, 'client/views/home.html'));
            });
        });
     });

app.route("/login")
    .get((req, res)=>{
        res.sendFile(path.join(__dirname, 'client/views/login.html'));
    })
    .post((req, res)=>{
        let obj = req.body;

        const username = obj['username'];
        const password = obj['password'];

        User.findOne({email: username}, 
            (err, foundUser) => {
                if(err) console.log(err);
                else if(foundUser){
                    bcrypt.compare(password, foundUser['password'], (error, result) => {
                        if(result) res.sendFile(path.join(__dirname, 'client/views/home.html'));
                    });
                } 
            });
    });

app.listen(PORT, () => console.log("Server started on port 3000"));