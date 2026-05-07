    /*const btn = document.querySelector("#my-btn");

    btn.addEventListener("click", () => {
      console.log("Button clicked!");
    });

    // Multiple listeners
    btn.addEventListener("click", () => {
      console.log("Second handler also fires");
    });*/

//========================================================================================================================================================================================

/*const btn = document.querySelector("#my-btn");

btn.addEventListener("click", (e) => {
  console.log(e.type);                  // "click"
  console.log(e.target);                // button element
  console.log(e.target.textContent);    // button text
  console.log(e.clientX, e.clientY);    // mouse coordinates
});

// Input event
const input = document.querySelector("#name-input");

input.addEventListener("input", (e) => {
  console.log("User typed:", e.target.value);
});

// Keyboard event
document.addEventListener("keydown", (e) => {
  console.log("Pressed:", e.key);
});*/

//============================================================================================================================================================================================================================================

// WITHOUT delegation — one listener per item, repeated work
// document.querySelectorAll("#todo-list li").forEach(li => {
//   li.addEventListener("click", () => {
//     li.classList.toggle("done");
//   });
// });

// WITH delegation — ONE listener on the parent
const list = document.querySelector("#todo-list");

list.addEventListener("click", (e) => {
  // Was the click on an <li>?
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
    console.log("Toggled item", e.target.dataset.id);
  }
});

// Now even items added LATER work — no extra wiring
const newLi = document.createElement("li");
newLi.textContent = "Brand new task";
newLi.dataset.id = "4";
list.appendChild(newLi);