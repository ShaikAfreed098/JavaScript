let a = [4, 9, 16, 25];
let sub = a.map(geeks);

function geeks() {
    return a.map(Math.sqrt);
}
console.log(sub);

//The map() method creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method.




