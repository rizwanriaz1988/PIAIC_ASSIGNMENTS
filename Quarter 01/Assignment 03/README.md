# This includes Assignment 03 of Quarter 01


Exercise 1:  prepare a quiz with inquirer and chalk.

add "#! /usr/bin/env node" in index.js file at the top


Next, in package.json add the new field bin:

"bin": {
	"quiz": "dist/index.js"
},

"quiz" is package name here which will be used to call .i.e. <npx quiz>

first give command <npm install -g>
secondly give command <npx quiz> to run the project (locally)

To publish on npm:
first <npm login>
second <npm publish>

