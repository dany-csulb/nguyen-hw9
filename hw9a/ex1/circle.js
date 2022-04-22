// Circle Module

// Declare Pi 
const pi = Math.PI;

// Grab circumference of a circle
module.exports.circumference = radius => 2 * pi * radius;

// grab the area of a circle 
module.exports.area = radius => pi * radius ** 2;