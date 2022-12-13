// Tuning Troubles 1
// How many characters need to be processed before the first start-of-packet marker is detected?

/*

cd - add object to Directories array with the sum of that directory
12345 filename.txt - count a sum for current directory
dir dirname - if directory is not in the directories array, keep pointer ref to this directory and begin recursion to find size of directory
This will entail going next line until cd (directory name) and ls until there is a directory where there is no directories within it
Once end is found, add up the sum in that directory and push directory object in Directories Array for reference.
When adding files and dir in directories, the directories shouold exist in the Array Directories.
Once recursion goes back to top directory, go to next

to find the right directory, one must count the levels to ensure the right directory is searched


Arrays
Directories
*/

import { dir } from 'console';
import * as fs from 'fs';
let message: string = 'No Spaces 1';
console.log(message);
let skipDirectory = false;
let total = 0;
try {
    // read contents of the file
    const data = fs.readFileSync('input.txt', 'utf-8')
  
    // split the contents by new line
    const lines = data.split(/\r?\n/)
    
    var findSizeofDir = function(array: string[], dir: string){
      let dirSum = 0;
      let level = 0;
      let dirFound = false;
      let endOfDir = false;
      skipDirectory = false;
      var i = 0;
      while(!dirFound){
        const row = array[i].split(' ');
        if(row[0] == '$'){
          if(row[1] == 'cd'){
            if(row[2] == dir && level == 0){
              //found the directory!
              console.log("found the directory! " + row[2]);
              //if no directories, get size and return dirSum
              //if more directories, dig deeper
              dirFound = true;
              break;
            } else if(row[2] == '..'){
              level--;
              // console.log(" ".repeat(level)  + "level "+ level + " " + row);
            } else {
              level++;
              // console.log(" ".repeat(level)  + "level "+ level + " " + row);
            }
          }
        }
        i++;
      }
      // now that the directory is found, count the contents

      //skip the ls
      i = i + 2;
      while(!endOfDir){
        const row = array[i].split(' ');
        console.log(row);
        if(!isNaN(Number(row[0]))){
          if(Number(row[0]) > 100000){
            dirSum = 0;
            console.log("dirSum over 100,000, skipDirectory = true;");
            skipDirectory = true;
          } else if(!skipDirectory){
            dirSum = dirSum + Number(row[0]);
            console.log("Adding " + row[0] + " to " + dirSum); 
          } else if(Number(row[0]) <= 100000 && skipDirectory){
            console.log("Number is below 100,000 but directory size is already too big");
          }
        } else if(row[0] == 'dir'){
          console.log("finding size of " + row);
          dirSum = dirSum + findSizeofDir(array.slice(i, array.length), row[1])
          console.log(row + " here");
        } else if(row[1] == 'cd'){
            if(row[2] == '..'){
            //count is done
            console.log("count for current dir is done!");
            console.log(dirSum);
            skipDirectory = false;
            total = total + dirSum;
            console.log("current total: " + total);
            return dirSum;
          } else {
            console.log("end of top level");
            console.log("current total: " + total);
            return dirSum;
          }
          
        } 
        console.log(i + " "+ array.length);
        if(i == array.length -1){
          return dirSum;
        } else {
          i++;
        }
      }
      return dirSum;
    }
    
    var j = 0;
    const row = lines[j].split(' ');
    console.log("toplevel :" + row);

    //find size of directory brah
    total = total +findSizeofDir(lines.slice(j, lines.length), '/');
    
    console.log(total);
  } catch (err) {
    console.error(err)
  }