/*In functions, parameters are placeholders defined in the function, while arguments are the actual values you pass when calling the function.

Example:
*/

function greet(name) {   // 'name' is a parameter
  console.log("Hello " + name);
}
​
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
