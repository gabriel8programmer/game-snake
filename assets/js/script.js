

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
    this.apple.x = this.randint(0, this.WIDTH - 20)
    this.apple.y = this.randint(60, this.HEIGHT - 20 - 60)
    this.apple.update()
  }

  //init the game
  start() {

    this.apple = new Apple(document.getElementById("apple"))

    //define position fo apple
    this.defineNewApple()

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

    this.snake.update(this.element)

    //run
    this.run()
  }

  update() {

    window.addEventListener("keydown", (e) => {
      this.defineNewApple()
    })

  }

  run() {

    setInterval(() => {
      this.update()
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

    const element = document.createElement("div")
    element.setAttribute("class", "snake-pos")
    this.elements.push(element)
  }

  update(screen) {

    //count positions in array and add other element
    for (let c = 1; c < this.pos.length; c++) { this.addElement() }

    this.elements.map(element => {
      screen.appendChild(element)
    })

    this.elements.map((element, index) => {
      element.style.left = `${this.pos[index][0]}px`
      element.style.top = `${this.pos[index][1]}px`
    })

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
  const game = new Game(document.getElementById("game"))
  game.start()
})