const viewport = document.getElementById("viewport");

const context = viewport.getContext("2d");

const SPEED = 10;
let Score = 0;

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
    changeSnakePosition();

    clearScreen();

    drawSnake();
    checkCollision();
    drawFood();
    drawScore();

    setTimeout(drawGame, 1000 / SPEED);
};

const tileCount = 20;
const tileSize = 18;
let headX = 10;
let headY = 10;

let xvel = 0;
let yvel = 0;

const snake = [];
let tailLength = 2;

class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

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

    for (let i = 0; i < snake.length; i++) {
        const part = snake[i];
        context.fillRect(
            part.x * tileCount,
            part.y * tileCount,
            tileSize,
            tileSize
        );
    }

    // add new node and delete the last node
    snake.push(new Snake(headX, headY));
    if (snake.length > tailLength) {
        snake.shift();
    }
};

function changeSnakePosition() {
    headX = headX + xvel;
    headY = headY + yvel;
}

let foodX = Math.floor(Math.random() * tileCount);
let foodY = Math.floor(Math.random() * tileCount);

const drawFood = () => {
    context.fillStyle = "red";
    context.fillRect(foodX * tileCount, foodY * tileCount, tileSize, tileSize);
};

const checkCollision = () => {
    if (foodX == headX && foodY == headY) {
        foodX = Math.floor(Math.random() * tileCount);
        foodY = Math.floor(Math.random() * tileCount);
        tailLength++;
        Score++;
    }
};

const drawScore = () => {
    context.fillStyle = "white";
    context.font = "10px verdena";
    context.fillText("Score: " + Score, 5, 10);
};

drawScreen();
