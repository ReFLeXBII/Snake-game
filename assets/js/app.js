// const canvas = document.querySelector('#game');
// const ctx = canvas.getContext("2d");

// const ground = new Image();
// ground.src = "assets/images/minecraft.png";

// const foodImg = new Image();
// foodImg.src = "assets/images/apple.png";

// let box = 32;
// let score = 0;


// let food = {
//     x: Math.floor(Math.random() * 17 + 1) * box,
//     y: Math.floor(Math.random() * 15 + 3) * box,
// }

// let snake = [];
// snake[0] = {
//     x: 9 * box,
//     y: 10 * box,
// }

// document.addEventListener("keydown", direct);

// let direction;

// function direct(event) {
//     if(event.keyCode === 37 && direction != "right") {
//         direction = "left";
//     } else if (event.keyCode === 38 && direction != "down") {
//         direction = "up";
//     } else if (event.keyCode === 39 && direction != "left") {
//         direction = "right"
//     } else if (event.keyCode === 40 && direction != "up") {
//         direction = "down";
//     }
// }

// function eatTail(head, array) {
//     for (let i = 0; i < array.length; i++) {
//         if (head.x == array[i].x && head.y == array[i].y) clearInterval(game);
//     }
// }

// function drawGame() {
//     // ctx.drawImage(ground, 0, 0);
//     ctx.fillStyle = "green";
//     ctx.fillRect(0, 0, box * 19, box * 3);

//     ctx.fillStyle = "lime";
//     ctx.fillRect(0, 3 * box, box * 19, box * 19);
//     ctx.drawImage(foodImg, food.x, food.y);

//     for (let i = 0; i < snake.length; i++) {
//         ctx.fillStyle = i == 0 ? "red" : "green";
//         ctx.fillRect(snake[i].x, snake[i].y, box, box);
//     }

//     ctx.fillStyle = "black";
//     ctx.font = "50px Arial";
//     ctx.fillText(score, box * 9, box * 2);

//     let snakeX = snake[0].x;
//     let snakeY = snake[0].y;

//     if (snakeX == food.x && snakeY == food.y) {
//         score ++;
//         food = {
//             x: Math.floor(Math.random() * 17 + 1) * box,
//             y: Math.floor(Math.random() * 15 + 3) * box,
//         }
//     } else {
//         snake.pop();
//     }

//     if (snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17) clearInterval(game);

//     if (direction == "left") snakeX -= box;
//     if (direction == "right") snakeX += box;
//     if (direction == "up") snakeY -= box;
//     if (direction == "down") snakeY += box;

//     let newHead = {
//         x: snakeX,
//         y: snakeY,
//     }

//     eatTail(newHead, snake);

//     snake.unshift(newHead);
// }

// let game = setInterval(drawGame, 100);

const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');

const field = new Image();
field.src = "assets/images/minecraft.jpg";

const foodImg = new Image();
foodImg.src = "assets/images/diamond.png";

const gameOver = new Image();
gameOver.src = "assets/images/game-over.png";

let box = 32;
let score = 0;

let food = {
    x: Math.floor(Math.random() * 16) * box,
    y: Math.floor(Math.random() * 13 + 3) * box,
}

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

document.addEventListener("keydown", direct);

let direction;

function direct(event) {
    if (event.keyCode === 37 && direction !== "right") {
        direction = "left";
    } else if (event.keyCode === 38 && direction !== "down") {
        direction = "up";
    } else if (event.keyCode === 39 && direction !== "left") {
        direction = "right";
    } else if (event.keyCode === 40 && direction !== "up") {
        direction = "down";
    }
}

function eateTail(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) clearInterval(game);
    }
}

function drawGame() {
    context.drawImage(field, 0, 0);
    context.drawImage(foodImg, food.x, food.y);

    context.fillStyle = "black";
    context.font = "70px Arial";
    context.fillText(score, box * 7.4, box * 2); 

    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = i == 0 ? "black" : "red";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 16) * box,
            y: Math.floor(Math.random() * 13 + 3) * box,
        }
    } else snake.pop();

    if (snakeX < 0 || snakeX > 480 || snakeY < 96 || snakeY > 480) {
        context.drawImage(gameOver, box * 4, box * 4);
        clearInterval(game);  
    } 

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY,
    }

    eateTail(newHead, snake);

    snake.unshift(newHead);

}

let game = setInterval(drawGame, 100);