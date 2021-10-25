// Import the Todos class
import  TodoList from './todos.js';

// Check if the device is an iphone
var isIphone = navigator.userAgent.indexOf("iPhone") != -1 ;

// Create an instance of Todos
let todoList = new TodoList("todoListKey");

// Initiate the todoList
todoList.initiate();

// If the device is an iphone, remove autoplay so the user can play the video manually
if (isIphone) {
  document.getElementById("shia-labouf").autoplay = false;
}