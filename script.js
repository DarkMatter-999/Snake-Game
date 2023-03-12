const viewport = document.getElementById("viewport");

const context = viewport.getContext("2d");

const SPEED = 10;

// Setup
const drawScreen = () => {
    clearScreen();
    drawGame();
};

const clearScreen = () => {
    context.fillStyle = "black";
    context.fillRect(0, 0, viewport.width, viewport.height);
};

// Loop
const drawGame = () => {
    clearScreen();
    drawSnake();
    changeSnakePosition();
    console.log("here");
    setTimeout(drawGame, 1000 / SPEED);
};

const tileCount = 20;
const tileSize = 18;
let headX = 10;
let headY = 10;

let xvel = 0;
let yvel = 0;

document.body.addEventListener("keydown", keyDown);

function keyDown(event) {
    //up
    if (event.keyCode == 38) {
        yvel = -1; //move one tile up
        xvel = 0;
    }
    //down
    if (event.keyCode == 40) {
        yvel = 1; //move one tile down
        xvel = 0;
    }

    //left
    if (event.keyCode == 37) {
        yvel = 0;
        xvel = -1; //move one tile left
    }
    //right
    if (event.keyCode == 39) {
        yvel = 0;
        xvel = 1; //move one tile right
    }
}

const drawSnake = () => {
    context.fillStyle = "orange";
    context.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
};

function changeSnakePosition() {
    headX = headX + xvel;
    headY = headY + yvel;
}

drawScreen();
