const menu = document.querySelector(".navbar .container");
const bar = document.querySelector(".navbar .bar i");
const close = document.querySelector(".navbar .container .close");
body=document.body;
bar.addEventListener("click",()=>{
    menu.classList.add("active");
    body.style.overflowY="hidden";
});
close.addEventListener("click",()=>{
    menu.classList.remove("active");
    body.style.overflowY="scroll";
})
