/*const btn = document.querySelector("#my-btn");
const input = document.querySelector("#name-input");

btn.addEventListener("click", e => {
  console.log(e.type);
});
input.addEventListener("input", e => {
  console.log(e.target.value);
});*/

//==================================================================================================================================================================

    // Form submit
    const form = document.querySelector("#login-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      console.log("Custom form handling here");
    });

    // Link click
    const link = document.querySelector("a");
    link.addEventListener("click", (e) => {
      e.preventDefault();

      console.log("Intercepted");
    });

    // Disable right click
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });