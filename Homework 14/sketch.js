//-------------UNIVERSAL VARIABLES------------//

// character x and y
var x = 550;
var y = 50;
var charSpeed = 5;

// key codes
var w = 87;
var a = 65;
var s = 83;
var d = 68;

//Rectangle Obstacle Array Variables

var rectangleXs = [];
var rectangleYs = [];

var rectangleLengths = [];
var rectangleHeights = [];

var rectangleXSpeeds = [];
var rectangleYSpeeds = [];

//mouseClick shape
var mouseEllipseX=700;
var mouseEllipseY=700;

//amount of rectangles
var navyRectAmt=10;
var lightRectAmt=5;


//-----------SETUP----------//

function setup() 
{
   createCanvas(600, 600);
  
// Shape randomization 
      //dark blue rectangles
  for (var i = 0; i < navyRectAmt; i++) 
    {
        rectangleXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        rectangleYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);  
      
        rectangleXs[i] = getRandomNumber(580);
        rectangleYs[i] = getRandomNumber(580);
      
        rectangleLengths[i] = getRandomNumber(60);
        rectangleHeights[i] = getRandomNumber(60);
      
    }
      //light blue rectangles 
  for (var j = 0; j < lightRectAmt; j++) 
    {
        rectangleXSpeeds[j] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        rectangleYSpeeds[j] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);  
      
        rectangleXs[j] = getRandomNumber(580);
        rectangleYs[j] = getRandomNumber(580);
      
        rectangleLengths[j] = getRandomNumber(60);
        rectangleHeights[j] = getRandomNumber(60);
      
    }
}

//---------------DRAW--------------//

function draw() {
  background(76, 102, 73); 
  
  //exit text
  createExitText();
  
  // moving the character
  controlCharacterMovement();
  
  // character boundary limits
  setCharacterBoundaries();
    
  // speed zones
  setSpeedZones();
  
  //rectangles
createDarkRectangles();
createLightRectangles();
  
  // mid-game and end-game text
  createInGameText();
  
  //character
  createCharacter();
   
  //borders
  createBorders();

  //eyeball that appears when mouse is clicked  
  createEyeball();
  
}


//---------FUNCTIONS--------//

function createCharacter()
{
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
}

//------------------------

function controlCharacterMovement()
{
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
}

//------------------------

function createEyeball()
{
  fill(250, 243, 237);
  stroke(0);
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

//------------------------

function createDarkRectangles()
{
  //dark blue rectangles
  fill(32, 58, 74);
  strokeWeight(1);
  stroke(0);
  
      for (var i = 0; i < navyRectAmt; i++) 
      {
        rect(rectangleXs[i], rectangleYs[i], rectangleLengths[i], rectangleHeights[i]);
        
        rectangleXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        rectangleYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      
//--------movement
  rectangleXs[i] += rectangleXSpeeds[i];
  rectangleYs[i] += rectangleYSpeeds[i];
//--------boundaries
    if(rectangleXs[i] > width)
    {
        rectangleXs[i] = 0;
    }
    if(rectangleXs[i] < 0)
    {
        rectangleXs[i] = width;
    }
    if(rectangleYs[i] > height)
    {
        rectangleYs[i] = 0;
    }
    if(rectangleYs[i] < 0)
    {
        rectangleYs[i] = height;
    }
      }
}  

function createLightRectangles()
{
  //light blue rectangles
  fill(159, 225, 227);
  strokeWeight(1);
  stroke(0);
  
      for (var j=0; j < lightRectAmt; j++) 
      {
        rect(rectangleXs[j], rectangleYs[j], rectangleLengths[j], rectangleHeights[j]);
        
        rectangleXSpeeds[j] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        rectangleYSpeeds[j] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      
//--------movement
  rectangleXs[j] += rectangleXSpeeds[j];
  rectangleYs[j] += rectangleYSpeeds[j];
//--------boundaries
    if(rectangleXs[j] > width)
    {
        rectangleXs[j] = 0;
    }
    if(rectangleXs[j] < 0)
    {
        rectangleXs[j] = width;
    }
    if(rectangleYs[j] > height)
    {
        rectangleYs[j] = 0;
    }
    if(rectangleYs[j] < 0)
    {
        rectangleYs[j] = height;
    }
      }
}

//------------------------

function createBorders()
{
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
}

function setCharacterBoundaries()
{
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
}

function createExitText()
{
  fill(181, 201, 177);
  strokeWeight(2);
  stroke(0);
  textSize(20);
  textAlign(LEFT);
  text("Exit", 40, 580);
}

//------------------------

function createInGameText()
{
      //end-game win
      if(x < 155 && x > 80 && y > height)
      {
          winningText();
      }
    //mid-game instructions
      else
      {
          instructionText();
      }
}

function winningText()
{
          fill(181, 201, 177);
          strokeWeight(3);
          stroke(0);
          textSize(72);
          textAlign(CENTER);
          text("You Win!", width/2, height/3);
}

function instructionText()
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
          text("out for the invisible speed-change zones.", 20, 110);
}

//------------------------

function setSpeedZones()
{
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
}
  
//------------------------
  
function getRandomNumber(number) 
{
    return Math.floor(Math.random() * number) + 10;
}