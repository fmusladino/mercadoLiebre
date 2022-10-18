const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path');


const port = process.env.PORT || 3001;
app.listen(port,()=>console.log(`Servidor corriendo en el puerto ${port}`));


app.get('/', (req, res)=>{
    res.sendFile(__dirname + ('/views/home.html'));
});

app.get('/register', (req, res)=>{
    res.sendFile(path.resolve('views/register.html'))
});

app.get('/login',(req, res)=>{
    res.sendFile(path.resolve('views/login.html'))
});

app.post('/', (req, res)=>{
    res.sendFile(__dirname + ('/views/home.html'));
});
