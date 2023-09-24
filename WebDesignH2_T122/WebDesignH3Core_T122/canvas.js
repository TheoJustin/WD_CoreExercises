var canvas = document.querySelector('canvas');

// console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

let hx = canvas.width/2;
let hy = canvas.height/2;


ctx.beginPath();
ctx.fillStyle = "black";
ctx.beginPath();
ctx.roundRect(hx-260, 20, 490, 30, 20);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.roundRect(hx+160, 75, 70, 25, 5);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.roundRect(hx+160, 580, 70, 25, 5);
ctx.stroke();
ctx.fill();


ctx.font = "15px Arial";
ctx.fillStyle = "black";
ctx.fillText("05 : 00", 857, 95);

ctx.font = "15px Arial";
ctx.fillStyle = "black";
ctx.fillText("05 : 00", 857, 600);


let newImage = new Image();
newImage.src = '/assets/assets/black-player.jpg';
newImage.onload = () => {
    ctx.drawImage(newImage, 425, 65, 40, 40);
}

let newImage2 = new Image();
newImage2.src = '/assets/assets/white-player.jpeg';
newImage2.onload = () => {
    ctx.drawImage(newImage2, 425, 570, 40, 40);
}

ctx.font = "15px Arial";
ctx.fillStyle = "white";
ctx.fillText("Wise Viking", 470, 100);

ctx.font = "15px Arial";
ctx.fillStyle = "white";
ctx.fillText("Raven Cyborg", 470, 605);

ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.fillText("new game", 625, 40);

let c = 1;
let x = canvas.width/8 - 110;
let y = canvas.height/8 - 25;
for(let a = 2; a<10; a++){
    for(let b = 7; b<15; b++){
        ctx.beginPath();
        ctx.lineWidth = "2";
        if(c % 2 == 1){
            ctx.fillStyle = "#769656";
            ctx.strokeStyle = "#769656";
            c--;
        }
        else if(c % 2 == 0){
            ctx.fillStyle = "#eeeed2";
            ctx.strokeStyle = "#eeeed2";
            c++;
        }
        ctx.fillRect(x*b, y*a, x, y);
        ctx.rect(x*b, y*a, x, y);
        ctx.stroke();
    }
    c++;
}





for(let i = 0; i<8; i++){
    let newImage3 = new Image();

    newImage3.onload = () => {
        ctx.drawImage(newImage3, 430 + (60 * i), 450, 50, 50);
    }

    newImage3.src = '/assets/assets/bp.png';
}

for(let i = 0; i<8; i++){
    let newImage3 = new Image();

    newImage3.onload = () => {
        ctx.drawImage(newImage3, 430 + (60 * i), 510, 50, 50);
    }
    if(i == 0 || i == 7){
        newImage3.src = '/assets/assets/br.png';
    }else if(i == 1 || i == 6){
        newImage3.src = '/assets/assets/bn.png';
    }else if(i == 2 || i == 5){
        newImage3.src = '/assets/assets/bb.png';
    }else if(i == 3){
        newImage3.src = '/assets/assets/bq.png';
    }else{
        newImage3.src = '/assets/assets/bk.png';
    }
}


for(let i = 0; i<8; i++){
    let newImage3 = new Image();

    newImage3.onload = () => {
        ctx.drawImage(newImage3, 430 + (60 * i), 170, 50, 50);
    }

    newImage3.src = '/assets/assets/wp.png';
}

for(let i = 0; i<8; i++){
    let newImage3 = new Image();

    newImage3.onload = () => {
        ctx.drawImage(newImage3, 430 + (60 * i), 110, 50, 50);
    }
    if(i == 0 || i == 7){
        newImage3.src = '/assets/assets/wr.png';
    }else if(i == 1 || i == 6){
        newImage3.src = '/assets/assets/wn.png';
    }else if(i == 2 || i == 5){
        newImage3.src = '/assets/assets/wb.png';
    }else if(i == 3){
        newImage3.src = '/assets/assets/wq.png';
    }else{
        newImage3.src = '/assets/assets/wk.png';
    }
}

// function createBoard(){
//     let theo = document.getElementById('chessTile');
//     for(let i = 0; i<64;i++){
//         let color;
//         if(Math.floor(i/8)%2==0){
//             color = (i%2==0) ? "green" : "white";
//         }
//         else{
//             color = (i%2==1) ? "green" : "white";
//         }
//         theo.innerHTML += `<div class="board-grid ${color}" id="${i}"></div>`
//     }
// }
// createBoard();
