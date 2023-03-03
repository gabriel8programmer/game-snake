
function render() {

  //object canvas
  const canvas = document.getElementById("canvas")

  //teste if the browser is running the canvas
  if (canvas.getContext) {
    //create a context 2d with canvas
    const ctx = canvas.getContext("2d")

    //simple test canvas
    ctx.fillStyle = "green"
    ctx.fillRect(10, 10, 100, 100)
  }

}

//event load of page
window.addEventListener("load", render)