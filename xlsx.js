const reader = require('xlsx'); 
const file=reader.readFile('./myFile.xlsx'); 
const worksheet=file.Sheets['Sheet1'];
 data=reader.utils.sheet_to_json(worksheet);

const express=require('express')
const app=express()
const bodyParser=require("body-parser")
app.use(bodyParser.json());
var cors=require('cors');
app.use(cors());

app.get('/',function(req,res){
    res.send("<h1>Hello world</h1>");
})
app.get('/Users',function(req,res){
    res.send(data);
})

app.get('/GetUser', function (req, res) {
  
    var user = [];
    var email = req.query.email
    
    for(var i=0; i < data.length; i++){
        //data[0]["Password"]
        if(email == data[i]["Email"]){
            var password= data[i]["Password"]
            user.push(email)
            user.push(password)
            break
        }
    }
    res.send(user)
})

app.post('/AddUser',function(req,res){

   data.push(req.body)
   console.log(data)
   reader.utils.sheet_add_json(file.Sheets["Sheet1"],data)
   reader.writeFile(file,"./myFile.xlsx")
   res.send('ok') 
})

app.post("/Authenticate", function(req,res){
    auth=false;
    for(var i=0;i<data.length; i++){
        if(req.body.Email == data[i].Email){
            if(req.body.Password == data[i]["Password"]){
            auth = true;
        break;
        }
    }}res.send(auth);
})
// app.listen(1234)
app.listen(process.env.PORT || 1234, 
	() => console.log("Server is running..."));