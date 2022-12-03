// Rock Paper Scissors

// A Y
// B X
// C Z
// This strategy guide predicts and recommends the following:

// In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
// In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
// The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
// In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

// What would your total score be if everything goes exactly according to your strategy guide?
// Win 6
// Draw 3
// Lose 0
import * as fs from 'fs';
let message: string = 'Rock Paper Scissors';
console.log(message);
let score = 0;
try {
    // read contents of the file
    const data = fs.readFileSync('input.txt', 'utf-8')
  
    // split the contents by new line
    const lines = data.split(/\r?\n/)
  
    // print all lines
    lines.forEach(line => {
        let opponent = '';
        let me = '';
        for (const ch of line){
            if(ch != ' '){
                switch(ch){
                    case 'X': {
                        if(opponent == 'A'){
                            score += 4;
                        }
                        if(opponent == 'B'){
                            score += 1;
                        }
                        if(opponent == 'C'){
                            score += 7;
                        }
                        break;
                    }
                    case 'Y': {
                        if(opponent == 'A'){
                            score += 8;
                        }
                        if(opponent == 'B'){
                            score += 5;
                        }
                        if(opponent == 'C'){
                            score += 2;
                        }
                        break;
                    }
                    case 'Z': {
                        if(opponent == 'A'){
                            score += 3;
                        }
                        if(opponent == 'B'){
                            score += 9;
                        }
                        if(opponent == 'C'){
                            score += 6;
                        }
                        break;
                    }
                    default: {
                        opponent = ch
                        break;
                    }
                }   
            }
        }
    })
    console.log(score);
    
  } catch (err) {
    console.error(err)
  }