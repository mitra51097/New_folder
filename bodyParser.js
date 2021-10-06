const { urlencoded } = require('body-parser');
var bodyParser = require('body-parser')
//parse incoming req obj as a json obj
app.use(bodyParser.json());
//
app.use(bodyParser.urlencoded({ extended:false}));
