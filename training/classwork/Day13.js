console.log(a);        // undefined          ← var hoisted with undefined
var a = 1;

console.log(b);        // ReferenceError     ← let hoisted, but in TDZ
let b = 2;

console.log(c);        // ReferenceError     ← const hoisted, but in TDZ
const c = 3;

greet();               // "Hi"               ← function declaration: full body hoisted
function greet() { console.log("Hi"); }