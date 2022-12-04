// Rucksack Finding 2
// Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?
import * as fs from 'fs';
let message: string = 'Rucksack Ruck Ruck';
console.log(message);
let array1: string[] = [];
let array2: string[] = [];
let array3: string[] = [];
let total = 0;
let match1;
let match2;
const priority = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]

try {
    // read contents of the file
    const data = fs.readFileSync('input.txt', 'utf-8')
  
    // split the contents by new line
    const lines = data.split(/\r?\n/)
  
    for(let i=0; i < lines.length; i = i + 3){
      array1 = lines[i].split('');
      array2 = lines[i+1].split('');
      array3 = lines[i+2].split('');
      

      match1 = array1.filter(val => array2.includes(val));
      match2 = match1.filter(val => array3.includes(val));
      console.log(match2);

      total += priority.indexOf(match2[0]) + 1;
    }
    console.log(total);
  } catch (err) {
    console.error(err)
  }