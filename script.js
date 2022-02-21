const canvas = document.getElementById("canvas1"); 
const c = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
//changes scrolling speed 
let gameSpeed = 15;

const backgroundLayer1 = new Image();
backgroundLayer1.src = "/assets/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "/assets/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "/assets/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "/assets/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "/assets/layer-5.png";

//x moves the image along the x axis
let x = 0; 
let x2 = 2400; 

function animate(){
    //clears canvas; deletes old animation frames
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
    //drawImage(image, x, y)
    c.drawImage(backgroundLayer4, x, 0);
    c.drawImage(backgroundLayer4, x2, 0); 
    //attaches gameSpeed to x/horizontal movement
    //detect when an image moves offscreen and resets to scroll again
    if (x < -2400) x = 2400 + x2 - gameSpeed; 
    else x -= gameSpeed; 
    if (x2 < -2400) x2 = 2400 + x - gameSpeed;
    else x2 -= gameSpeed; 
    requestAnimationFrame(animate);
}; 
animate(); 