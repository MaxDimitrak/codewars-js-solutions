// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string){
  const wordsArr =  string.split(' ');
  const result = []
    wordsArr.forEach(w => {
        if (w.length > 4){
            result.push(w.split('').reverse().join(''))
        }else{
            result.push(w)
        }
    })
  return result.join(' ');
}

console.log(spinWords('This is another test'));
