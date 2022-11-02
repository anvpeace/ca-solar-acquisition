var express = require('express')
var cors = require('cors');

require('dotenv').config();

var app = express()
var port = process.env.PORT || 5002

app.use(express.json());
app.use(cors());

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);

})


