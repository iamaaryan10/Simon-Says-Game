let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

let highScore = 0;

let h3 = document.querySelector("h3");

function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        if(highScore < level){
            highScore = level;
        }
        
        h3.innerText = `High Score : ${highScore}`;
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br></br> Presss any key to start.`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "aqua"
        },250)
        reset();
    }

}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns) {
    btn.addEventListener("click", btnPress); 
}

function reset() {
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
}









