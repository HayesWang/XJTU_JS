/*
14. Divisors
Create a program that asks the user for a number and then prints out the array of all
the divisors of that number.
(If you don’t know what a divisor is, it is a number that divides evenly into another
number. For example, is a divisor of because has no remainder.)
 */
const readline = require('readline-sync');
let num = readline.question("Enter a number: ");
for(let i=0; i<=num; i++){
    if(num%i===0){
        console.log(i);
    }
}