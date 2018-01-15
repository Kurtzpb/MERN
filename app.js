"use strict"
const fs = require('fs');
const _ = require('lodash');

console.log(_.uniq([1, 2, 1, 5, 3, 5, 7, 23, 7, 32, 23]));

// fs.appendFile('temp.js', 'module.exports.helloUser = () => {const os = require("os"); return os.userInfo().username};', () => {
//     const temp = require('./temp');
//     console.log(temp)
//     fs.unlinkSync('./temp.js');
// });
