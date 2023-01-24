

//classes

class Game {

  WIDTH = 400
  HEIGHT = 400
  FPS = 60

  randint(rand) {
    return Math.round(Math.random() * (rand + 1))
  }

  //init the game
  start() {

    //define position of the apple
    this.apple = new Apple(document.getElementById("apple"))
    this.apple.x = this.randint(this.WIDTH - 20)
    this.apple.y = this.randint(this.HEIGHT - 20)
    this.apple.update()

    //define position of the snake
    this.snake = new Snake(document.getElementById("snake"))

    //define initial position
    this.snake.initialXY = [

      [(this.WIDTH / 2) - 10, (this.HEIGHT / 2) - 10],
      [(this.WIDTH / 2) - 10, (this.HEIGHT / 2) - 10 + 20],
      [(this.WIDTH / 2) - 10, (this.HEIGHT / 2) - 10 + 40]

    ]

    //attribute position initial
    this.snake.pos = this.snake.initialXY
    this.snake.update()

    //run
    //this.run()
  }

  update() {

  }

  run() {

    setInterval(() => {
    }, 1000 / this.FPS)

  }

}

class Snake {

  initialXY = [[], [], []]
  pos = [[], [], []]

  constructor(element) {

    this.element = element
    this.elements = []
    this.elements.push(this.element)

  }

  addElement() {
    const element = this.element
    this.elements.push(element)
  }

  update() {
    this.element.style.left = `${this.x}px`
    this.element.style.top = `${this.y}px`
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
  const game = new Game()
  game.start()
})