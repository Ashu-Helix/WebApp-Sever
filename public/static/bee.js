const canvas = document.getElementById('sprite');
const ctx = canvas.getContext('2d');
canvas.width = 4000;
canvas.height = 2250;

var ctr = 0;
const keys = [];
var then = Date.now();
var up_running = false;
var down_running = false;
var left_running = false;
var right_running = false;
var carrot_eating_running = false;
var carrot_available = true;
var move_distance = 5;
var player_visit_history = [];
const player = {
    x: 250,
    y: 750,
    width: 274, //4110 / 15
    height: 152, //305 / 2
    frameX: 0,
    frameY: 0,
    speed: 60,
    moving: false,
    display_factor: 0.3,

};
const box1 = {
    x: 0,
    y: 0,
    width: 4000,
    height: 2000
}
const box2 = {
    x: 0,
    y: 3800,
    width: 4000,
    height: 200
}

const factory = {
    x: 3500,
    y: 2000,
    width: 800,
    height: 1800
}
const home = {
    x: 0,
    y: 2000,
    width: 1000,
    height: 1800,
}

const playerSprite = new Image();
playerSprite.src = "http://localhost:7001/images/Bee Sprite.png";

const bg = new Image();
bg.src = "http://localhost:7001/images/Bee Background.png";


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW * 10, dH * 10);
}


bg.onload = function () {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * player.display_factor, player.height * player.display_factor);
}

drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * player.display_factor, player.height * player.display_factor);

function reset_output() {
    if (!(up_running || down_running || left_running || right_running || carrot_eating_running)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
        player_visit_history = [];
        player.x = 250;
        player.y = 750;
        player.frameX = 0;
        player.frameY = 0;
        carrot_available = true;
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * player.display_factor, player.height * player.display_factor);
    }

}


function handlePlayerFrame() {
    if (player.frameX < 14 && player.moving) player.frameX++;
    else player.frameX = 0;
}


function collect_nectar() {
    move_distance = 40;
    const anim = requestAnimationFrame(function () { collect_nectar() });
    if (!(up_running || down_running || right_running || carrot_eating_running)) {
        if (Date.now() - then > 70) {
            left_running = true;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
            drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * player.display_factor, player.height * player.display_factor);
            ctr += 1;
            if (ctr > move_distance || player.x < -10) {
                ctr = 0;
                cancelAnimationFrame(anim);
                player.moving = false;
                left_running = false;
                return;
            }
            player.frameY = 0;
            player.moving = true;
            handlePlayerFrame();
            then = Date.now();
        }
    }

}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


function goto_hive() {
    move_distance = 43;
    const anim = requestAnimationFrame(function () { goto_hive() });
    if (!(up_running || down_running || right_running || carrot_eating_running)) {
        if (Date.now() - then > 70) {
            left_running = true;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
            drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * player.display_factor, player.height * player.display_factor);
            ctr += 1;
            if (ctr > move_distance || player.x < -10) {
                ctr = 0;
                cancelAnimationFrame(anim);
                player.moving = false;
                left_running = false;
                return;
            }
            player.x -= player.speed;
            player.y = 650;
            player.frameY = 1;
            player.moving = true;
            handlePlayerFrame();
            then = Date.now();
        }
    }

}

function goto_flower() {
    move_distance = 45;
    const anim = requestAnimationFrame(function () { goto_flower() });
    if (!(up_running || left_running || down_running || carrot_eating_running)) {
        if (Date.now() - then > 70) {
            right_running = true;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
            drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * player.display_factor, player.height * player.display_factor);
            ctr += 1;
            if (ctr > move_distance || player.x > canvas.width - player.width * player.display_factor + 10) {
                ctr = 0;
                cancelAnimationFrame(anim);
                player.moving = false;
                right_running = false;
                if (player.x > canvas.width - player.width * player.display_factor + 10) alert("End of screen!")
                return;
            }
            player.x += player.speed;
            player.frameY = 0;
            player.moving = true;
            handlePlayerFrame();
            then = Date.now();
        }
    }

}

export { goto_flower, goto_hive, sleep, reset_output, collect_nectar } 
