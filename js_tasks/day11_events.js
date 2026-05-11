const btn = document.querySelector("#counter-btn");
btn.addEventListener("click", () => {
      console.log("Button clicked!");
});
const countSpan = document.querySelector("count");
let count =0;
btn.addEventListener("click",()=>{
    count++
    countSpan.textContent=count;

    //bonus
    if(count>=10){
        btn.textContent="Stop Clicking";
    }
});