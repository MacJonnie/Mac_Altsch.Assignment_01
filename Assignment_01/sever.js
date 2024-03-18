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


// PATH API
// const path = require("path")

// const separate = path.sep;
// console.log(separate);

// const basename = path.basename("C:\Users\DELL\Documents\Code\Assignment_01\package.json")
// console.log(basename)

// const dirName = path.dirname("C:\Users\DELL\Documents\Code\Assignment_01\package.json")
// console.log(dirName)

// const pathJoin = path.join('code', 'assignment_01', 'package.json')
// console.log(pathJoin)


// OS API
// const os = require("os");
// const { constrainedMemory } = require("process");

// const userInfo = os.userInfo();
// console.log(userInfo);

// const hostName = os.hostname();
// console.log(os.hostname)

// const platForm = os.platform();
// console.log(os.platform)

// const memory = os.freemem();
// console.log(os.freemem)

// const cpuS = os.cpus();
// console.log(cpuS)


// PROCESS MODULE
