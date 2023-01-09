let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let reset = document.querySelector(".reset");
let head = document.querySelector("h1");
let i = 0;
button1.addEventListener("click", () => {
    head.innerHTML = ++i;
});
button2.addEventListener("click", () => {
    --i;
    i < 0 ? i = 0 : i;
    head.innerHTML = i
});
reset.addEventListener("click", () => {
    head.innerHTML = 0;
    i = 0;
})
