var fs = require('fs');
var inquirer = require('inquirer');

fs.writeFile("README.md", "testing", err => {
    if(err) console.log(err);
});