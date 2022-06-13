const path = require("path");
const fs = require("fs")
const arr = require("./multiple")

function makeDir(args) {
    const { folder, code, guide } = args;
    const dir = path.join(__dirname, folder.toString())
    //const c = code.replace(/(\r\n|\n|\r|\t)/gm, '\n').trim();
    //const c = code.replace(/(\r\n|\n|\r|\t)/gm, '\n').trim();
    const newVar = JSON.stringify({ code, type: 1, guide })
    const name = path.join(dir, 'code.json')
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
        fs.writeFileSync(name, newVar);
    }
}


arr.forEach(array => makeDir(array))