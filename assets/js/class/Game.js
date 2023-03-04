
import Rect from "./Rect.js"
import Apple from "./Snake.js"

class Game {

  constructor() {

    this.WIDTH = 300
    this.HEIGHT = 300
    this.FPS = 60
    this.SPEED = 2
    this.running = true

    this.direction = "right"

    this.start()
  }

  randint(limit) {
    return Math.round(Math.random() * limit + 1)
  }

  defineNewPositionApple() {
    //define position for object
    this.apple.x = this.randint(this.WIDTH)
    this.apple.y = this.randint(this.HEIGHT)
  }

  start() {

    //CREATE A NEW OBJECT FOR APPLE
    this.apple = new Rect(0, 0, 15, 15, "#a00")
    this.defineNewPositionApple()
  }

  renderObj(ctx, obj) {
    ctx.fillStyle = obj.color
    ctx.strokeStyle = "#fff"
    ctx.beginPath()
    ctx.rect(obj.x, obj.y, obj.width, obj.height)
    ctx.stroke()
    ctx.fill()
  }

  //render the game
  render(ctx) {

    //render obj apple
    this.renderObj(ctx, this.apple)
  }

  //get all events in game
  getEvents() {

    //event of keyboard
    addEventListener("keydown", (e) => {

      const key = e.key

      if (key === "ArrowRight") {
        this.direction = "right"
      }
      if (key === "ArrowLeft") {
        this.direction = "left"
      }
      if (key === "ArrowDown") {
        this.direction = "down"
      }
      if (key === "ArrowUp") {
        this.direction = "up"
      }

    })
  }

  //update the game
  update() {

  }

  //run the game
  run(ctx) {

    if (this.running) {
      setTimeout(() => {
        this.render(ctx)
        this.getEvents()
        this.update()
      }, 1000 / this.FPS)
    }

  }

}

export default Game