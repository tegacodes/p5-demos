var startAngle = 0;  //start angle for first ball
var angleVel; //change in angular velocity from ball to ball
var speed; //how fast does each bounce
var angle; //angle
var gap=24; //space between balls

var aSlider; //using a slider for a variable
var bSlider;

//coordinate variables for sliders
var tx = 20;
var ty = 300;

var px = 20;
var py = 350;

function setup(){
  createCanvas(400,450);
  //font stuff
  fill(0);
  textSize(12);
  textFont("Helvetica");
  smooth();
  //add in sliders
  aSlider= createSlider(0,50,40);
  aSlider.position(tx, ty+10);

  bSlider= createSlider(0,50,10);
  bSlider.position(px, py+20);
}

function draw(){
  background(255);
  noFill();
  stroke(200);
  rect(0,0,399,449);
  fill(0);
    stroke(0);
  strokeWeight(1).textSize(12);
  //add in labels
  text("Angular Velocity",tx,ty-15);
    stroke(255);
    strokeWeight(0).textSize(12);
  text("Change the angular velocity (also the period of the wave)",tx,ty);
      stroke(0);
  strokeWeight(1).textSize(12);
  text("Speed",px,py);
      stroke(255);
      strokeWeight(0).textSize(12);
  text("Change the vertical velocity of each ball:",px,py+15);
  var calc=(startAngle%(2*PI)/(PI));
 // text("y=sin(angle), so first ball's angle="+nfc(calc,1,2)+"PI",px,py+60);
 // var y=sin(TWO_PI-calc*PI);
 // text("y=sin(angle), so first ball's y="+nfc(y,1,2),px,py+80);
  //get values from sliders
  angleVel = aSlider.value()/100;
  speed = bSlider.value()/100;

  //THE WAVE CODE------------------------------------
  angle = startAngle; //assign the start angle for the first ball
  for (var x=0; x<=width; x+= gap){ //run through each ball
    //get y for the ball we are on
    var y = map(sin(angle), -1,1,0,height/2); //map sin(a) to the range 0 -> height/2
    strokeWeight(1);
    stroke(237,34,93);
    fill(237,34,93);
    ellipse(x,y,5,5); //draw the ball at each value of x
    noFill();
    ellipse(x,y,25,25); //draw the ball at each value of x
    angle = angle+ angleVel; //increase the angle by the angular velocity (this will change the y for each ball)
  }
  startAngle= startAngle+ speed; // change startAngle for each loop of draw.. If speed =0, you get a static wave.
}
