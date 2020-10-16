var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/notes', function(req,res) {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});
//API ROUTES
app.get('/api/notes', function(req,res) {
    
});
app.post('/api/notes', function(req,res) {
    
});
app.delete('/api/notes/:id', function(req,res) {
    var noteId = req.params.id;
    console.log(noteId);
});