const express = require('express');
const app = express();

app.get('/students', function(request,response){
    response.send('HEllO world');
})

app.listen(3000, function(){
    console.log("Connect to 3000 port");
})