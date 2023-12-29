# This includes project00_calculator of Quarter 01
Develop a simple command line calculator using TypeScipt, Node.js and Inquirer.

Create a GitHub repository for the project and submit its URL and NPX command in the project submission form. Please note that you will create a NPX command for your project and publish it on npm. After the NPX command is working you will announce it on Panaverse groups on Facebook, Discord, and Twitter.


add "#! /usr/bin/env node" in index.js file at the top


Next, in package.json add the new field bin:

"bin": {
	"project00_calculator_rizi": "dist/index.js"
},

"quiz_rizi" is package name here which will be used to call .i.e. "npx project00_calculator_rizi"

first give command "npm install -g"
secondly give command "npx project00_calculator_rizi" to run the project (locally)

To publish on npm:
first "npm login"
second "npm publish"

