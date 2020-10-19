var express = require("express");
var path = require("path");
var fs = require("fs");
var dbjson = require("./db/db.json");

var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
//ROUTES-----------------------------------------------
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', function(req,res) {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

//API ROUTES--------------------------------------------
app.get('/api/notes', function(req,res) {
    fs.readFile('./db/db.json', 'utf8', function(err,data) {
        if (err){
            throw err;
        }
    });
    res.json(dbjson);

});
app.post('/api/notes', function(req,res) {  
    var newpost = req.body;
    //adds input from notes page to dbjson array of objects
    function addNewPost(post) {
        dbjson.push(post);
        for(let i=0;i<dbjson.length;i++) {
            dbjson[i].id = i;
        }
        return JSON.stringify(dbjson);
    }
    fs.writeFile('./db/db.json', addNewPost(newpost), function(err) {
        if (err){
            throw err;
        }
    });
    res.json(dbjson);
});
app.delete('/api/notes/:id', function(req,res) {
    var noteId = req.params.id;
    //remove dbjson index of noteId from the array
    dbjson.splice(noteId,1);
    //reassign id numbers
    for(let i=0;i<dbjson.length;i++) {
        dbjson[i].id = i;
    }
    //rewrite the file, have to stringify the objects
    fs.writeFile('./db/db.json', JSON.stringify(dbjson), function(err) {
        if (err){
            throw err;
        }
    });
    res.json(dbjson);
});

//START THE SERVER-------------------------------------
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});