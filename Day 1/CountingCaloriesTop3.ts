/* 

Counting Calories

Description: Give a file input, find the elves (top3) and add the calories they have.
Find the elves(3) carrying the most Calories. How many total Calories is that elves carrying?
*/

import * as fs from 'fs';

let message: string = 'Counting Calories Top 3';
console.log(message);
let BigElfsCalories = 0;
let currentCount = 0;
let elf1 = 0;
let elf2 = 0;
let elf3 = 0;
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
            if(currentCount > elf1){
                elf1 = currentCount;
            } else if(currentCount > elf2){
                elf2 = currentCount;
            } else if(currentCount > elf3){
                elf3 = currentCount;
            }
            currentCount = 0;

        } else {
            // Keep counting
            currentCount = currentCount + num;
        }
    })
    BigElfsCalories = elf1 + elf2 + elf3;
    console.log("The elf with the most calories has " + BigElfsCalories + " calories");
  } catch (err) {
    console.error(err)
  }