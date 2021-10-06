const EventEmitter = require('events');
const express = require('express');
const app = express(); 
//to create an eventEmitter we need create an instanceofeventemitter
const eventEmitter = new EventEmitter();
//parse form data
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//listen to the event
//at the time of publishing the event there has to be a registerd listener
eventEmitter.on('myevent',(a)=>{
    //a=a+2;
    var b=8;
    console.log(b);
    console.log(a);
    console.log("Data Received");
    //console.log("Data Received"+{$a});
});
//publish an event
// const myevent = function(){
//     var a = 4;
//     return a;
// };
app.get('/:id', (req, res)=>{
    var { a } = req.params;
    console.log('ID is'+id );
    a=4;
    return 4;
})
//var a = req.url.id;
eventEmitter.emit('myevent', 'a');
app.listen(9000,() =>
{
    console.log('server on 9000');
})

