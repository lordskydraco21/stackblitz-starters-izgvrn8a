function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  
  // Grid settings
  const cols = 10;
  const rows = 10;
  const size = width / cols;
  
  // Draw grid of faces
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      drawFace(i * size + size/2, j * size + size/2, size);
    }
  }
}

function drawFace(x, y, size) {
  const scale = size / 400; // Scale factor based on original face size
  
  push(); // Save current drawing state
  translate(x - size/2, y - size/2); // Move to grid position
  scale(scale); // Scale the face to fit grid
  
  // Draw face circle
  fill(255, 255, 0); // Yellow color
  circle(200, 200, 300); // Face
  
  // Draw eyes (white part)
  fill(255); // White color
  circle(140, 160, 60); // Left eye
  circle(260, 160, 60); // Right eye
  
  // Calculate eye movement relative to the face position
  let leftEyeX = 140;
  let rightEyeX = 260;
  let eyeY = 160;
  let eyeRadius = 15;
  let maxDistance = 15;
  
  // Convert mouse position to local coordinates
  let localMouseX = (mouseX - (x - size/2)) / scale;
  let localMouseY = (mouseY - (y - size/2)) / scale;
  
  // Left eye pupil position
  let leftDx = localMouseX - leftEyeX;
  let leftDy = localMouseY - eyeY;
  let leftAngle = atan2(leftDy, leftDx);
  let leftDistance = min(maxDistance, dist(localMouseX, localMouseY, leftEyeX, eyeY) / 8);
  let leftPupilX = leftEyeX + cos(leftAngle) * leftDistance;
  let leftPupilY = eyeY + sin(leftAngle) * leftDistance;
  
  // Right eye pupil position
  let rightDx = localMouseX - rightEyeX;
  let rightDy = localMouseY - eyeY;
  let rightAngle = atan2(rightDy, rightDx);
  let rightDistance = min(maxDistance, dist(localMouseX, localMouseY, rightEyeX, eyeY) / 8);
  let rightPupilX = rightEyeX + cos(rightAngle) * rightDistance;
  let rightPupilY = eyeY + sin(rightAngle) * rightDistance;
  
  // Draw pupils
  fill(0); // Black color
  circle(leftPupilX, leftPupilY, eyeRadius * 2); // Left pupil
  circle(rightPupilX, rightPupilY, eyeRadius * 2); // Right pupil
  
  // Draw mouth
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(200, 220, 150, 100, 0, PI); // Smile
  
  pop(); // Restore drawing state
}