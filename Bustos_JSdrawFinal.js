
background(154, 212, 230);
strokeWeight(3);
stroke(76, 133, 95);
fill(130, 199, 148);
quad(45, 50, 58, 354, 16, 357, 35, 41);
quad(78, 122, 68, 354, 92, 357, 93, 108);
quad(180, 203, 168, 354, 187, 357, 188, 223);
quad(218, 29, 195, 354, 236, 357, 230, 19);
quad(317, 123, 301, 354, 329, 357, 323, 141);
quad(395, 97, 371, 354, 428, 357, 407, 97);

strokeWeight(5);
stroke(161, 161, 66);
fill(224, 208, 130);
rect(-5, 316, 407, 100);

var xPoint = 0;
var yPoint = 0;

draw = function() 
{
    xPoint = random(0,400);
    yPoint = random(0,400);

};

mouseOut = function() 
{
    fill(189, 238, 240);
    stroke(214, 236, 240);
    ellipse(xPoint, yPoint, 20, 20);
};


    
var drawFish = function (centerX, centerY)
{
    var bodyLength = random(100,140);
    var bodyHeight = random(55,95);
    var color1 = random(0,255);
    var color2 = random(0,255);
    var color3 = random(0,255);
    var bodyColor = color(color1, color2, color3);

    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};


    
mouseClicked = function() 
{
    drawFish(random(50,350),random(50,350));
};
