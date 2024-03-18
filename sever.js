const http = require('http')

const sever = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("My Name Is John");
    } else if (req.url === "/Hello") {
        res.write('Its nice meeting you')
    }
    res.end();
});

console.log("Welcome to my sever");

sever.listen(8900, null, null, () => {
    console.log(`listening on port 8900...`)
});
console.log(`listening on port 8900...`)

