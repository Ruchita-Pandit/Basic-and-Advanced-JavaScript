    const btn = document.querySelector("#my-btn");

    btn.addEventListener("click", () => {
      console.log("Button clicked!");
    });

    // Multiple listeners
    btn.addEventListener("click", () => {
      console.log("Second handler also fires");
    });