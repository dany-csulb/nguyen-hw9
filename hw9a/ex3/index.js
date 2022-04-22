// load moment package as a module
const moment = require("moment");

// Format date
console.log(moment().format("dddd, MMMM Do YYYY"));

// Get number of years since date
console.log(moment("1976-11-26").fromNow());