let ucBtn = document.querySelector("#uc");
let lcBtn = document.querySelector("#lc");
let rsBtn = document.querySelector("#rs");
let rlBtn = document.querySelector("#rl");
let inp = document.querySelector("#input");
let out = document.querySelector("#output");
let p = document.querySelector(".ch-count")
let wordCount = document.querySelector(".word-count");
let charCount = document.querySelector(".char-count");
inp.addEventListener("input", (event) => {
    let str = inp.value;
    charCount.innerText = str.length;
    wordCount.innerText = str.trim().split(" ").length;

})
ucBtn.addEventListener("click", (event)=>{
    let str = inp.value;
    out.value = str.toUpperCase();
})
lcBtn.addEventListener("click", (event)=>{
    let str = inp.value;
    out.value = str.toLowerCase();
})
rsBtn.addEventListener("click", (event)=>{
    let str = inp.value;
    out.value = str.replace(/\s+/g,' ').trim();
})
rlBtn.addEventListener("click", (event)=>{
    let str = inp.value;
    out.value = str.replace(/\n+/g,'\n').trim();
})
