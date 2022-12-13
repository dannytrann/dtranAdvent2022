// Supply Stacks 2
// Before the rearrangement process finishes, update your simulation so that the Elves know where they should stand to be ready to unload the final supplies. After the rearrangement procedure completes, what crate ends up on top of each stack?

import { reverse } from 'dns';
import * as fs from 'fs';
import { isArrayBufferView } from 'util/types';
let message: string = 'Supply Stacks 2';
console.log(message);
var listOfLists : string[][] = [];
var listOfLists2 : string[][] = [];
var inputComplete = false;
var instructionLine = 0;
try {
    // read contents of the file
    const data = fs.readFileSync('input.txt', 'utf-8')
  
    // split the contents by new line
    const lines = data.split(/\r?\n/)

    for(var i = 0; !inputComplete; i++){
        // Split each line
        let row = lines[i].split(/    | /g);
        listOfLists.push(row);
        if(row.length < 2){
            inputComplete = true;
        }
 
    }
    listOfLists.pop();
    listOfLists.pop();

    for(var j = 0; j <= listOfLists.length ; j++){
        let newArray = [(j + 1) + ""];
        listOfLists2.push(newArray);
        for(var i = listOfLists.length - 1; i >= 0; i--){ 
            if(listOfLists[i][j] != ""){
                listOfLists2[j].push(listOfLists[i][j].replace(/\[|\]/g, ''));
            
            }
        }
        listOfLists2[j].shift();
    }
    
    instructionLine = listOfLists.length + 2;
    // console.log(listOfLists2);

    // //Logic instructions
    for(var i = instructionLine; i < lines.length; i++){
        // Split each line
        let row = lines[i].split(/\s/).map(Number).filter(Number);
        let tempNums;
        tempNums = listOfLists2[row[1]-1].splice((listOfLists2[row[1]-1].length-row[0]),row[0]);
        console.log("Moving: " + tempNums + " from " + row[1] + " to " + row[2]);
        if(tempNums != null){
            listOfLists2[row[2]-1] = listOfLists2[row[2]-1].concat(tempNums);
        }   
        
    }  
    console.log(listOfLists2);
        
  } catch (err) {
    console.error(err)
  }