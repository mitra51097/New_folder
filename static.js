var express = require('express')
var app = express();

app.use(express.static('public'));

app.listen(4000,()=>{
    console.log("on 4000");
})