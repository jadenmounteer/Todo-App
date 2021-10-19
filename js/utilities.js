// The DOM Manipulation helpers

/**
 * do a querySelector lookup
 * @param  {string} selector The selector passed to querySelector
 * @return {element}     The matching element or null if not found
 */
export function qs(selector) { return document.querySelector(selector); }


/**
 * add a touchend event listener to an element for mobile with a click event fallback for desktops
 * @param  {string} elementSelector The selector for the element to attach the listener to
 * @param {function} callback The callback function to run
 
*/
export function onTouch(elementSelector, callback) { 
    // Check if the user is using mobile 
    if (isTouchScreenDevice() == 1) {
        // Add the touchend event listener to the element
        elementSelector.addEventListener("touchend", callback);
    }
    else {
        // If they are not using touchscreen, set the onclick event listener
        elementSelector.addEventListener("click", callback);
    }
}

/* 
This function checks if the user is using a touch screen.
Returns 1 if they are and 0 if they are not.
*/
export function isTouchScreenDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;      
};
