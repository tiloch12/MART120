//eyes move along x-axis
var leftPupilX=270;
var rightPupilX=310;
var pupilMove;

//(eyebrows tilt along y-axis)
var eyebrowsY=140;
var eyebrowsMove=0.025;

//legs&shoes move along y-axis
var legsY=480;
var shoesY=600;
var legsANDshoesMove;

//mouth moves diagonally along both axes
var leftMouthX=275;
var rightMouthX=305;
var mouthY=190;
var mouthMove;

//title grows bigger and smaller
var size = 72;
var count = 0;
var sizeDirection = 1;

function setup()
{
createCanvas(600,600);
pupilMove = (Math.random()*0.5);
legsANDshoesMove = Math.floor(Math.random()*2) + 1;
mouthMove = (Math.random()*0.5) + 0.5;
}
function draw()
{
background(138, 166, 191);

//back hair
strokeWeight(1);
  fill(219, 195, 121);
  stroke(161, 135, 56);
  ellipse(250, 170, 65, 70);
  circle(355, 145, 40);
  ellipse(330, 165, 80, 90);
  circle(250,145,70);

//head and neck
  fill(222, 197, 171);
  stroke(94, 94, 93);
  rect(282, 200, 36, 50);
  circle(300,150,124);

//front hair 
  fill(219, 195, 121);
  stroke(161, 135, 56);
  ellipse(238, 175, 30, 60);
  ellipse(240, 160, 40, 50);
  ellipse(245, 125, 40, 50);
  ellipse(270, 100, 60, 45);
  ellipse(300, 95, 50, 40);
  circle(335, 105, 40);
  ellipse(350, 130, 40, 60);
  ellipse(355, 160, 45, 40);
  ellipse(350, 180, 35, 40);


//legs
fill(222, 197, 171);
stroke(94, 94, 93);
rect(270, legsY, 25, 120);
rect(305, legsY, 25, 120);

if(legsY >= 480 || legsY <= 425)
{
legsANDshoesMove *= -1;
}

legsY += legsANDshoesMove;

  //shoes
  fill(47, 50, 51);
  stroke(0);
  circle(282.5, shoesY, 30);
  circle(317.5, shoesY, 30);

shoesY=(legsY+120)
  
  //dress-bottom
  fill(30, 62, 84);
  stroke(94, 94, 93);
  triangle(220, 545, 380, 545, 300, 250);
  triangle(240, 545, 360, 545, 300, 250);
  triangle(270, 545, 330, 545, 300, 250);
  fill(30, 62, 84);
  stroke(94, 94, 93);

//arms
  fill(222, 197, 171);
  stroke(94, 94, 93);
  rect(235, 245, 25, 180);
  rect(340, 245, 25, 180);
  
//dress-top
  fill(30, 62, 84);
  stroke(94, 94, 93);
  triangle(235, 245, 365, 245, 300, 400);
  triangle(250, 255, 350, 255, 300, 370);

//face
  fill(237, 227, 218);
  stroke(94, 94, 93);

//face-eyebrows
  line(265, 140, 275, eyebrowsY);
  line(305, eyebrowsY, 315, 140);

if(eyebrowsY >= 147 || eyebrowsY <= 133)
{
 eyebrowsMove *= -1;
}

eyebrowsY += eyebrowsMove;

//face-mouth
  line(leftMouthX, mouthY, rightMouthX, mouthY);
  
  if(leftMouthX<=270 || rightMouthX>=310)
  {  
    mouthMove *= -1
  }
  
leftMouthX += -mouthMove;
rightMouthX += -mouthMove;
mouthY += mouthMove;

//face-nose
  line(290, 155, 283, 175);
  line(283, 175, 295, 175);

//face-eyes
  circle(270, 150, 10);
  circle(310, 150, 10);
  
//eyes-pupils 
  strokeWeight(3);
  point(leftPupilX, 150);
  point(rightPupilX, 150);

if(leftPupilX >= 274 || leftPupilX <= 266)
{
 pupilMove *= -1;
}

leftPupilX += pupilMove;
rightPupilX += pupilMove; 

//title
  textFont("Georgia");
  textStyle(BOLD);
  textSize(size);
  fill(194, 226, 237);
  strokeWeight(3);
  stroke(24, 47, 64);
  
  size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
  text("Self Portrait", 70, 67);

//signature
  textStyle(ITALIC);
  textSize(20);
  fill(24, 47, 64);
  strokeWeight(0);
  text("Ti'el Lochridge", 425, 580);

/*mouse position- now hidden
textSize(15);
textStyle(NORMAL);
text("X: " + mouseX,10,560 );
text("Y: " + mouseY,10,580 );
  */
}