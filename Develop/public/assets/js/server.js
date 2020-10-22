let express = require("express");
let fs = require("fs");
let path = require("path");
let app = express();
let PORT = 9000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/notes", function (req, res){
    res.sendFile(path.join(__dirname, "notes.html")])
})


//$.post("/notes", newnotes)


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});