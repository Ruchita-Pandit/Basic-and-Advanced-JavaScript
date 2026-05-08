// app.js — must import by EXACT name
/*import { PI, add, multiply } from "./mathUtils.js";

console.log(PI);              // 3.14159
console.log(add(2, 3));       // 5
console.log(multiply(4, 5));  // 20

// Rename on import with `as`
import { add as sum } from "./mathUtils.js";
console.log(sum(10, 20));     // 30

// Bring everything in as a namespace
import * as math from "./mathUtils.js";
console.log(math.add(1, 2));  // 3
console.log(math.PI);*/

//import using different name 
import { multiply} from "./mathUtils.js";
console.log(multiply(5, 5));

//import using different name 
import { multiply as product } from "./mathUtils.js";
console.log(product(4, 5));

//default call with same name 
import divide from "./mathUtils.js";
console.log(divide(6, 3));

//default call with different name 
import division from "./mathUtils.js";
console.log(division(5, 6));