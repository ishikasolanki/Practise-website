// const fs = require("fs");
// let text = fs.readFileSync("del.txt","UTF-8");
// console.log(text);
// text=text.replace("hello","Idhiks")
// fs.writeFileSync("del2.txt",text);
// const { Console } = require("console");node
// const fs = require("fs");
// let text=fs.readFile("del.txt","UTF-8",(err,data)=>{console.log(data)})
// console.log("ohh no ohh no")
const http=require("http");
const fs=require("fs");
const filecontent=fs.readFileSync("index.html")
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(filecontent)
}
)
server.listen(80,'127.0.0.1',()=>{
    console.log("listening");

})