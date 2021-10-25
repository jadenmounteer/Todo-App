// Import the Todos class
import  TodoList from './todos.js';

// Check if the device is an iphone
var isIphone = navigator.userAgent.indexOf("iPhone") != -1 ;

/*
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
      //document.getElementById("shia-labouf").muted = false;
     
      
      });

    // mobile
    $(document).on("tap", function(){
      // Play the video
      //document.getElementById("shia-labouf").play();
      //document.getElementById("shia-labouf").muted = false;
  
      
      });

        
});
*/

// Create an instance of Todos
let todoList = new TodoList("todoListKey");

// Initiate the todoList
todoList.initiate();

// If the device is not an iphone, remove the controls and umute the video
if (!isIphone) {
  document.getElementById("shia-labouf").controls = false;
  document.getElementById("shia-labouf").muted = false;
}