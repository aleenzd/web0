// const express=require('express')
// const app=express()
// var cors=require('cors');

// app.use(cors());

// app.get('/',function(req,res){
//     res.send("<h1>Hello world</h1>");
// })
// app.listen(process.env.PORT || 3000,
//     () => console.log("server is running . . ."));
function test()
{fetch('https://secret-hollows-21282.herokuapp.com/')
.then(response => response.json())
.then(json => console.log(json))
}