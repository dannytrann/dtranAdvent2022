// Supply Stacks 1
// After the rearrangement procedure completes, what crate ends up on top of each stack?

import { reverse } from 'dns';
import * as fs from 'fs';
import { isArrayBufferView } from 'util/types';
let message: string = 'Supply Stacks 1';
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
    
    instructionLine = listOfLists.length + 1;

    // //Logic instructions
    for(var i = instructionLine; i < lines.length; i++){
        // Split each line
        let row = lines[i].split(/\s/).map(Number).filter(Number);
        let tempNum;
        for(var j = 0; j < row[0]; j++){
            tempNum = listOfLists2[row[1]-1].pop();
            if(tempNum != null){
                listOfLists2[row[2]-1].push(tempNum);
            }   
        }
    }  
    console.log(listOfLists2);
        
  } catch (err) {
    console.error(err)
  }