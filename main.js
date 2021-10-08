canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
greencar_width = 75;
greencar_height = 100;
greencar_x = 25;
greencar_y = 225; 
function add() {
background_imgTag = new Image ();
background_imgTag .onload = uploadBackground;
background_imgTag.src = background_image;
greencar_imgTag = new Image();
greencarm_imgTag.onload = uploadgreencar;
greencar_imgTag.src = greencar_image;
} 
function uploadBackground() {
    ctx. drawImage(background_imgTag, 0 ,0 , canvas.width, canvas.height);
}
function uploadBackground() {
ctx.drawImage(greencar_imgTag, greencar_x,greencar_y,greencar_width, greencar_height);
}
function up()
{
    if(greencar_y >=0)
    {
        greencar_y -10;
        console.log("when up arrow is pressed, x = " + greencar_x + "| y = " + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed =e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
}

