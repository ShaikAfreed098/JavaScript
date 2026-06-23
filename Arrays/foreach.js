/*JavaScript Array forEach() Method
Last Updated : 1 Jun, 2026
The JavaScript Array forEach() method is a built-in function that executes a provided function once for each array element. It does not return a new array and does not modify the original array. It's commonly used for iteration and performing actions on each array element.

Syntax
array.forEach(callback(element, index, arr), thisArg);
Parameters
This method accepts five parameters as mentioned above and described below:

Parameter	Description
callback	It is a callback function executes for each array element.
element	The current element being processed in the array.
index (Optional)	The index of current element. The array indexing starts from 0.
array (Optional)	The array on which forEach() is called.
thisArg (Optional)	Value to use as this when executing the callback function.
Return value
This method may or may not change the original array provided as it depends upon the functionality of the argument function.

Example 1: Basic iteration to print array elements on console.



*/
const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => {
    console.log(item);
});


//Example 2: Copy elements from one array to another using forEach().




// JavaScript Array forEach() Method

// Original array
const items = [12, 24, 36];
const copy = [];

items.forEach(function (item) {
    copy.push(item);
});

console.log(copy);


//Example 3: Calculates the square of every element of the array using forEach() method.


// JavaScript Array forEach() Method

// Original array
const items = [1, 29, 47];
const squareOfItems = [];

items.forEach(function (item) {
    squareOfItems.push(item * item);
});

console.log(squareOfItems);

/*
Limitations of forEach() Method
No Break or Continue: Unlike for loops, you cannot break the forEach() loop or use continue to skip to the next iteration. It will always iterate over all elements.
No Return Value: The forEach() loop does not return a new array, it returns undefined.
Asynchronous Issues: The forEach() loop does not handle asynchronous operations well. If you need to perform asynchronous operations, consider using for...of with async/await or Promise.all.
Modifying the Original Array: If you modify the original array within the forEach() loop, it can lead to unexpected behavior, especially if you're adding or removing elements.
Performance: For large arrays, the forEach() method can be less efficient than traditional loops or other array methods like map() or filter(). If you need to create a new array based on the original, consider using map() instead.
*/