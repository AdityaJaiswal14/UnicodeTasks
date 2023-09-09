const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function countWords(n, words) {

  let wordCount = {};

  for(let word of words) {
      if(word in wordCount) {
          wordCount[word]++;
      } else {
          wordCount[word] = 1;
      }
  }


  let distinctWords = Object.keys(wordCount).length;
  let occurrences = Object.values(wordCount);
  
  console.log(distinctWords);
  console.log(occurrences.join(' '));}

let p = 0;
let w = [];

rl.question('Enter number of words: ', (input) => {
    n = parseInt(input);

    function inputWords(count) {
        if (count === n) {
            rl.close();
            countWords(n, w);
            return;
        }

        rl.question('Enter word ' + (count + 1) + ': ', (word) => {
            w.push(word);
            inputWords(count + 1);
        });
    }

    inputWords(0);
});
