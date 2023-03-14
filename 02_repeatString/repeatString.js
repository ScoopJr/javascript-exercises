/* ## Hints
- Take note of the above function call- how exactly is it being called?
- You're going to want to use a loop for this one.
- Create a variable to hold the string you're going to return, 
    create a loop that repeats the given number of times and add the given string to the result on each loop.*/


const repeatString = function (word, times) {
    if (times < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < times; i++) {
      string += word;
    }
    return string;
  };
  
// Do not remove
module.exports = repeatString;
