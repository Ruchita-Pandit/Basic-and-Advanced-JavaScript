const item = "Laptop";
const price = 60000;
const tax = 0.18;

const gst = price * tax;
const total = price + gst;

const result1 = `The ${item} costs ₹${price} + ₹${gst} GST = ₹${total}.`;
console.log(result1);

const result2 = `The ${item} costs ₹${price} + ₹${price * tax} GST = ₹${price + price * tax}.`;
console.log(result2);

const result3 = `The ${item} costs:
₹${price}
+ ₹${price * tax} GST
= ₹${price + price * tax}.`;
console.log(result3); // Bonus task in task 1

//======================================================================================================================================================================================================================

//TASK 2
const scores = [88, 75, 92, 60, 45]
const [first, second, ...others] = scores;
console.log(first);
console.log(second);
console.log(others);

const user = {
  name: "Anaya",
  age: 21,
  address: { city: "Jaipur", pincode: "302001" }
};
const { name, age: userAge, address: { city } } = user;
console.log(name);      
console.log(userAge);   
console.log(city);     

//========================================================================================================================

//TASK 3
function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3));           
console.log(sumAll(10, 20, 30, 40));    
console.log(sumAll());                  

function joinNames(separator, ...names) {
  return names.join(separator);
}

console.log(joinNames(", ", "Priya", "Aarav", "Riya"));

//===============================================================================================================================================

//BONUS TASK
const defaults = { theme: "light", lang: "en", notifications: true };
const userPrefs = { theme: "dark", fontSize: 16 };

const merged = { ...defaults, ...userPrefs };
console.log(merged);

function applyPrefs(defaults, prefs) {
  return { ...defaults, ...prefs };
}
const result = applyPrefs(defaults, userPrefs);
console.log(result);