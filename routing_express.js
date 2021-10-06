var express = require('express')
var app = express();
app.get('/',function(req,res){
    console.log("get called");
    res.send("Hi......!");
});
app.listen(5000, ()=>{
    console.log("express on 5000");
})
