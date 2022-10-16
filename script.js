let cartoon = {
    canvas: undefined,
    canvasContext: undefined,
    rectanglePostion: 0
}
//global counters
var cloudCounter = 1
var leaveCounter = 0

var nameText = "Example Text"
var colorBackground = "white"
var colorText = "black"
var fontRange = 40
var font = 'arial'


//the start function
cartoon.start = function () {
    cartoon.canvas = document.getElementById('mycanvas')
    cartoon.canvasContext = cartoon.canvas.getContext("2d");
    cartoon.mainLoop();
}
//Manipulates the DOM with the start function
document.addEventListener('DOMContentLoaded', cartoon.start);

//clears the canvas
cartoon.clearCanvas = function () {
    cartoon.canvasContext.clearRect(0, 0, cartoon.canvas.width, cartoon.canvas.height);
};
//mainLoop that is infinite
cartoon.mainLoop = function () {
    cartoon.clearCanvas();
    cartoon.update();
    cartoon.draw();
    window.setTimeout(cartoon.mainLoop, 1000 / 100);
};
//update function that moves the clouds and trees
cartoon.update = function () {

    
};




//function that draws the background
cartoon.drawBackground = () => {
    let ctx = cartoon.canvasContext
    let lg = colorBackground
    
    cartoon.canvasContext.fillStyle = lg;
    cartoon.canvasContext.fillRect(0, 0, cartoon.canvas.width, cartoon.canvas.height);


    //text written in the canvas
    let txt = "Example text"

    ctx.font = `${fontRange}px ${font}`;
    ctx.fillStyle = colorText;
    ctx.textAlign = "center";
    ctx.fillText(nameText,cartoon.canvas.width/2, cartoon.canvas.height/2);
}
//the main draw function
cartoon.draw = function () {

    cartoon.drawBackground()

    

};
function change(){
    var inputName = document.getElementById('name');
    var inputBackground = document.getElementById('backgroundColor');
    var inputTextColor = document.getElementById('textColor');
    var inputFontSize =  document.getElementById('myRange');
    
    // var inputFont = document.getElementById('pac');
    // var inputFont2 = document.getElementById('arial');
    // var inputFont3 = document.getElementById('roboto');


    nameText = inputName.value
    colorBackground = inputBackground.value
    colorText = inputTextColor.value
    fontRange = inputFontSize.value
    // font = inputFont.value
    // font = inputFont2.value
    // font = inputFont3.value

    cartoon.draw()

    console.log(font)
    

   
}
function fontVal(val){
    font = val
    console.log(font)
}