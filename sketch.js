var hr, min, sec;
var secAngle, minAngle, hrAngle;

function setup() {
  
  createCanvas(900,700);
  angleMode(DEGREES);
}

function draw() {
  background("teal"); 
 
  hr = hour();
  min = minute();
  sec = second();
 
  
  translate(width/2, height/2)
  rotate(-90)

  
  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  
  push();
  rotate(secAngle);
  stroke("lightsteelblue");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  
  push();
  rotate(minAngle);
  stroke("lightpink");
  strokeWeight(8);
  line(0, 0, 75, 0);
  pop();


  push();
  rotate(hrAngle);
  stroke("rosybrown");
  strokeWeight(9);
  line(0, 0, 50, 0);
  pop();

  noFill();
  strokeWeight(10);
  //Second Arc
  stroke("lightsteelblue");
  arc(0,0,300,300,0,secAngle);

  //Minute Arc
  stroke("lightpink");
  arc(0,0,270,270,0,minAngle);

  //Hour Arc
  stroke("rosybrown");
  arc(0,0,240,240,0,hrAngle);

  rotate(90);
  strokeWeight(1)
  fill("white");
  textSize(18.5)
}