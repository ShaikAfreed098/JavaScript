/*
--> Modifying the Array Elements
Elements in an array can be modified by assigning a new value to their corresponding index.

// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];
console.log(a);
​
a[1]= "Bootstrap";
console.log(a);

In the above example, we created an array a with three string elements. We then modified the second element (index 1) from "CSS" to "Bootstrap" by assigning a new value to that index.
*/

/*
--> Adding Elements to the Array
Elements can be added to the array using methods like push() and unshift().

The push() method add the element to the end of the array.
The unshift() method add the element to the starting of the array.



// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];
​
// Add Element to the end of Array
a.push("Node.js");
​
// Add Element to the beginning
a.unshift("Web Development");
​
console.log(a);

*/

/*
6. Removing Elements from an Array
To remove the elements from an array we have different methods like pop(), shift(), or splice().

The pop() method removes an element from the last index of the array.
The shift() method removes the element from the first index of the array.
The splice() method removes or replaces the element from the array.
*/



// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];
console.log("Original Array: " + a);

// Removes and returns the last element
let lst = a.pop();
console.log("After Removing the last: " + a);

// Removes and returns the first element
let fst = a.shift();
console.log("After Removing the First: " + a);

// Removes 2 elements starting from index 1
a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);