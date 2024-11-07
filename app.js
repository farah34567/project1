const http = require ('http');
const tasksRoutes=require('./routes/taskRoutes');
const { createRequire } = require('module');
const HOSTNAME= 'localhost';
const PORT= 8000;
const server = http.createServer((req, res)=>{
    if(req.url.startsWith('/tasks')){
        tasksRoutes(req,res)
        
    }else{
        res.writeHead(404, 'NOT FOUND ', {'content-type': 'application/json'});
        res.end(json.stringify({
            message: 'sory, you got lost'
        }))
    }

})

server.listen(PORT, HOSTNAME,()=>{
    console.log(`server running on port,${PORT}`)
});
