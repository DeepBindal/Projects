let gameSeq = [];
let userSeq = [];
let level = 0;
let start = false;
let btns = ["yellow", "green", "red", "purple"];
let allBtns = document.querySelectorAll(".btn");
let h2 = document.querySelector("h2");
let body = document.querySelector("body");
let highScore = 0
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function btnPress(){
    let btn = this;
    buttonFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

document.addEventListener("keydown", () => {
    if (start == false) {
        start = true;
        console.log("game started");
        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randBtn = document.querySelector(`.${btns[randIdx]}`);
    gameSeq.push(btns[randIdx]);
    buttonFlash(randBtn);
    console.log(gameSeq);
}
function buttonFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000) 
        }
    }else{
        if(highScore < level){
            highScore = level;
        }
        h2.innerText = `Game Over. Your score is ${level} .Press any key to restart, Highest score is ${highScore}`;
        reset();
    }
}
function reset(){
    start = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
    body.classList.add("red");
        setTimeout(function(){
            body.classList.remove("red");
        }, 150);
}