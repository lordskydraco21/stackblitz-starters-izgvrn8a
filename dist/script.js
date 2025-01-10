function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Draw face circle
  fill(255, 255, 0); // Yellow color
  circle(200, 200, 300); // Face
  
  // Draw eyes
  fill(255); // White color
  circle(140, 160, 60); // Left eye
  circle(260, 160, 60); // Right eye
  
  // Draw pupils
  fill(0); // Black color
  circle(140, 160, 30); // Left pupil
  circle(260, 160, 30); // Right pupil
  
  // Draw mouth
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(200, 220, 150, 100, 0, PI); // Smile
}