//----------VARIABLES----------//

//character x and y (based on HEAD)
var x=250;
var y=165;

//Hats
var hatLocs=[50, 150, 250, 350, 450];
var hY=350;
var hDia=80;
var hatEnd=430;

//mouse(animal) x and y (based  on BODY)
var mX=hatLocs[Math.floor(Math.random() * 5)];
var mY=350;
  //mouse speed
  var mxSpeed;
  var mySpeed;

//click coordinates
var clickX;
var clickY;

//character speed
var charSpeed;

//Test to see if correct hat is picked
var hatPick=false;

// key codes
var w = 87;
var a = 65;
var s = 83;
var d = 68;

//----------SETUP----------//
function setup() 
  {
    createCanvas(500, 500);
  }
  
//----------DRAW----------//
  function draw() 
{ 
    background(136, 191, 194);
    
  //Function  calls
    backdrop();
    coordinatesText();
    character();
    createMouse();
    createHats();
    moveCharacter();
    charBoundaries();
    findMouse();
    setMouseBounds();
    gameLossSensor();
    StartChase(); 
  }
 
//----------FUNCTIONS----------//

function backdrop()
{
//Walls & floors
    fill(127, 172, 181);
    stroke(109, 152, 161);
    strokeWeight(0);
  triangle(160, 0, 160, 190, 0, 290);
  triangle(160, 0, 0, 0, 0, 290);
    fill(127, 172, 181);
    strokeWeight(2);
  line(500, 290, 340, 190);
  line(160, 190, 340, 190);
  line(0, 290, 160, 190);
    strokeWeight(2);
  rect(160, 0, 180, 190);
    stroke(109, 152, 161);
  line(160, 190, 160, 0);
  
//"Wall" of hats
    fill(127, 172, 181);
    stroke(109, 152, 161);
  rect(0, 290, width, 120);
  
//Rug
    stroke(79, 49, 58);
    fill(125, 79, 93);
  ellipse(250, 235, 170, 70);
    fill(148, 86, 104);
  ellipse(250, 233, 150, 60);
    fill(125, 79, 93);
  ellipse(250, 232, 140, 50);
    fill(148, 86, 104);
  ellipse(250, 230, 100, 30);
    fill(125, 79, 93);
  ellipse(250, 229, 90, 20);
  
//Instructions
    textAlign(LEFT);
    strokeWeight(0);
    fill(227, 253, 255);
    textSize(10);
  text("Instructions:", 167, 12);
    strokeWeight(1);
    stroke(227, 253, 255);
  line(168, 14, 220, 14);
    strokeWeight(0);
  text("There is a mouse under one of these", 167, 25);
  text("hats. Click any hat to find out. You get", 167, 37);
  text("one chance to get it right, or it's game", 167, 49);
  text("over. If you uncover the mouse, it will", 167, 61);
  text("start running, so you must catch it to", 167, 73);
  text("win! Mice are very erratic, and this one", 167, 85);
  text("can basically teleport, so watch out.", 167, 97);
  text("Luckily, you can both fly, and you can", 167, 109);
  text("even teleport a little bit too, to opposite", 167, 121);
  text("sides of the room. Good luck! Use ", 167, 133);
  text("WASD to move when the mouse", 167, 145);
  text("escapes.", 167, 157);
}

//optional mouse coordinates
function coordinatesText()
{
  textSize(12);
  fill(255);
  strokeWeight(2);
  stroke(0);
  text("X: " + mouseX, 20, 460);
  text("Y: " + mouseY, 20, 480);
}

