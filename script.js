/**
 * Project 1 - Interactive Image
 * Name: Erika C. Montes
 * Comments: 
 */

// Global Variables go here
var x;  // Horizontal location
var y;  // vertical location
var xSpeed, ySpeed;  // speed in 2 dimensions
var rotationSpeed = 0; //rotation speed
var angle = 0; // how far to rotate
var bat; //attempt to color bat wings

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
  //Starting location
  x = width/2
  y = height/2
  //x and y speed and dierction:
  //xSpeed = random(-2, 2);  //horizontal
 // ySpeed= random(-2, 2);  //vertical
}
  function batWing(x, y){
    strokeCap(SQUARE);
    noFill();
    angleMode(DEGREES);
    rotate(30) // rotation of top wing arc 
    angleMode(RADIANS);
    arc(-75, -6, 70, 30, TWO_PI, PI, open); // L wing top arc
    line(-111, -4, -190, 90); //Far left wing line 1/3
    line(-110, -4, -120, 110); //Middle left wing line 2/3
    angleMode(DEGREES);// angle set to degrees
    rotate(49); //rotation of like 3/3 for L wing
    angleMode(RADIANS); //angle back to radians
    arc(-19, 79, 105, 10, TWO_PI, PI, open); //wing line 3/3
   //arcs(3) for bat wings 
   rotate(PI/2);
    arc(56, -34, 50, 20, TWO_PI, PI, open); //L arc 3/3
    rotate(PI/9);
    arc(108, -61, 86, 30, TWO_PI, PI, open); //L arc 2/3
    angleMode(DEGREES);// mode to degrees because I got confused with radians
    rotate(45);
    angleMode(RADIANS); //back to radians
    arc(99, -153, 70, 35, TWO_PI, PI, open); //L arc 1/3
    pop(); // bat wing
  }

function draw(){
  // this function runs again and again (60x per second)
  background(200, 200, 200); //dark purple background
  
  // add your image drawing code here

  //Make Bat
  push(); // new drawing layer
  translate(x, y); //shift origin point
  rotate(angle); //spin around origin point

//Bat body:
  fill(150, 150, 150);
  strokeWeight(4.5);
  strokeJoin(ROUND);
  triangle(0, 0, 0, 0, 0, 0); // L leg
  triangle(0, 0, 0, 0, 0, 0); // R leg
  ellipse(0, 0, 75, 100); //body

  //bat head/face
  triangle(-37, -65, -40, -110, -15, -87); // L ear
  triangle(37, -65, 40, -110, 15, -87); //R ear
  ellipse(0, -50, 75); //head
  fill(0);
  ellipse(-15, -60, 13);// L eye
  ellipse(15, -60, 13);// R eye
  stroke(255, 255, 255);
  fill(255, 255, 255);
  ellipse(-18, -63, 3)// L pupil
  ellipse(12, -63, 3)
  //rotate
  stroke(0, 0, 0);
  strokeWeight(2)
  triangle(-17,-39, -14, -30, -5, -39); // fang 1
  triangle(17, -39, 14, -30, 5, -39); //fang 2
  noFill()
  strokeWeight(4.5);
  arc(0,-45, 40, 15, TWO_PI, PI, open);





//Bat wings

strokeCap(SQUARE);
noFill();
angleMode(DEGREES);
rotate(30) // rotation of top wing arc 
angleMode(RADIANS);
arc(-75, -6, 70, 30, TWO_PI, PI, open); // L wing top arc
line(-111, -4, -190, 90); //Far left wing line 1/3
line(-110, -4, -120, 110); //Middle left wing line 2/3
angleMode(DEGREES);// angle set to degrees
rotate(49); //rotation of like 3/3 for L wing
angleMode(RADIANS); //angle back to radians
arc(-19, 79, 105, 10, TWO_PI, PI, open); //wing line 3/3
//arcs(3) for bat wings 
rotate(PI/2);
arc(56, -34, 50, 20, TWO_PI, PI, open); //L arc 3/3
rotate(PI/9);
arc(108, -61, 86, 30, TWO_PI, PI, open); //L arc 2/3
angleMode(DEGREES);// mode to degrees because I got confused with radians
rotate(45);
angleMode(RADIANS); //back to radians
arc(99, -153, 70, 35, TWO_PI, PI, open); //L arc 1/3

rotate(PI/3)
scale(.8)
batWing(38, 10);
pop()
  }


  function batWing(x, y){
    translate(x, y)
    strokeCap(SQUARE);
    noFill();
    angleMode(DEGREES);
    rotate(30) // rotation of top wing arc 
    angleMode(RADIANS);
    arc(-75, -6, 70, 30, TWO_PI, PI, open); // L wing top arc
    line(-111, -4, -190, 90); //Far left wing line 1/3
    line(-110, -4, -120, 110); //Middle left wing line 2/3
    angleMode(DEGREES);// angle set to degrees
    rotate(49); //rotation of like 3/3 for L wing
    angleMode(RADIANS); //angle back to radians
    arc(-19, 79, 105, 10, TWO_PI, PI, open); //wing line 3/3
   //arcs(3) for bat wings 
   rotate(PI/2);
    arc(56, -34, 50, 20, TWO_PI, PI, open); //L arc 3/3
    rotate(PI/9);
    arc(108, -61, 86, 30, TWO_PI, PI, open); //L arc 2/3
    angleMode(DEGREES);// mode to degrees because I got confused with radians
    rotate(45);
    angleMode(RADIANS); //back to radians
    arc(99, -153, 70, 35, TWO_PI, PI, open); //L arc 1/3
    

  }
/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){ 
    //check each frame to see if the mouse is pressed, then do something
  } else {
    // do something here if the mouse is NOT pressed
  }
/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}