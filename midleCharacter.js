/*
    You are going to be given a word. Your job is to return
    the middle character of the word. If the word's length
    is odd, return the middle character. If the word's length
    is even, return the middle 2 characters.

    #Examples:

    Kata.getMiddle("test") should return "es"

    Kata.getMiddle("testing") should return "t"

    Kata.getMiddle("middle") should return "dd"

    Kata.getMiddle("A") should return "A
*/

function getMiddle(word){
  let wordArr = word.split("");
  let middleIndex = wordArr.length/2;

  if(wordArr.length % 2 === 0) return `${wordArr[middleIndex-1]}${wordArr[middleIndex]}`

  return `${wordArr[Math.floor(middleIndex)]}`
}

/*
function getMiddle(s){
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
*/

console.log(getMiddle("testing"))