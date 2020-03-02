const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

let width = height = 600

let floor = {
    y: 550,
    height: 50,
    color: "#ffdf70",
    draw() {
        context.fillStyle = this.color
        context.fillRect(0, this.y, width, this.height)
    }
}

let player = {
    x: 80,
    y: 0,
    width: 50,
    height: 50,
    color: "red",
    gravity: 1.5,
    velocity: 0,
    jumpForce: 25,

    update() {
        this.velocity += this.gravity
        this.y += this.velocity

        if (this.y > floor.y - this.height)
            this.y = floor.y - this.height
    },
    jump() {
        this.velocity = -this.jumpForce
    },
    draw() {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}

function jump(event) {
    const keyName = event.key;
    if (keyName == "ArrowUp" || event.keyCode == 32)
        player.jump()
}
function main() {
    window.addEventListener("keydown", jump)
    play()
}
function play() {
    update()
    draw()

    window.requestAnimationFrame(play)
}
function update() {
    player.update()
}
function draw() {
    context.fillStyle = "lightblue"
    context.fillRect(0, 0, width, height)

    floor.draw()
    player.draw()
}

main()