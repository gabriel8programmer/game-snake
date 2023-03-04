
import Game from "./class/Game.js"

//event load of page
window.addEventListener("load", () => {

  //object canvas
  const canvas = document.getElementById("canvas")

  //teste if the browser is running the canvas
  if (canvas.getContext) {
    //create a context 2d with canvas
    const ctx = canvas.getContext("2d")
    const game = new Game()
    game.run(ctx)
  }

})