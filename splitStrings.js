/*
Complete the solution so that it splits the string into pairs of two 
characters. If the string contains an odd number of characters then 
it should replace the missing second character of the final pair with
an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str){
   let arrStr = str.split("");
   let newArr = [];

   for(let i=0; i<arrStr.length; i+=2){
        if(arrStr[i+1]) newArr.push(arrStr[i]+arrStr[i+1]);
        else newArr.push(arrStr[i]+"_");
   }

   return newArr;
}

/* Con Expresión regular

function solution(s){
    return (s+"_").match(/.{2}/g)||[]
}

*/ 

console.log(solution("abcdef"));