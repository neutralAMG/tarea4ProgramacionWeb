const http = require("http")

const server = http.createServer(function(req,res){
    const url = req.url;

    if(url === "/"){
     res.setHeader("Content-Type", "text/html");
     res.statusCode = 200;
    res.write(`
        
        <h1>Hello world</h1>
        
        `);
        res.end(); 
    }else if(url ===  "/message"){
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 201;
       res.write(`
           
           <h1>Message</h1>
           
           `);
           res.end();
    }
   

console.log(req);
});

server.listen(5000);