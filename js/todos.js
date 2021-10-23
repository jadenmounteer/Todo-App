// Import the helper functions
import * as utilities from './utilities.js';
// Import the localStorage functions
import * as ls from './ls.js';

// Add a variable to store our list of tasks to the Todos.js module.
let listOfTodos = new Array();

// Add a global variable to keep track of which filter is active
let activeFilter = "all";

/* 
The Todos class.
Represents a todo task.
*/
class Todos {

    constructor(key) { 

        // Set a variable with the element our todo list will be
        // built in, and the key we will use to read/write from localStorage
        this.key = key;
        
     }

    /*
    * Grab the input in the html where users enter the text of the task
    * then send that along with the key to a SaveToDo() function. Then update
    * the display with the current list of tasks.
        */
    addTodo() {
        // Grab the input from html 
        let userInput = document.getElementById('add-task-input').value;

        // Send the userInput and its key to te SaveToDo() function
        saveTodo(userInput, "to-do-list-key");
        
        // Clear the todo list
        const todoListElement = document.getElementById("to-do-list");

        //todoListElement.innerHTML = "";
        // Update the display with the current list of tasks
        renderTodoList(listOfTodos, todoListElement);

    }


     /*
     * Initiates the form.
     * Sets the event listeners
     */
    initiate() {
        // Call the listTodos() function
        this.listTodos();

        //  Bind todoList.addTodo to the add button in the html
        utilities.onTouch(document.getElementById("add-task-input-button"), this.addTodo);

        // Add the filter event listeners
        let listOfFilters= document.getElementsByClassName('filter-label');
        for (let i =0; i<listOfFilters.length; i++) {
            utilities.onTouch(listOfFilters[i], () => {filterTodos(listOfFilters,listOfFilters[i], i)});
            }
    
        
        
    }
    
    /*
    * Use the renderTodoList function to output our todo list
    * when called. Gets called when a todo is added, or removed, and when the Todos
    * Class is instantiated.
    */
    listTodos(){
        // Get the todos from localStorage 
        getTodos("to-do-list-key");
        // Render the tasks
        renderTodoList(listOfTodos, document.getElementById("to-do-list"));

    }

}


/* build a todo object, add it to the todoList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.
A todo should look like this: { id : timestamp, content: string, completed: bool }
*/
function saveTodo(task, key) { 
    // Build the todo object
    let newTask = {
        id: Date.now(),
        content: task,
        completed: false
    }

    // Add the new object to the todoList
    listOfTodos.push(newTask);

    // Call the write to LS function
    ls.writeToLS(key, JSON.stringify(listOfTodos));
    
}


/**
 * check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
 * @param  {string} key The key under which the value is stored under in LS
 * @return {array}     The value as an array of objects
 */
function getTodos(key) { 
    let dataFromLocalStorage = ls.readFromLS(key);
    if (dataFromLocalStorage != null) {
        listOfTodos = ls.readFromLS(key);
    }
    
}


/**
* foreach todo in list, build a li element for the todo, and append it to element
* @param  {array} list The list of tasks to render to HTML
* @param {element} element The DOM element to insert our list elements into.
*/
function renderTodoList(list, element) { 

    // Clear the task list so we can start fresh
    element.innerHTML = "";

    // Create another filtered list according the active filter
    let filteredList = new Array();
    switch (activeFilter) {
        case "all":
            filteredList = listOfTodos;
            break;
        case "active":
            listOfTodos.forEach(task => {
                // If the task is not completed
                if (!task.completed) {
                    // Add it to the filtered list
                    filteredList.push(task);
                }
            });
            break;
        case "completed": 
            listOfTodos.forEach(task => {
                // If the task is completed
                if (task.completed) {
                    // Add it to the filtered list
                    filteredList.push(task);
                }
            });
            break;
    }

    // Loop through the todo list
    filteredList.forEach(task => {

        // Is the task already complete?
        let customCheckbox = `<span class="task-checkbox"></span>`
        let taskLabel = `<label class="task-label">${task.content}</label>`;
        if (task.completed) {
            // If it is, change the customCheckbox and the label accordingly
            customCheckbox = `<span class="task-checkbox selected-checkbox">X</span>`
            taskLabel = `<label class="task-label selected-label">${task.content}</label>`
        }

        // Create a list element
        let listElement = document.createElement("LI");
        // Give the list element all the necessary classes
        listElement.classList.add("task-list-div");
        listElement.classList.add("task-div");

        // Build the task content inside of the list
        listElement.innerHTML = 
        `
        ${customCheckbox}
        ${taskLabel}
        <label class="task-delete-x-button">X</label>  
        `;

        // Add the task content to the html page
        element.appendChild(listElement);

    });

    // Add the event listeners again
    addEventListeners();

    // Update the number of tasks left
    updateNumberOfTasksLeft();

}

