// Camp Cleanup 1
// In how many assignment pairs does one range fully contain the other?

import * as fs from 'fs';
let message: string = 'Rucksack Ruck Ruck';
console.log(message);
let left;
let right;
let count = 0;
try {
    // read contents of the file
    const data = fs.readFileSync('input.txt', 'utf-8')
  
    // split the contents by new line
    const lines = data.split(/\r?\n/)

        // print all lines
    lines.forEach(line => {
        let list = line.split(',');
        left = list[0].split('-').map(Number);
        right = list[1].split('-').map(Number);

        if((left[0] >= right[0] && left[1] <= right[1]) || (right[0] >= left[0] && right[1] <= left[1])){
          count++;
        } else {
        }
    })
    console.log(count);

  } catch (err) {
    console.error(err)
  }