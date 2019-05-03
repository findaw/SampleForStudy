const express = require('express')
const app = express();
const fs = require('fs');
//const requestIp = require('request-ip');

app.set('trust proxy', true);
app.use((req,res,next)=>{
    const ip = req.header['x-forwarded-for'] || req.connection.remoteAddress;
    
    console.log(`client : ${ip}`);

    next();
});
app.use(express.static('public'));

app.get('/login', (req, res)=> {
    fs.readFile('./public/login.html', (err,data)=>{
        if(err) console.log(err);
        else{
            res.type('.html').status(200).send(data).end();
        }
    });
});
app.get('/board', (req, res)=> {
    fs.readFile('./public/board.html', (err,data)=>{
        if(err) console.log(err);
        else{
            res.type('.html').status(200).send(data).end();
        }
    });
});
app.get('/admin', (req, res)=> {
    fs.readFile('./public/admin.html', (err,data)=>{
        if(err) console.log(err);
        else{
            res.type('.html').status(200).send(data).end();
        }
    });
});


app.listen(3000, () => console.log('Sample app listening on port 3000'));
