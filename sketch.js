// TODO:
//      - How to update the canvas
//      - Create a setup function for the canvas setup
// IDEAS:
//      - https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
//      - https://www.sitepoint.com/quick-tip-game-loop-in-javascript/

let canvas = document.querySelector("#canvas")


ctx = canvas.getContext('2d')

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let trex = new TRex(10, canvas.height - 80, 50, 80) // TRex initial arguments: x, y, width, height
trex.show()



document.addEventListener('keypress', (e) => {
    if (e.keyCode == 32) {
        trex.update()
    }
})

