const express = require('express');
const Datastore = require('nedb')
const app = express()
const database = new Datastore('database.db');
const date = new Date();
const port = process.env.PORT;


app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))

app.use(express.static('Website'));
app.use(express.json({limit:'1mb'}));
app.get('/',(req,res)=>{res.sendFile(__dirname + 'W')});

app.get('/users',(req,res)=>{
    database.loadDatabase();
    database.find({},(err,data)=>res.json(data))
})



app.post('/signup',(request,response)=>{
console.log(request.body);
const data = request.body
response.json({status:'Sucess',yourname:data.name,youremail:data.email,yourpass:data.pass,date:date});
database.loadDatabase();
database.insert({Name:data.name,Email:data.email,Pass:data.pass,Date:date});

});

app.post('/login',(req,res)=>{
    let bod = req.body;
    database.loadDatabase();
    database.find({Email:bod.email,Pass:bod.pass},(err,data)=>{
        if(data.length == 0){
            res.send("Sorry.. Details Are Incorrect \nto view all registered email and pass visit  /users")
        }
        else{
            res.send("Hurrra, Now You Are Loged In Technically...")
        } 
    })
});
