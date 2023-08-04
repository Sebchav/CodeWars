/*
Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output 
should be capitalized only if the original word was capitalized
(known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/

function toCamelCase(str) {
    let capitalizeNext = false;
    let result = "";
  
    for (const letter of str) {
      if (letter === "_" || letter === "-") {
        capitalizeNext = true;
      } else {
        result += capitalizeNext ? letter.toUpperCase() : letter;
        capitalizeNext = false;
      }
    }
  
    return result;
}
  
/*
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, letter) => letter.toUpperCase());
}
*/

console.log(toCamelCase("the_stealth_warrior"))