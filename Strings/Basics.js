/*A JavaScript String is a sequence of characters, typically used to represent text.

In JavaScript, there is no character type (Similar to Python and different from C, C++ and Java), so a single character string is used when we need a character.
Like Java and Python, strings in JavaScript are immutable.
Create using Literals - Recommended
We can either use a single quote or a double quote to create a string. We can use either of the two, but it is recommended to be consistent with your choice throughout your code.




// Using Single Quote
let s1 = 'abcd';
console.log(s1);
​
// Using Double Quote
let s2 = "abcd";
console.log(s2);
Create using Constructor
The new String() constructor creates a string object instead of a primitive string. It is generally not recommended because it can cause unexpected behavior in comparisons




let s = new String('abcd');
console.log(s);
Template Literals (String Interpolation)
You can create strings using Template Literals. Template literals allow you to embed expressions within backticks (`) for dynamic string creation, making it more readable and versatile.




let s1 = 'gfg';
let s2 = `You are learning from ${s1}`;
​
console.log(s2);
Empty String
You can create an empty string by assigning either single or double quotes with no characters in between.




let s1 = '';
let s2 = "";
​
console.log(s1);
console.log(s2);
Since the strings are empty, console.log will print two blank lines.

Multiline Strings (ES6 and later)
You can create a multiline string using backticks (``) with template literals. The backticks allows you to span the string across multiple lines, preserving the line breaks within the string.




let s = `
    This is a
    multiline
    string`;
​
console.log(s);
Basic Operations on JavaScript Strings
*/

//Finding Length of a String
let str = "GeeksforGeeks";
console.log(str.length); // Output: 13

//String Concatenation
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result); // Output: Hello World

//Escape Characters
const s1 = "\'GfG\' is a learning portal";
const s2 = "\"GfG\" is a learning portal";
const s3 = "\\GfG\\ is a learning portal";

console.log(s1);
console.log(s2);
console.log(s3);

//Breaking Long Strings into Multiple Lines
let str3 = "This is a long string that \
spans across multiple lines.";
console.log(str3); // Output: This is a long string that spans across multiple lines.

//Sub String of a String
let str4 = "IamAfreedomLover";
let subStr = str4.substring(0, 5);
console.log(subStr); // Output: IamAf

//Converting String to Uppercase and Lowercase
let str5 = "WorkForIt";
console.log(str5.toUpperCase());// Output: WORKFORIT
console.log(str5.toLowerCase());// Output: workforit

//String Search in JavaScript
let str6 = "You are learning JavaScript";
console.log(str6.indexOf("Ava")); // Output: 17

//String Replace in JavaScript
let str7 = "You are learning JavaScript";
let newStr = str7.replace("JavaScript", "Python");
console.log(newStr); // Output: You are learning Python

//Trimming Whitespace from a String 
let str8 = "   You are learning JavaScript   ";// Output: "You are learning JavaScript"
console.log(str8.trim());

//10. Access Characters from String

let sa1 = 'Learn JavaScript';
let sa2 = sa1[6];
console.log(sa2);
sa2 = sa1.charAt(6);
console.log(sa2);

//String Comparison in JavaScript
let sa3 = "Ajay"
let sa4= new String("Ajay");

console.log(sa3 == sa4);  // true (type coercion)
console.log(sa3 === sa4); // false (strict comparison)
console.log(sa3.localeCompare(sa4)); // 0 (means they are equal lexicographically)

