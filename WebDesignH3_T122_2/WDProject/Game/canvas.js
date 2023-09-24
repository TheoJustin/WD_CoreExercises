var canvas = document.querySelector('canvas');

console.log(canvas);

const spriteSheet = new Image();
spriteSheet.src = '../Assets/Noelle.png';
const frameWidth = 45;
const frameHeight = 45;
const totalFrames = 160;
const framesPerRow = 10;

backgroundMusic.play();
backgroundMusic.volume = 1;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

let currentFrame = 0;
let animationInterval;


let canvasX = canvas.width;
let canvasY = canvas.height;

function drawFrame() {
    const startColumn = 2;
    const endColumn = 5;
    const currentColumn = startColumn + (currentFrame % (endColumn - startColumn + 1));

    const currentRow = 9;

    const frameX = currentColumn * frameWidth;
    const frameY = currentRow * frameHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvasX -= 30;

    if (canvasX <= -frameWidth * 10) {
        canvasX = canvas.width;
    }

    ctx.drawImage(spriteSheet, frameX, frameY, frameWidth, frameHeight, canvasX, canvasY-550, frameWidth * 3, frameHeight * 3);
}

function startAnimation() {

    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();

    animationInterval = setInterval(() => {
        currentFrame = (currentFrame + 1) % totalFrames;
        drawFrame();
    }, 100);
}

function stopAnimation() {

    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;

    clearInterval(animationInterval);
}

spriteSheet.onload = () => {
    startAnimation();
};