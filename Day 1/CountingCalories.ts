/* 

Counting Calories

Description: Give a file input, find the elf which has the most calories and return the number of calories.
Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?
*/

import * as fs from 'fs';

let message: string = 'Counting Calories V1';
console.log(message);
let BigElfCalories = 0;
let currentCount = 0;
try {
    // read contents of the file
    const data = fs.readFileSync('input.txt', 'utf-8')
  
    // split the contents by new line
    const lines = data.split(/\r?\n/)
  
    // print all lines
    lines.forEach(line => {
        var num = +line;
        
        if(line == ""){
            //if currentcount > BigElfCalories, replace
            if(currentCount > BigElfCalories){
                BigElfCalories = currentCount
            }
            currentCount = 0;

        } else {
            // Keep counting
            currentCount = currentCount + num;
        }
    })
    console.log("The elf with the most calories has " + BigElfCalories + " calories");
  } catch (err) {
    console.error(err)
  }