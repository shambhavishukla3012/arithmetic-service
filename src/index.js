const express = require('express');
const cors = require('cors')
const app = express()
const port = 3000;
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Arithmetic service- Hello World!')
});

app.get('/add/:n/:m', (req,res)=> {
    res.json(Number(req.params.n) + Number(req.params.m));
})

app.get('/subtract/:n/:m', (req,res)=> {
    res.json(Number(req.params.n) - Number(req.params.m));
})

app.get('/multiply/:n/:m', (req,res)=> {
    res.json(Number(req.params.n) * Number(req.params.m));
})

app.get('/divide/:n/:m', (req,res)=> {
    res.json(Number(req.params.n) / Number(req.params.m));
})

app.get('/modulo/:n/:m', (req,res)=> {
    res.json(Number(req.params.n) % Number(req.params.m));
})

app.listen(port);