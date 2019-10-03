class TRex {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.yspeed = 0
    }

    update(gravity) {
        this.y -= this.yspeed
        if (this.y < canvas.height - 80) {
            this.yspeed += gravity
        } else if (this.y === canvas.height - 80) {
            this.yspeed = 0
        }

    }

    show() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}