const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus")
document.addEventListener("keydown", function (event) { 
    if (event) {
        startGame();
    }
});
document.addEventListener("touchstart", function (event) { 
    if (event) {
        startGame();
    }
});
function jump() {
    if (dino.classList != "jump"){
    dino.classList.add("jump");

    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300);
}
}

function startGame() {
    jump();

}
let isAlive = setInterval(function () {
    
    //get current dino position on y axis
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    //get current cactus position on x axis
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    
    //detect collision
    if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140){
        window.open('gameOver.html', '_self');
    }
}, 10);




