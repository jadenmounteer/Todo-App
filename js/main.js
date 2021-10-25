// Import the Todos class
import  TodoList from './todos.js';


// JQuery 
$(document).ready(function(){
    
    // jQuery methods go here...

    // Make Shia appear 
  
    // PC
    $(document).mouseenter(function(){
      // Play the video
      document.getElementById("shia-labouf").play();
      // Show the video
      //document.getElementById("shia-labouf").style.display = "block";
      //document.getElementById("shia-labouf").muted = false;
      //setTimeout(function(){ document.getElementById("shia-labouf").style.display = "block"; }, 3000);
      
      });

    // mobile
    $(document).on("tap", function(){
      // Play the video
      document.getElementById("shia-labouf").play();
      // Show the video
      //document.getElementById("shia-labouf").style.display = "block";
      //document.getElementById("shia-labouf").muted = false;
      //setTimeout(function(){ document.getElementById("shia-labouf").style.display = "block"; }, 3000);
      
      });

        
});


// Create an instance of Todos
let todoList = new TodoList("todoListKey");

// Initiate the todoList
todoList.initiate();

//document.getElementById("shia-labouf").style.display = "block";
document.getElementById("shia-labouf").muted = false;
