# Note-Taker

This application is for writing, saving, and deleting notes: [Try the app here](https://blooming-spire-75700.herokuapp.com/)!

![Screenshot of Note Taking App](https://jxleilani.github.io/Note-Taker/public/assets/img/screenshot.png)

## Table of Contents
- [Technical Description](#technicaldescription)  
- [Instructions](#instructions)  
- [API Usage](#apiusage)  
- [User Story](#userstory)  

## Technical Description
The application uses an express.js server to save and retrieve data from a JSON file. The interface also allows the user to delete notes, which removes the selected note from the JSON file. 

**Other Technologies Used:**
* HTML
* CSS
* JavaScript
* jQuery
* Node
* Express.js

## Instructions
Click on [Try the app here](https://blooming-spire-75700.herokuapp.com/). Then click on Get Started.  
Type your note title and note text and then click the save icon.  
To create a new note, click on the pencil icon in the top right corner.  
To view previously created notes, click on the title from the left pane.
To delete a note, click on the red trash icon.

## API Usage
> **/api/notes**  
POST request that returns the json object of saved notes  
> **/api/notes/:id**  
DELETE request that will delete a note. Id=index and starts at 0.

## User Story

>AS A user, I want to be able to write and save notes  
>I WANT to be able to delete notes I've written before  
>SO THAT I can organize my thoughts and keep track of tasks I need to complete