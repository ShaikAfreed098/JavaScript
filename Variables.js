/*Variables
A variable is like a container that holds data that can be reused or updated later in the program. In JavaScript, variables are declared using the keywords var, let, or const.

1. var Keyword
The var keyword is used to declare a variable. It has a function-scoped or globally-scoped behaviour.




var n = 5;
console.log(n);
​
var n = 20; // reassigning is allowed
console.log(n);
2. let Keyword
The let keyword is introduced in ES6, has block scope and cannot be re-declared in the same scope.




let  n= 10;
n = 20; // Value can be updated
// let n = 15; //can not redeclare
console.log(n)
3. const Keyword
The const keyword declares variables that cannot be reassigned. It's block-scoped as well.




const n = 100;
// n = 200; This will throw an error
console.log(n)
For more details read the article - JavaScript Variables

Data Types
JavaScript supports various datatypes, which can be broadly categorized into primitive and non-primitive types.

Primitive Datatypes
Primitive datatypes represent single values and are immutable.

1. Number: Represents numeric values (integers and decimals).

let n = 42;
let pi = 3.14;
2. String: Represents text enclosed in single or double quotes.

let s = "Hello, World!";
3. Boolean: Represents a logical value (true or false).

let bool= true;
4. Undefined: A variable that has been declared but not assigned a value.

let notAssigned;
console.log(notAssigned);
5. Null: Represents an intentional absence of any value.

let empty = null;
6. Symbol: Represents unique and immutable values, often used as object keys.

let sym = Symbol('unique');
7. BigInt: Represents integers larger than Number.MAX_SAFE_INTEGER.

let bigNumber = 123456789012345678901234567890n;
*/

// Non-Primitive Datatypes
let oject={
    name:"Afreed",
    age:23,
    Place:"Narasaraopet"
}
console.log(oject)
console.log(oject.name)
console.log(oject.age)
console.log(oject.Place)