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
{fetch('https://github.com/aleenzd/web0.git.herokuapp.com/')
.then(response => response.json())
.then(json => console.log(json))
}