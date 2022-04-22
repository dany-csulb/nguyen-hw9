// load the module "circle.js"

const circle = require("./circle.js");

// use the exported functions
const radius = 3;
console.log(`The circumference of a circle of radius ${radius} is ${circle.circumference(radius)}`);

console.log(`Its area is ${circle.area(radius)}`);