// load the module "accounting.js"
const Account = require("./accounting.js");

// Create object from the exported clas
const myAccount = new Account("Jeff");
myAccount.credit(150);
console.log(myAccount.describe());