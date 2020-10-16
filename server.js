var express = require("express");
var path = require("path");
var fs = require("fs");
var dbjson = require("./db/db.json");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES-----------------------------------------------
app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/notes', function(req,res) {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});
//API ROUTES--------------------------------------------
app.get('/api/notes', function(req,res) {
    fs.readFile(dbjson, 'utf8', function(err,data) {

    });
});
app.post('/api/notes', function(req,res) {
    fs.appendFile('./db/db.json', 'new post', function(err) {
        if (err){
            throw err;
        }
    });
    res.json(dbjson);
});
app.delete('/api/notes/:id', function(req,res) {
    var noteId = req.params.id;
    console.log(noteId);
});

//START THE SERVER-------------------------------------
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});