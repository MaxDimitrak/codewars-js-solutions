// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let result = '';
    for (let i = 0; i < str.length; i++){
        result += str[str.length - i - 1]
    }
    return result;
}