

module.exports = (req , res) =>{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`at CADT, we love node.js! `);
} 