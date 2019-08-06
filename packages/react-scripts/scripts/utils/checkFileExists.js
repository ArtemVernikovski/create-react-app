'use strict';

var fs = require('fs');

function checkFileExists(filePath) {
  try {
    fs.accessSync(filePath, fs.F_OK);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = checkFileExists;
