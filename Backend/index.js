const express = require('express');
const path = require('path');
const fs = require('fs');
const cors= require('cors');
const compression = require('compression')

const app = express ();
const PORT = 3000;

app.use(cors({ origin: '*' }));
app.use(compression());
app.disable('x-powered-by');

//app.use('/api', express.static(path.join(__dirname,'data'), {extensions: ['json']}) );

app.get('/api/:name',(req,res) => {  //http://expressjs.com/en/guide/routing.html#route-parameters
    let {name}=req.params;
    const filename= path.join(__dirname,'data',name+'.json');  
    console.log(filename);
    fs.open(filename, 'r', (err, fd) => { //https://nodejs.org/api/fs.html#fsopenpath-flags-mode-callback - ассинхронне читання файлу
        if (err) {
          if (err.code === 'ENOENT') {
            res.status(404);
            res.end('404 '+filename);
            return;
          }
          throw err;
        }
        try {
          res.json(fd);
        } finally {
          fs.close(fd, (err) => {
            if (err) throw err;
          });
        }
      });
}); 

app.get('/',(req,res) => {
    res.status(403);
    res.end('403/forbidden'); //give 403
});

app.listen(PORT, ()=> {
    console.log('Server has been started successfully on port ' + PORT);
});