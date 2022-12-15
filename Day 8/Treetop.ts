// Treetop Tree House 1
// Consider your map; how many trees are visible from outside the grid?

import * as fs from 'fs';
let message: string = 'Treetop Tree House 1';
console.log(message);

let visibleTrees: number = 0;
try {
    // read contents of the file
    const data = fs.readFileSync('input.txt', 'utf-8')
  
    // split the contents by new line
    const lines = data.split(/\r?\n/)

    var forest:number[][] = [];

    lines.forEach(line =>{
      var row = line.split('');
      forest.push(row.map(Number));
    })
    
    var search = function(row: number, col: number, pointer: number[], direction: string) : boolean{
      var newPointer:number[] = [];
      if(pointer[0] != 0){
        switch(direction) {
          case 'north':
            newPointer = [pointer[0]-1,pointer[1]];
            break;
          case 'south':
            newPointer = [pointer[0]+1,pointer[1]];
            break;
          case 'west':
            newPointer = [pointer[0],pointer[1]-1];
            break;
          case 'east':
            newPointer = [pointer[0],pointer[1]+1];
            break;
        }
      }
      // if(row == 42 && col == 17){
      //   console.log(" ");
      //   console.log('[' + (row+1) + '] [' + (col+1) + ']  = ' + forest[row][col]);
      //   console.log(pointer  +'= ' + forest[pointer[0]][pointer[1]]);
      //   console.log(newPointer  +'= ' + forest[newPointer[0]][newPointer[1]]);
      //   console.log(forest[row][col] + " > " + forest[pointer[0]][pointer[1]] + " " + direction);
      // }
      if(forest[row][col] > forest[pointer[0]][pointer[1]]){
        if(pointer[0] == 0 || pointer [0] == forest[0].length - 1 ||
          pointer[1] == 0 || pointer [1] == forest.length - 1){
          return true;
        } else {
          return search(row, col, newPointer, direction);
        }
      } else {
        return false;
      }
    }


    for(var row = 1; row < forest.length-1; row++){
      for(var col = 1; col < forest[row].length-1; col++){
        // console.log('[' + (row+1) + '] [' + (col+1) + ']' + forest[row][col] + " " +search(row, col, [row-1,col], "west"));


        if(search(row, col, [row-1, col], "north") ||
        search(row, col, [row, col+1], "east") ||
        search(row, col, [row+1, col], "south") ||
        search(row, col, [row, col-1], "west")){
          visibleTrees++;
        }
      }
    }
    console.log(visibleTrees + (forest.length*2) + (forest[0].length*2-4));

  } catch (err) {
    console.error(err)
  }