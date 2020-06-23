var x= 200;
var y= 200;
var faceSize= 358;

draw = function() 
{
    background(207, 254, 255);
    
    //ears
    var earSize= faceSize*7/9;
    stroke(51, 46, 38);
    strokeWeight(earSize/15);
    fill(102, 84, 54);
    ellipse(x-faceSize/4, y-faceSize/2, earSize/2, earSize);
    ellipse(x+faceSize/4, y-faceSize/2, earSize/2, earSize);
    
    //body   
    strokeWeight(faceSize/37);
    fill(189, 140, 49);
    stroke(112, 79, 29);    
    var bodySize= faceSize *1.5;
    ellipse (x, y+faceSize*8/9, bodySize*8/9, bodySize);
    
    //face
    ellipse(x, y, faceSize, faceSize);
    
    //eyes
    var eyeSize= faceSize/6;
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(eyeSize/10);
    ellipse(mouseX-faceSize/5, mouseY-faceSize*2/9, eyeSize, eyeSize+10); //left eye
    ellipse(mouseX+faceSize/5, mouseY-faceSize*2/9, eyeSize, eyeSize+10);//right eye
    strokeWeight(eyeSize/2);
    line(mouseX+faceSize/15, mouseY-faceSize/4, mouseX+faceSize/3, mouseY-faceSize/3);// right eyelash
    line(mouseX-faceSize/15, mouseY-faceSize/4, mouseX-faceSize/3, mouseY-faceSize/3);//left eyelash
    
    
    //nose
    var nosieSize= faceSize*5/12;
    stroke(51, 46, 38);
    strokeWeight(nosieSize/15);
    fill(102, 84, 54);
    ellipse(mouseX, mouseY+faceSize/9, nosieSize, nosieSize/2);

    fill(255, 0, 0);
    textSize(20);
    text("Move the mouse around the canvas", 266, 5, 143, 86);
};
