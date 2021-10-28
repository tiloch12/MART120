function setup()
    {
      createCanvas(600,600);
    }
    function draw()
    {
      //back hair
      background(138, 166, 191);
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
      
      //arms and legs
        fill(222, 197, 171);
        stroke(94, 94, 93);
        rect(270, 480, 25, 180);
        rect(305, 480, 25, 180);
      
     //dress
        fill(30, 62, 84);
        stroke(94, 94, 93);
        triangle(220, 545, 380, 545, 300, 250);
        triangle(240, 545, 360, 545, 300, 250);
        fill(222, 197, 171);
        rect(235, 245, 25, 180);
        rect(340, 245, 25, 180);
        fill(30, 62, 84);
        stroke(94, 94, 93);
        triangle(270, 545, 330, 545, 300, 250);
        triangle(235, 245, 365, 245, 300, 400);
        triangle(250, 255, 350, 255, 300, 370);

      //shoes
        fill(47, 50, 51);
        stroke(0);
        circle(282.5, 600, 30);
        circle(317.5, 600, 30);
      
      //face
        fill(237, 227, 218);
        stroke(94, 94, 93);
        line(265, 140, 275, 140);
        line(305, 140, 315, 140);
        line(275, 190, 305, 190);
        line(290, 155, 283, 175);
        line(283, 175, 295, 175);
        circle(270, 150, 10);
        circle(310, 150, 10);
        strokeWeight(3);
        point(270, 150, 10);
        point(310, 150, 10);
      
      //title
        textFont("Georgia");
        textStyle(BOLD);
        textSize(72);
        fill(194, 226, 237);
        strokeWeight(3);
        stroke(24, 47, 64);
        text("Self Portrait", 70, 67);
      
      //signature
        textStyle(ITALIC);
        textSize(20);
        fill(24, 47, 64);
        strokeWeight(0);
        text("Ti'el Lochridge", 425, 580);
        
    }