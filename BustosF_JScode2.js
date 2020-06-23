var xPos = 72;
var yPos = 67;
var xPos2 = 410;
var yPos2 = 44;
var xPos3 = 410;
var moonRadius = 74;

noStroke();

draw = function() {
    background(29, 40, 115);
    
    //moon
    fill(222, 222, 222);
    ellipse(322, 90, moonRadius, moonRadius);
        
    //Moving Stars
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos2, yPos2, 10, 10);
    ellipse(xPos3, 44, 10, 10);
    
    //Station Stars
    ellipse(100, 44, 15, 6);
    ellipse(100, 44, 6, 15);
    ellipse(246, 76, 15, 6);
    ellipse(246, 76, 6, 15);
    ellipse(126, 195, 15, 6);
    ellipse(126, 195, 6, 15);
    ellipse(45, 101, 15, 6);
    ellipse(45, 101, 6, 15);
    ellipse(322, 169, 15, 6);
    ellipse(322, 169, 6, 15);
    
    //ground
    fill(109, 163, 101);
    rect(0, 335, 400, 64);
    
    //house 1
    fill(0, 0, 0);
    rect(34, 314, 126, 84);
    triangle(-10, 320, 96, 254, 198, 320);
    rect(130, 257, 33, 52);
    fill(222, 217, 57);
    rect(114, 325, 33, 33);
    rect(52, 325, 33, 33);
    
    //house 2
    fill(0, 0, 0);
    rect(256, 314, 126, 84);
    triangle(227, 320, 317, 254, 424, 320);
    rect(250, 257, 33, 52);
    fill(222, 217, 57);
    rect(272, 325, 33, 33);
    rect(337, 325, 33, 33);

    
    xPos += 3;
    yPos += 1.5;
    xPos2 -= 3;
    yPos2 += 1.5;
    xPos3 -= 5;
    moonRadius +=0.15;
};



