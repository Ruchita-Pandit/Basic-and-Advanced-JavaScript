/*function tryCatchPrac(){
try{
    const data = JSON.parse('{"name":"Priya"');   // missing closing brace
console.log(data);
}
catch(err){
    console.log("Couldnt parse: ",err.message);
}
console.log("App Keep running");
}

tryCatchPrac();*/

/*try {
  null.foo;
} catch (err) {
  console.log(err.message);   // "Cannot read properties of null (reading 'foo')"
  console.log(err.name);      // "TypeError"
  console.log(err.stack);     // long debug trace — function call chain
}

// Branch on the kind of error
try {
  riskyOperation();
} catch (err) {
  if (err.name === "TypeError") {
    console.log("Fix the data shape");
  } else if (err.name === "SyntaxError") {
    console.log("Fix the input format");
  } else {
    console.log("Something else:", err.message);
}
}*/

/*function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));    // 5
  console.log(divide(10, 0));    // throws
} catch (err) {
  console.log("Caught:", err.message);
}
*/

    class ValidationError extends Error {

      constructor(message) {

        super(message);

        this.name = "ValidationError";
      }
    }

    function setEmail(email) {

      if (!email.includes("@")) {

        throw new ValidationError("Invalid email format");
      }

      return email;
    }

    function checkEmail() {

      const email =
        document.getElementById("email").value;

      const output =
        document.getElementById("output");

      try {

        const result = setEmail(email);

        output.innerText =
          "Valid Email: " + result;

      } catch (err) {

        if (err instanceof ValidationError) {

          output.innerText =
            "Validation Failed: " + err.message;

        } else {

          output.innerText =
            "Unknown Error";
        }
      }
    }