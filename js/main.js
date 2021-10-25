// Import the Todos class
import  TodoList from './todos.js';

// JQuery 
$(document).ready(function(){
    
    // jQuery methods go here...

    // Make Shia appear 
  
    // PC
    $(document).mouseenter(function(){
      // Play the video
      //document.getElementById("shia-labouf").play();
      // Show the video
      //document.getElementById("shia-labouf").style.display = "block";
      document.getElementById("shia-labouf").muted = false;
     
      
      });

    // mobile
    $(document).on("tap", function(){
      // Play the video
      //document.getElementById("shia-labouf").play();
      document.getElementById("shia-labouf").muted = false;
  
      
      });

        
});


// Create an instance of Todos
let todoList = new TodoList("todoListKey");

// Initiate the todoList
todoList.initiate();
var isIphone = navigator.userAgent.indexOf("iPhone") != -1 ;
alert(isIphone);