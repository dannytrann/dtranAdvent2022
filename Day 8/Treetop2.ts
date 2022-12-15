// Treetop Tree House 2
// Consider each tree on your map. What is the highest scenic score possible for any tree?
import * as fs from 'fs';
let message: string = 'Treetop Tree House 2';
console.log(message);
let best = 0;
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
    
    var search = function(row: number, col: number, pointer: number[], direction: string) : number{
      var newPointer:number[] = [];
      var treeScore = 0;
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

      if(forest[row][col] > forest[pointer[0]][pointer[1]]){
        if(pointer[0] == 0 || pointer [0] == forest[0].length - 1 ||
          pointer[1] == 0 || pointer [1] == forest.length - 1){
          return ++treeScore;
        } else {
          //tree in the next direction is smaller than center
          return (++treeScore + search(row, col, newPointer, direction));
        }
      } else {
        //tree in direction is larger or the same 
        return ++treeScore;
      }
    }


    for(var row = 1; row < forest.length-1; row++){
      for(var col = 1; col < forest[row].length-1; col++){


        var n = search(row, col, [row-1, col], "north");
        var e = search(row, col, [row, col+1], "east");
        var s = search(row, col, [row+1, col], "south");
        var w = search(row, col, [row, col-1], "west");

        if(n*e*s*w > best){
          best = n*e*s*w;
        }
      }
    }
    console.log(best);
  } catch (err) {
    console.error(err)
  }