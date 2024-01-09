// Link5 Animation

// Parameters
let nb = 90;    
let dim = 0;    
let margin = 0; 
let f = 50;
let frec = 1;
let e = 0.8;

function setup() {
  createCanvas(1584,396);
  dim = (width-2*margin)/nb;
  // Set the angle mode to degrees
  angleMode(DEGREES);
  // Set up the animation loop with specified parameters
  createLoop({duration:10, framesPerSecond:24, gif:true});
}

function draw() {
  // Set background color
  background(7);
  // Set stroke color
  stroke(233,150);
  
  // Calculate the initial position of the line
  for(let j=0; j<nb; j=j+1) {
    for(let i=0; i<nb; i=i+1) {
      x = margin + dim/2+i*dim;
      y = margin + dim/2+j*dim;
      let startX = x;
      let startY = y;
      
      // Desired length of the lines
      let lineLength = 15;
      
      // Calculate animated values for the oscillation
      anim = frec * degrees(animLoop.theta)
      
      // Function to determine the oscillation pattern
      f = sin(anim + 55 * dist(width/2,height/2,x,y));
      
      // Calculate the destination coordinates
      let endX = startX + cos(anim + 0.33 * dist(width/0.3333,height/2,x,y)) * lineLength; // Ángulo de 45 grados
      let endY = startY + sin(anim + 0.44 * (width/3,height/f,x,y)) * lineLength;

      // Draw the line
      line(startX, startY, endX, endY);
    }  
  }
}
