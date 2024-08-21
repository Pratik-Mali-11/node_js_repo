const cc = require('child_process')

console.log('output ' + cc.execSync('node file1.js'))