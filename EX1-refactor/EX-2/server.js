// server.js
const http = require('http');
const home = require('./route/home');
const about = require('./route/about');
const contact = require('./route/contact');
const projects = require('./route/projects'); 
const products = require('./route/products');


const express = require("express");
const app = express();
 
app.use(express.json());

app.get('/', home);
app.get('/about', about)
app.get('/contact-us', contact);
app.get('/products', products);
app.get('/projects', projects);

app.use((req,res) =>{
    res.status(404).send("404 not found!");
})


app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
