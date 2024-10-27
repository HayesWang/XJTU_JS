/*
13. Average
Write a program that asks the user for space-separated values (string or integers),
and prints the average of the numbers (discarding strings).
e.g.,
input "10 8 9 9 0 6", prints
input "hello world", prints
input "10 hi 3", prints
Hint: use function parseInt _to convert a string to a number, then if the
conversion succeded using function isNaN() . Example assuming s is the string to
convert:
n = parseInt(s);
if (isNaN(n)) {
 console.log("The string has NOT been converted to a
number");
}
else {
 console.log("The string has been converted to a
number");
}
 */
const readline = require('readline-sync');
rl=readline.question("Enter space-separated values: ").split(" ");
let sum=0;
let ctr = 0;
for(let i=0;i<rl.length;i++){
    n=parseInt(rl[i]);
    if(!isNaN(n)){
        sum+=n;
    }else {
        ctr++;
    }
}
console.log("The average of the numbers is "+sum/(rl.length-ctr));