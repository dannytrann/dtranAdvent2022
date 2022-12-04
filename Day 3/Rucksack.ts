// Rucksack Finding

// To help prioritize item rearrangement, every item type can be converted to a priority:

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.
// In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

// Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?
import * as fs from 'fs';
let message: string = 'Rucksack Ruck Ruck';
console.log(message);
let array1: string[] = [];
let array2: string[] = [];
let total = 0;
const priority = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]

try {
    // read contents of the file
    const data = fs.readFileSync('input.txt', 'utf-8')
  
    // split the contents by new line
    const lines = data.split(/\r?\n/)
  
    // print all lines
    lines.forEach(line => {
        let list = line.split('');
        array1 = list.slice(0, Math.ceil(list.length/2));
        array2 = list.slice(Math.ceil(list.length/2));
        array1 = array1.filter(val => array2.includes(val));
        console.log(array1[0]);
        total += priority.indexOf(array1[0]) + 1;
    })
    console.log(total);
  } catch (err) {
    console.error(err)
  }