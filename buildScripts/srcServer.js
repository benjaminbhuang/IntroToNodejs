import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

/* eslint-disable no-console */


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.get('/users', function (req, res) {

    res.json(
        [
            {"id": 1, "firstName": "Alice", "lastName": "Smith", "email": "alice@aberlyn.com"},
            {"id": 2, "firstName": "Bobby", "lastName": "Jones", "email": "bobby@aberlyn.com"},
            {"id": 3, "firstName": "Charlie", "lastName": "Doe", "email": "charlie@aberlyn.com"}
        ]
    );
});

app.listen(port, function (err) {
    if(err){
        console.log(err);
    }else{
        open('http://localhost:'+port);
    }
});
