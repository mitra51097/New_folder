var fs = require("fs");
fs.readFile('textfile', function(err, data){
    if(err)
        return console.log(err);
        console.log(data.toString());
});
console.log("End of Program Execution");