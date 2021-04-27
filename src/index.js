require('dotenv').config();

const express = require('express');


const app = express();

app.use(express.json());
//app.use(bodyParser.urlencoded({ extended : false} ));


require('./controllers/authController')(app);
require('./controllers/projectController')(app);

const usuarios = []

app.get('/usuarios', function(req, res){
return res.json({ usuarios });

});

app.post('/usuarios', function(req, res){
    usuarios.push(req.body)
    return res.json({ ok: true });
    
});


app.listen(3000);