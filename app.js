const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send('Hola a todos');
});

app.get('/numen/:alumno', (req, res) =>{
    let alumno = req.params.alumno;
    console.log(req.params);
    res.send(`Hola ${alumno}`);
});

app.get('/suma/:num1/:num2', (req, res) =>{
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    let resultado = num1 + num2;
    res.status(200).json(resultado);
});

app.get('/cosa/:num1',(req, res) =>{
    let num1 = Number (req.params.num1);
    if (num1 == 1) {
        res.status(200).send('Pasaste');
    } else {
        res.status(400).send('No Pasaste');
    }
});


app.get('/prueba', (req, res) =>{
    let nombre = req.query.nombre;
    res.status(200).send(`mi nombre es ${nombre}`);
    //http://localhost:3000/prueba?nombre=cesar
});

app.use(function(req, res, next) {
  res.status(404).send('Lo siento, algo esta mal :(');
});

app.listen(port, () =>{
    console.log(`Example app http://localhost:${port}`);
});
