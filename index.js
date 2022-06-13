const express = require("express");
const path = require("path");
const fs = require("fs")
const app = express();
const title = require('./title.json')
const code = require("./code.json")
const PORT = process.env.PORT || 7001

app.use("/images", express.static("public/img"));
app.use("/files", express.static("public/static"));
app.use("/blocks", express.static("public/blocks"));
app.use("/scripts", express.static("public/scripts"));
app.use("/game", express.static("public/game"));
app.use("/liveLessons", express.static("public/liveLessons"));



app.get('/all', (req, res) => {

    const dir = path.join(__dirname, "public", "liveLessons")
    const paths = []
    fs.readdirSync(dir).forEach(file => {
        paths.push({ params: { slug: file } })
    });

    res.json(paths)
})
// app.get("/scripts/:id", (req, res) => {
//     const id = req.params.id
//     const script = require('./public/scripts/' + id + '/script')
//     res.send(script)
// })

app.get("/", (req, res) => {
    res.send("Home Page")
})
app.get("/title", (req, res) => {
    res.json(title)
})
app.get("/code", (req, res) => {
    res.json(code)
})

//turtle
app.use("/turtle", express.static("public/turtle"));

app.use(express.json());
//app.use(bodyParser.json());

app.post("/data", (req, res) => {
    console.log(req.body)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")

    res.json(req.body)
})
// run server
app.listen(PORT, () => {
    console.log("Listning on port ", PORT);
})