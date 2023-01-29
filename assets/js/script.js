

//classes
class Game {

  WIDTH = 400
  HEIGHT = 400
  FPS = 60
  score = 0

  constructor(element) {
    this.element = element
  }

  randint(initial, rand) {
    return Math.round(Math.random() * rand) + initial
  }

  defineNewApple() {
    this.apple.x = this.randint(0, this.WIDTH - 21)
    this.apple.y = this.randint(0, this.HEIGHT - 21)
    this.apple.update()
  }

  //init the game
  start() {

    this.apple = new Apple(document.getElementById("apple"))

    //define position fo apple
    this.defineNewApple()

    //define position of the snake
    const snakeX = (this.WIDTH / 2) - 10
    const snakeY = (this.HEIGHT / 2) - 10
    this.snake = new Snake(document.getElementById("snake"), snakeX, snakeY)

    this.snake.render(this.element)

    this.snake.update()

    //run
    this.run()

  }

  snakeExitedScreenX() {
    //if snake exited of the screen in axis x
    if (this.snake.x < 0 ||
      this.snake.x > this.WIDTH - 20) {
      return true
    }
    return false
  }

  snakeExitedScreenY() {
    //if snake exited of the screen in axis y
    if (this.snake.y < 0 ||
      this.snake.y > this.HEIGHT - 20) {
      return true
    }
    return false
  }

  moveScreenInStartScreen(x, y) {

    //test position in x
    if (x < 0) {
      this.snake.x = (this.WIDTH - 20)
    }
    else if (x > (this.WIDTH - 20)) {
      this.snake.x = 0
    }

    //test position in y
    if (y < 0) {
      this.snake.y = (this.HEIGHT - 20)
    }
    else if (y > (this.HEIGHT - 20)) {
      this.snake.y = 0
    }

  }

  update() {

    //move the snake
    this.snake.move()
    this.snake.update()

    //test position of screen
    if (this.snakeExitedScreenX() ||
      this.snakeExitedScreenY()) {
      this.moveScreenInStartScreen(this.snake.x,
        this.snake.y)
    }

    //click and buttons 
    window.addEventListener("keydown", (e) => {
      const key = e.key

      if (key === "ArrowRight") {
        this.snake.direction = 0
      }

      if (key === "ArrowLeft") {
        this.snake.direction = 1
      }

      if (key === "ArrowDown") {
        this.snake.direction = 2
      }

      if (key === "ArrowUp") {
        this.snake.direction = 3
      }
    })

  }

  run() {

    setInterval(() => {
      this.update()
    }, 1000 / this.FPS)

  }

}

class Snake {

  //directions
  //d0 - right //d1 - left // d2 - down //d3 - up
  direction = 3

  dx = 0
  dy = 0

  SPEED = 2

  constructor(element, x, y) {

    this.element = element
    this.elements = []
    this.elements.push(this.element)

    this.x = x
    this.y = y

    this.initX = this.x
    this.initY = this.y
  }

  render(screen) {

    this.elements.map(element => {
      screen.appendChild(element)
    })

  }

  update() {
    //element position
    this.element.style.left = `${this.x}px`
    this.element.style.top = `${this.y}px`
  }

  move() {

    this.dx = 0
    this.dy = 0

    if (this.direction === 0) {
      this.dx += 1
    }

    else if (this.direction === 1) {
      this.dx -= 1
    }

    else if (this.direction === 2) {
      this.dy += 1
    }

    else if (this.direction === 3) {
      this.dy -= 1
    }

    //move the snake
    this.x += (this.dx * this.SPEED)
    this.y += (this.dy * this.SPEED)

  }


}

class Apple {

  x = 0
  y = 0

  constructor(element) {

    this.element = element
  }

  update() {
    //element position
    this.element.style.left = `${this.x}px`
    this.element.style.top = `${this.y}px`
  }

}

window.addEventListener("load", () => {
  const game = new Game(document.querySelector(".container"))
  game.start()
})