function character()
{ 
//tail
    fill(136, 191, 194);
    stroke(0);
    strokeWeight(7);
  bezier(x+20, y+45, x+35, y+70,  x+15, y+60, x, y+75);
    stroke(219, 199, 143);
    strokeWeight(5);
  bezier(x+20, y+45, x+35, y+70,  x+15, y+60, x, y+75);
//legs
    fill(219, 199, 143);
    stroke(0);
    strokeWeight(1);
  ellipse(x-15, y+50, 20, 30);
  ellipse(x+15, y+50, 20, 30);
//feet 
    fill(189, 171, 121);
  ellipse(x-15, y+62, 9, 7);
  ellipse(x+15, y+62, 9, 7); 
//ears
    //L
    fill(189, 171, 121);
  triangle(x-20, y-18, x, y-11, x-15, y-5);
    fill(224, 204, 221);
  triangle(x-16, y-14, x-2, y-10, x-13, y-5);
    //R
    fill(189, 171, 121);
  triangle(x+20, y-18, x, y-11, x+15, y-5);
    fill(224, 204, 221);
  triangle(x+16, y-14, x+2, y-10, x+13, y-5); 
//body  
    fill(219, 199, 143);
  ellipse(x, y+35, 40, 60);
    fill(189, 171, 121);
    strokeWeight(0);
  ellipse(x, y+55, 7, 20);
//collar
    fill(168, 73, 94);
    strokeWeight(1);
  ellipse(x, y+11, 25, 10);
    fill(230, 189, 67);
  circle(x, y+16, 3);
//HEAD*********************************
    fill(217, 199, 154);  
  ellipse(x, y, 30, 28);
    fill(189, 171, 121);
    strokeWeight(0);
  ellipse(x, y+4, 7, 10);
//eyes
    strokeWeight(0.75);
    fill(255);
  ellipse(x-6, y-2, 7, 3);
  ellipse(x+6, y-2, 7, 3);
    strokeWeight(1);
  circle(x-6, y-2, 3);
  circle(x+6, y-2, 3);
    stroke(37, 193, 217);
  circle(x-6, y-2, 1.5);
  circle(x+6, y-2, 1.5);
    stroke(0);
  line(x-6, y-3, x-6, y-1);
  line(x+6, y-3, x+6, y-1); 
//nose
  triangle(x-1.5, y+2.5, x+1.5, y+2.5, x, y+4.5);
    stroke(196, 114, 189);
    fill(196, 114, 189);
  triangle(x-1, y+3, x+1, y+3, x, y+4);
    stroke(0);
    fill(219, 199, 143);
//mouth
  line(x, y+5, x-3, y+7);
  line(x, y+5, x+3, y+7); 
//whiskers
  //L
  line(x-9, y+3, x-17, y+1);
  line(x-10, y+5, x-18, y+5);
  line(x-9, y+7, x-17, y+9);
  //R
  line(x+9, y+3, x+17, y+1);
  line(x+10, y+5, x+18, y+5);
  line(x+9, y+7, x+17, y+9);
//hands  
    fill(189, 171, 121);
  ellipse(x-5, y+65, 9, 7);
  ellipse(x+5, y+65, 9, 7);
//arms
    //L
  line(x-13, y+40, x-8, y+62);
  line(x-6, y+40, x-2, y+62);
    //R
  line(x+13, y+40, x+8, y+62);
  line(x+6, y+40, x+2, y+62);
}

function moveCharacter()
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

function charBoundaries()
{
  if(y > height)
    {
        y = 0;
    }
  if(y < 0)
    {
        y = height;
    }
  if(x > width)
    {
        x = 0;
    }
  if(x < 0)
    {
        x = width;
    }
}

function createMouse()
{
  //whiskers  
  line(mX+20, mY-8, mX+20, mY+7);
  line(mX+22, mY+7, mX+18, mY-8);
  line(mX+18, mY+7, mX+22, mY-8);
  //BODY*********************************
  fill(170);
    ellipse(mX, mY, 30, 18);
  //tail
  fill(136, 191, 194);
    bezier(mX-15, mY, mX-30, mY-10, mX-20, mY+10, mX-35, mY);
  //ears 
  fill(211, 203, 212);
    circle(mX+10, mY-5, 8);
    circle(mX+10, mY+5, 8);
  //nose
  fill(233, 197, 237);
    circle(mX+22, mY, 3);
  //head
  fill(170);
    ellipse(mX+15, mY, 13, 12);
  //eyes
  fill(0);
    circle(mX+17, mY-2.6, 1.5);
    circle(mX+17, mY+2.6, 1.5);
}

