const http = require("http");

let app = http.createServer((req,res)=>{

    res.end("Hello fucking idiot \n");

})

app.listen(3000);
console.log("running on server 3000");