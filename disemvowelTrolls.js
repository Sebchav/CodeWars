/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of
 the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return 
a new string with all vowels removed.

For example, the string "This website is for losers LOL!"
 would become "Ths wbst s fr lsrs LL!".
*/

function disemvowel(str) {
    let arrStr = str.split("");
    let newArrStr = [];
    let vowels = ["a", "e", "i", "o", "u"];

    arrStr.forEach(letter => (!vowels.includes(letter.toLowerCase())) && newArrStr.push(letter))
    
    return newArrStr.join("");
}

/* function disemvowel(str) {
   return str.replace(/[aeiou]/gi, '');
   }   
*/ 

console.log(disemvowel("This website is for losers LOL!"));