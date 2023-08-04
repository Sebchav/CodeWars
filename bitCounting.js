var countBits = function(n) {
    return n.toString(2).split("").reduce((total, num) => (num == "1") ? total+1 : total, 0);
}

/*
    countBits = n => n.toString(2).split('0').join('').length;
*/

console.log(countBits(12));