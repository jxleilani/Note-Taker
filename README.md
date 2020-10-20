# Note-Taker

This application is for writing, saving, and deleting notes: [Try the app here](https://blooming-spire-75700.herokuapp.com/)!

![Screenshot of Note Taking App](https://jxleilani.github.io/Note-Taker/public/assets/img/screenshot.png)

## Technical Description
The application uses an express.js server to save and retrieve data from a JSON file. The interface also allows the user to delete notes, which removes the selected note from the JSON file. 

**Other Technologies:**
* HTML
* CSS
* JavaScript
* jQuery
* Node
* Express.js

## API Usage
> **/api/notes**  
POST request that returns the json object of saved notes  
> **/api/notes/:id**  
DELETE request that will delete a note. Id=index and starts at 0.

## User Story

>AS A user, I want to be able to write and save notes  
>I WANT to be able to delete notes I've written before  
>SO THAT I can organize my thoughts and keep track of tasks I need to complete