function createHats()
{
  for (var i=0; i<5; i++)
    {
      stroke(56, 39, 29);
      strokeWeight(1);
      fill(110, 70, 47);
  circle(hatLocs[i], hY, hDia);
      fill(130, 95, 75);
      strokeWeight(0);
  circle(hatLocs[i]+1, hY+1, 75);
      strokeWeight(1);
      fill(110, 76, 57);
  circle(hatLocs[i], hY, 47);
      fill(130, 95, 75);
  circle(hatLocs[i], hY+3, 40); 
      strokeWeight(0);
      fill(110, 78, 59);
  ellipse(hatLocs[i], hY+3, 15, 27);
      fill(94, 66, 50);
  ellipse(hatLocs[i]+3, hY+3, 8, 20);
      strokeWeight(1);
    }
}

function mousePressed()
{
    clickX = mouseX;
    clickY = mouseY;
  }

function findMouse()
{
//IF RIGHT HAT IS PICKED(IF YOU CLICK WITHIN MOUSE RADIUS)---------
    if (clickX > (mX-hDia/2) && clickX < (mX+hDia/2) && clickY > (mY-hDia/2) && clickY < (mY+hDia/2) && hatPick===false)
      {   
        hatPick=true;
      }    
    
//IF WRONG HAT IS PICKED-------------------------------------------
    else if (clickX< (mX-hDia/2) && clickY> (hY-hDia/2) && clickY< (hY+hDia/2) && hatPick===false|| clickX> (mX+hDia/2) && clickY> (hY-hDia/2) && clickY< (hY+hDia/2) && hatPick===false)
      {
        hY = hatEnd;
        hatPick=false;
      }
  }

function gameLossSensor()
{
  if (hY==hatEnd && hatPick===false)
    {
      textAlign(CENTER); 
      textSize(70);
        strokeWeight(3);
        stroke(0);
        fill(227, 253, 255);
      text('You Lost!', width/2, height/2+45);
        textSize(30);
      text('Refresh the page to try again.', width/2, height/2+80) 
        strokeWeight(5);
        stroke(176, 5, 5);
        line(clickX-10, 350, clickX+10, 370);
        line(clickX-10, 370, clickX+10, 350);
        strokeWeight(1);
        stroke(0);
    }
}

function StartChase()
{
  if (hatPick===true && hY==350)
    {
      mouseRuns();
    }
  else if (hatPick===true)
    {
      textAlign(CENTER); 
      textSize(30);
        strokeWeight(3);
        stroke(0);
        fill(227, 253, 255);
      text("Nice try! This mouse won't budge.", width/2, height/2+45);
      text("Try refreshing the page instead.", width/2, height/2+80)
      noLoop();
    }
}

function mouseRuns()
{
  if (mX>(x-20) && mX<(x+20) && mY>(y-10) && mY<(y+60))
    {      
      mxSpeed=0;
      mySpeed=0;
      charSpeed=0;
      
      textAlign(CENTER); 
      textSize(70);
      strokeWeight(3);
      stroke(0);
      fill(227, 253, 255);
      text('You Win!', width/2, height/2+55);
      noLoop();
    }
  else
    {
      mxSpeed=Math.floor(Math.random() * 12) + 1;
      mySpeed=Math.floor(Math.random() * 3) + 1;
      charSpeed=Math.floor(Math.random() * 5) + 1;
      mX += mxSpeed;
      mY -= mySpeed;
    }
}

function setMouseBounds()
{
    if(mX > width)
      {
        mX = 0;        
      }
    if(mX < 0)
      {
        mX = width;
      }
    if (mY > height)
      {
        mY = 0;
      }
    if (mY > height-360 && mY < height-210)
      {
        mY = height-360;
      }
    if (mY < 0)
      {
        mY = height;
      }
}