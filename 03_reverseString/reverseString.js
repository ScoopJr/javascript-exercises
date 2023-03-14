/* ## Hints
Strings in JavaScript cannot be reversed directly 
    so you're going to have to split it into something else first.. 
    do the reversal and then join it back together into a string.*/

const reverseString = function(string) {
    return string.split("").reverse().join("");
};


// Do not edit below this line
module.exports = reverseString;
