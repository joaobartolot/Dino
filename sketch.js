// TODO:
//      - How to update the canvas
//      - Create a setup function for the canvas setup
// IDEAS:
//      - https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
//      - https://www.sitepoint.com/quick-tip-game-loop-in-javascript/


let g = -3

let trex = new TRex(10, canvas.height - 80, 50, 80) // TRex initial arguments: x, y, width, height

function draw() {
    trex.show()
    trex.update(g)
}


document.addEventListener('keypress', (e) => {
    if (e.keyCode == 32) {
        if (trex.yspeed === 0) {
            trex.yspeed = 30
        }
    }
})
