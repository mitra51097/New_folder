var fs = require("fs");
var data = fs.readFileSync('textfile');
console.log(data.toString());
console.log("End of Program Execution");