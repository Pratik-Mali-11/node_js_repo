const { log } = require('console')
const fs  = require('fs')

// reading file 

// let filecontent = fs.readFileSync('f2.txt')

// console.log('data in the file is: '+filecontent)
//---------------------------------------------------------------------------
// writing a file

// fs.writeFileSync('f3.txt','this is the f3 added data')
// let filecontent1 = fs.readFileSync('f3.txt')
// console.log('after writing: '+ filecontent1)
//------------------------------------------------------------------
// append method

// fs.appendFileSync('f2.txt', '\n now after appending')
//-------------------------------------------------------------------
//delete a file

// fs.unlinkSync('f3.txt')
//---------------------------------------------------------

                // directory methods


                //creating a new directory
// fs.mkdirSync('new directory')

        // reading the content inside that directory

let path1 = 'H:\\nodejs\\new directory'

let cont1 = fs.readdirSync(path1)

console.log(cont1)

    // check wheather the directory exists or not

let doesexist = fs.existsSync('os1.js')
console.log(doesexist)

        //removing or deleting a directory
fs.rmdirSync('first direct1')
