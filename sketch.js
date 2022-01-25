function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  s = second();
  m = minute();
  h = hour();
  
  background(0);
  
  push();
  translate(-150, 0, 0);
  noStroke();
  fill("lightblue");
  rotateX(s);
  rotateY(s);
  box(55, 55, 55);
  pop()
  
  push();
  translate(0, 0, 0);
  noStroke();
  fill("lightgreen");
  rotateX(m);
  rotateY(m);
  box(90, 90, 90);
  pop()
  
  push();
  translate(150, 0, 0);
  noStroke();
  fill("lightpink");
  rotateX(h);
  rotateY(h);
  box(120, 120, 120);
  pop()
}