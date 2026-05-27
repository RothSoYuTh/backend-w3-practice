// server.js
import fs from 'fs';

import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.status(200).type('text/plain').send('Welcome to the Home Page');
});

app.get('/contact', (req, res) =>{
    res.status(200).
    send(`<form method="POST" action="/contact">
         <input type="text" name="name" placeholder="Your name" />
         <button type="submit">Submit</button>
         </form>
         `);
});

app.post('/contact', (req, res) =>{
    const {name} = req.body;

    if(!name || name.trim() === ''){
        return res.status(400).
        send(` <h1>Error</h1>
                <p>Name field cannot be empty.</p>
            `)
    }
    fs.writeFile('submission.json', JSON.stringify({ name }), (err) => {
        if (err) {
            return res.status(500).type('text/plain').send('Error saving data');
        }

        res.status(200).send(`
            <h1>Submission Successful</h1>
            <p>Name saved: ${name}</p>
        `);
    });
});

  
    
app.use((req,res) =>{
    res.status(404).send(`404 not found`);
})

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
