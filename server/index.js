const express = require('express');
const app = express();
const fs = require('fs');

const port = 3333;

app.all('/api/:resource?', function(req, res) {
    let file = fs.readFileSync('./server/db.json');
    let json = JSON.parse(file);

    res.header('Access-Control-Allow-Origin', '*');
    if (req.params.resource) {
        if (!json.hasOwnProperty(req.params.resource)) {
            res.status(400).send('Bad Resource');
            return;
        } 
        json = json[req.params.resource];
    }
    res.status(200)
       .type('application/json')
       .send(json);
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});