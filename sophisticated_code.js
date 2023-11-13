/* sophisticated_code.js */

// This code generates a spiral pattern using the HTML5 canvas element

// Create a canvas element
var canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 800;
document.body.appendChild(canvas);

// Get the 2D context of the canvas
var context = canvas.getContext("2d");

// Set initial values
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var angle = 0;
var radius = 10;
var distance = 2;
var limit = 400;

// Define the animation function
function animate() {
    
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Move the turtle to the starting point
    var x = centerX;
    var y = centerY;
    
    // Loop until the desired limit is reached
    for (var i = 0; i < limit; i++) {
        
        // Calculate the next position
        x += distance * Math.cos(angle);
        y += distance * Math.sin(angle);
        
        // Increase the radius slightly
        radius += 0.1;
        
        // Set the fill style based on the iteration
        context.fillStyle = "rgb(" + (i % 255) + ", " + (255 - i % 255) + ", 200)";
        
        // Draw a circle at the current position
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.closePath();
        context.fill();
        
        // Increase the angle
        angle += 0.01;
        
        // Reduce the distance gradually
        distance -= 0.001;
    }
    
    // Decrease the limit for the next animation frame
    limit -= 10;
    
    // Request the next animation frame
    if (limit > 0) {
        requestAnimationFrame(animate);
    }
}

// Start the animation
animate();