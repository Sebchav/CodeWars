function alphabetPosition(text) {
  let newText = "";
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                    'u', 'v', 'w', 'x', 'y', 'z'];
  
  for(let i=0; i<text.length; i++){
    if(alphabet.includes(text[i].toLowerCase())) newText += (alphabet.indexOf(text[i].toLowerCase())+1) + " "; 
  }

  return newText.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))