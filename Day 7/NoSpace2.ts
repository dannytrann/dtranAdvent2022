// No Spaces 2
// Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update. What is the total size of that directory?
import * as fs from 'fs';
let message: string = 'No Spaces 2';
console.log(message);
let total = 0;
let toDelete = 0;
let smallestDirToDelete = 0;
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

      var i = 0;
      while(!dirFound){
        const row = array[i].split(' ');
        if(row[0] == '$'){
          if(row[1] == 'cd'){
            if(row[2] == dir && level == 0){
              //found the directory!
              // console.log("found the directory! " + row[2]);
              //if no directories, get size and return dirSum
              //if more directories, dig deeper
              dirFound = true;
              break;
            } else if(row[2] == '..'){
              level--;
            } else {
              level++;
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
        // console.log(row);
        if(!isNaN(Number(row[0]))){
          dirSum = dirSum + Number(row[0]);
          // console.log(Number(row[0]) + " is a Number! - total:" + dirSum);
        } else if(row[0] == 'dir'){
          // console.log(" ");
          // console.log("Finding size of  " + row[1]);
          var tempDirSum = findSizeofDir(array.slice(i, array.length), row[1]);
          dirSum = dirSum + tempDirSum;
          // console.log("tempDirSum of " + row[1] + " is " + tempDirSum + " || dirSum: " + dirSum);
        } else if(dirSum < 100000){
            // console.log("dirSum < 100000");
            total = total + dirSum;
            // console.log('Adding ' + dirSum + " to total: " + total);
            return dirSum;
        } else {
          if(dirSum > 7048086){
            console.log("Over 30 000 000")
            toDelete = dirSum;
            if(toDelete < smallestDirToDelete){
              smallestDirToDelete = toDelete;
            } else
            if(smallestDirToDelete == 0){
              smallestDirToDelete = toDelete;
            }
          }
          console.log(dir + " " + dirSum)
          return dirSum;
        }
        if(i == array.length - 1){
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
    var totalSize = findSizeofDir(lines.slice(j, lines.length), '/');
    console.log(totalSize);
    console.log(smallestDirToDelete);
    console.log(total);
  } catch (err) {
    console.error(err)
  }