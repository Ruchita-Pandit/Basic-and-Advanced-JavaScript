    /*const btn = document.querySelector("#my-btn");

    btn.addEventListener("click", () => {
      console.log("Button clicked!");
    });

    // Multiple listeners
    btn.addEventListener("click", () => {
      console.log("Second handler also fires");
    });*/

//============================================================================================================================================================================================================

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

//========================================================================================================================================================================================

    /*// Form submit
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
    });*/

//============================================================================================================================================================================================================================================

/*const box = document.querySelector("#box");
box.addEventListener("click",        () => console.log("click"));
box.addEventListener("dblclick",     () => console.log("double click"));
box.addEventListener("mouseover",    () => box.classList.add("hover"));
box.addEventListener("mouseout",     () => box.classList.remove("hover"));
box.addEventListener("contextmenu",  (e) => {
  e.preventDefault();
  console.log("right-clicked at", e.clientX, e.clientY);
});*/

//============================================================================================================================================================================================================================================

const input = document.querySelector("#search");

// LIVE — best for "as you type" updates
input.addEventListener("input", (e) => {
  console.log("Value now:", e.target.value);
});

// Specific keys
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Search:", e.target.value);
  }
  if (e.key === "Escape") {
    e.target.value = "";
  }
});

// Modifier keys
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();   // override browser save
    console.log("Custom save");
  }
});

//====================================================================================================================================================================================================================================================================

/*// WITHOUT delegation — one listener per item, repeated work
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
list.appendChild(newLi);*/