/**
 * Adds the event listeners for the tasks
  */
function addEventListeners() {
    //  Bind todoList.completeTodo to the checkboxes in the html
    let listOfCheckBoxes = document.getElementsByClassName('task-checkbox');
     for (let i =0; i<listOfCheckBoxes.length; i++) {
         utilities.onTouch(listOfCheckBoxes[i], () => {completeTodo(listOfCheckBoxes[i], i)});
        }
    
    //  Bind the remove function to the x's in the html
    let listOfDeleteButtons = document.getElementsByClassName('task-delete-x-button');
     for (let i =0; i<listOfDeleteButtons.length; i++) {
         utilities.onTouch(listOfDeleteButtons[i], () => {removeTodo(listOfDeleteButtons[i], i)});
        }
    
}

/**
* Called when a todo is completed
*/
function completeTodo(checkbox, indexOfCheckbox) { 
    // Add the necessary class to the checkbox
    checkbox.classList.add("selected-checkbox");
    // Add the x to the checkbox
    checkbox.innerHTML = "X";
    // Add the necessary class to the label
    checkbox.nextElementSibling.classList.add("selected-label");
    // Update the task in the task list to completed
    listOfTodos[indexOfCheckbox].completed = true;
    // Update the number of tasks left
    updateNumberOfTasksLeft();
    // Call the write to LS function
    ls.writeToLS("to-do-list-key", JSON.stringify(listOfTodos));
}

/**
* Called when a todo is removed
*/
 function removeTodo(deleteButton, indexOfDeleteButton) { 
     // Remove the task from the list
     listOfTodos.splice(indexOfDeleteButton, 1);
     // Update the display with the current list of tasks
    renderTodoList(listOfTodos, document.getElementById("to-do-list"));
    // Call the write to LS function
    ls.writeToLS("to-do-list-key", JSON.stringify(listOfTodos));
 }



 /** 
  * Updates the number of active tasks left in the list
  */
function updateNumberOfTasksLeft() {
    let count = 0;
    let singularOrPlural = "tasks";
    // Loop through the task list
    listOfTodos.forEach(task => {
        // If the task is not complete 
        if (task.completed == false) {
            // Increment the count
            count += 1;
        }
    });

// If the count is equal to 1, make the variable singular
if (count == 1) {
    singularOrPlural = "task";
}

let result = `${count} ${singularOrPlural} left`;
// Add the count to the html page
document.getElementById("total-label").innerHTML = result;

}

/**
* Called when a filter button is clicked
 */
function filterTodos(listOfFilterLabels, filterClicked, indexOfFilterClicked) { 

    // Remove the selected-filter id from all of the labels
    for (let x=0; x<listOfFilterLabels.length; x++) {
        let filterLabelClassList = listOfFilterLabels[x].classList;
        for (let i=0; i<filterLabelClassList.length; i++) {
            if (filterLabelClassList[i] == "selected-filter") {
                filterLabelClassList.remove("selected-filter");
            }
        }
    }

    // Add the class to the filter label
    filterClicked.classList.add("selected-filter");

    // Figure out which filter was clicked
    switch(filterClicked.id) {
        case "all-filter-label":
            //filterByAll();
            activeFilter = "all";
            break;
        case "active-filter-label":
            //filterByActive();
            activeFilter = "active";
            break;
        case "completed-filter-label":
            //filterByCompleted();
            activeFilter = "completed";
            break;
    }

    // Update the display with the current list of tasks
    renderTodoList(listOfTodos, document.getElementById("to-do-list"));

}

// Export the Todos class
export default Todos;