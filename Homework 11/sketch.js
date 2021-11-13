// character x and y
var x = 550;
var y = 50;
var charSpeed = 5;

// key codes
var w = 87;
var a = 65;
var s = 83;
var d = 68;

//big rect.
var bigRectangleX = 300;
var bigRectangleY = 50;
var bigRectangleXSpeed;
var bigRectangleYSpeed;

//small rect.
var smallRectangleX = 50;
var smallRectangleY = 300;
var smallRectangleXSpeed;
var smallRectangleYSpeed;

//mouseClick shape
var mouseEllipseX=700;
var mouseEllipseY=700;

function setup() {
  createCanvas(600, 600);
  
      // big rect. speed
    bigRectangleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    bigRectangleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
      // small rect. speed
    smallRectangleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    smallRectangleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw() {
  background(76, 102, 73); 
  
      //exit text
        fill(181, 201, 177);
        strokeWeight(2);
        stroke(0);
        textSize(20);
        text("Exit", 40, height-20);
  
  // mid-game and end-game text
    //end-game win
    if(x < 155 && x > 80 && y > height)
    {
        fill(181, 201, 177);
        strokeWeight(3);
        stroke(0);
        textSize(72);
        textAlign(CENTER);
        text("You Win!", width/2, height/3);
    }
  //mid-game instructions
      else
        {
        fill(181, 201, 177);
        strokeWeight(0);
        textSize(24);
        textAlign(LEFT);
        text("Instructions:", 20, 40);
        strokeWeight(2);
        stroke(181, 201, 177);
        line(20, 45, 150, 45);
          
        fill(181, 201, 177);
        strokeWeight(0);
        textSize(16);
        textAlign(LEFT);
        text("You are the white orb. Get to the exit.", 20, 70);
        text("Click anywhere to move the eye. Watch", 20, 90);
        text("out for the invisible speed zone columns.", 20, 110);
        }
  
  //character
  strokeWeight(1);
  stroke(0);
  fill(255);
  circle(x, y, 50);
  fill(76, 102, 73);
  circle(x, y, 40);
  fill(255);
  circle(x, y, 30);
  fill(76, 102, 73);
  circle(x, y, 10);
  
  // moving the character
if(keyIsDown(w)) 
{
  y -= charSpeed;
}
if(keyIsDown(a)) 
{
  x -= charSpeed;
}
if(keyIsDown(s)) 
{
  y += charSpeed;
}
if(keyIsDown(d)) 
{
  x += charSpeed;
}
  
 // character boundary limits
   
    if(y > height && x > 155)
    {
        y = 0;
    }
    if(y > height &&  x < 80)
    {
        y = 0;
    }
    if(x > width)
    {
        x = 0;
    }
    if(x < 0)
    {
        x = width;
    }

    else if(y < 0)
    {
        y = height;
    }
  
  /*
  character speed variations/invisible speed zones, for fun...? 
  (Actually just to use different conditional statements)
  */
  
  if(x>=0 && x<(width/3))
  {
    charSpeed = 10
  }
    else if(x >=(width/3) && x<(2*(width/3)))
     {
       charSpeed = 2
     }
    else
        {
          charSpeed = 5
        }
  
  //big rect.
  strokeWeight(1);
  stroke(0);
  fill(159, 225, 227);
  rect(bigRectangleX, bigRectangleY, 80, 50);
  
  //small rect.
  fill(32, 58, 74);
  rect(smallRectangleX, smallRectangleY, 20, 40);
  
      // big rect. movement
    bigRectangleX -= bigRectangleXSpeed;
    bigRectangleY -= bigRectangleYSpeed;
      //big rect. movement limits
    if(bigRectangleX > width)
    {
        bigRectangleX = 0;
    }
    if(bigRectangleX < 0)
    {
        bigRectangleX = width;
    }
    if(bigRectangleY > height)
    {
        bigRectangleY = 0;
    }
    if(bigRectangleY < 0)
    {
        bigRectangleY = height;
    }
  
  // small rect. movement
    smallRectangleX += smallRectangleXSpeed;
    smallRectangleY -= smallRectangleYSpeed;
  
      //small rect. movement limits
    if(smallRectangleX > width)
    {
        smallRectangleX = 0;
    }
    if(smallRectangleX < 0)
    {
        smallRectangleX = width;
    }
    if(smallRectangleY > height)
    {
        smallRectangleY = 0;
    }
    if(smallRectangleY < 0)
    {
        smallRectangleY = height;
    }
  
  //borders
  strokeWeight(0);
  fill(50, 61, 48);
    //left
  rect(0,0,10, height);
    //top
  rect(0,0,width, 10);
    //right
  rect(width-10,0,10, height);
    //bottom
  rect(0,height-10,80,10);
  rect(155,height-10,width-155,10);

//eyeball that appears when mouse is clicked  
  fill(250, 243, 237);
  strokeWeight(1);
ellipse(mouseEllipseX, mouseEllipseY, 35, 15);
  fill(38, 106, 135);
circle(mouseEllipseX, mouseEllipseY, 15);
  fill(0);
circle(mouseEllipseX, mouseEllipseY, 5);
  
}

function mousePressed()
{
mouseEllipseX=mouseX;
mouseEllipseY=mouseY;
}