let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext('2d')
let FPS = 60

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

setInterval(() => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw()
}, (1000 / FPS))