// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// solution
function solution(str) {
  let strNew = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strNew += str[i];
  }
  return strNew;
}
//solution
function solution(str) {
  const reversedString = str.split("").reverse().join("");
  return reversedString;
}
