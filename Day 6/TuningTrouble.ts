// Tuning Troubles 1
// How many characters need to be processed before the first start-of-packet marker is detected?

import * as fs from 'fs';
let message: string = 'Tuning Troubles 1';
console.log(message);
var result = 0;
var noDuplicates = true;
var tempArray : String[];
try {
    // read contents of the file
    const data = fs.readFileSync('input.txt', 'utf-8')
  
    // split the contents by new line
    const chars = data.split('');
    for(var i = 0; i < chars.length; i++){
        tempArray = chars.slice(i,i+4);
        tempArray.forEach((c, index) => {
            if(tempArray.filter(x => x==c).length > 1){
                noDuplicates = false;
            }
        })
        if(noDuplicates && result == 0){
            result = i+4;
        }
        noDuplicates = true;
    }
    console.log(result);
        
  } catch (err) {
    console.error(err)
  }