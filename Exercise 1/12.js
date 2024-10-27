/*
12. Less than
Write a program that asks the user for a sequence of space-separated numbers,
then asks for another number and prints out only the numbers in that are less than
, without duplicates
e.g.,
input "2 5 19 4 2" and , prints
In [ ]:
l
x l
x
l = x = 5 2 4
 */
const readline = require('readline-sync');
let rl = readline.question("Enter a sequence of space-separated numbers: ").split(" ");
let lessThan = readline.question("Enter a number: ");
let len = rl.length;
//console.log("len:"+len);
check = new Array(1000).fill(0);
answer = "";
for(let i = 0; i < len; i++) {
    if(check[Number(rl[i])]===0 && Number(rl[i])<Number(lessThan)){
        check[Number(rl[i])]=1;
        answer += rl[i] + " ";
    }
}
console.log(answer);


/*for(let i = 0; i < len; i++) {
    check[Number(rl.split(" ")[i])]=1;
}
let lessThan = readline.question("Enter a number: ");
for(let i = 0; i < lessThan; i++) {
    if(check[i] === 1){
        console.log(i);
    }
}
 */