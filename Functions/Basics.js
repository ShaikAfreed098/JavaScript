/*In functions, parameters are placeholders defined in the function, while arguments are the actual values you pass when calling the function.

Example:
*/

function greet(name) {   // 'name' is a parameter
  console.log("Hello " + name);
}
greet("Alice");  // "Alice" is the argument

//Parameter: name (placeholder inside the function).
//Argument: "Alice" (real value given at call time).

/*Types of Functions
Here are all the main types of functions in JavaScript:
NAMED FUNCTIONS:A function that has its own name when declared. It’s easy to reuse and debug because the name shows up in error messages or stack traces.
*/
function greet() {
  return "Function is working";
}
console.log(greet());

/*
Anonymous Function
An anonymous function is a function defined without an explicit name. It is commonly used as a callback or assigned to a variable.
*/
const come = function() {
  return "Anonymous Function is working";
};
console.log(come());

/*
Function Expression
A function expression is a function created as part of an expression and assigned to a variable or passed to another function. It can be named or anonymous.
*/
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3));

/*
Arrow Function (ES6)
An arrow function is a concise way to write functions using the "=>" syntax. It does not have its own "this" context and is often used for shorter functions.
*/
const multiply = (x, y) => x * y;
console.log(multiply(4, 5));

/*
Immediately Invoked Function Expression (IIFE)
An IIFE is a function that is executed immediately after it is defined. It is often used to create a new scope and avoid polluting the global namespace.
*/
(function() {
  console.log("IIFE is working");
})();

/*
CallBack Function 
A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action.
*/
function processUserInput(callback) {
  const name = "Basha";
  callback(name);
}

/*
Constructor Function
A constructor function is used to create objects and is typically named with a capital letter. It is called with the "new" keyword.
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
}

/*
Async Function
Functions that handle asynchronous tasks. Declared with async, they return a Promise, and you can use await inside them to pause until another Promise resolves.
*/
async function fetchData() {
  return "Data fetched!";
}
fetchData().then(console.log);

/*
Generator Function
A generator function is defined using the function* syntax and can yield multiple values over time, allowing for pausing and resuming execution.
*/  
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();
console.log(gen.next().value); 
console.log(gen.next().value);

