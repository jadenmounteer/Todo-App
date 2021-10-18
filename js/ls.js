/**
* read a value from local storage and parse it as JSON 
* @param {string} key The key under which the value is stored under in LS
* @return {array} The value as an array of objects /
* @function readFromLS(key) { }
*/
export function readFromLS(key) {
    // Get the item from Local Storage
    let itemFromLocalStorage = localStorage.getItem(key);
    // Convert the data to a JSON object
    const jsonObject = JSON.parse(itemFromLocalStorage);

    // Return the value as an array of objects
    return jsonObject;
}

/**
 * write an array of objects to local storage under the provided key
 * @param  {string} key The key under which the value is stored under in LS
* @param {array} data The information to be stored as an array of objects. Must be serialized.
* @function writeToLS(key, data) { }
 */
export function writeToLS(key, data) {
    localStorage.setItem(key, data);
}

