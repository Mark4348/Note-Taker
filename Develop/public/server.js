let express = require("express");
let fs = require("fs");
let path = require("path");
let app = express();
let PORT = process.env.PORT || 9000;

// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
})

app.get("/api/notes", function(req, res){
res.sendFile(path.join(__dirname, "./db/db.json"));
const newNote = req.body;
fs.writeFile("./db/db.json", JSON.stringify(notes), function(err){
    if(err){
        console.log(err)
    }
})
});

//$.post("/notes", newnotes)


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});