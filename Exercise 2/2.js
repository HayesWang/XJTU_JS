/*
2. Outer Pairs
Take an array of numbers (bound it to a variable], and write a program that if the
array consists of either odd or even outer pairs prints their sum; otherwise it prints
“wrong input”.
e.g.,
[1 2 5 10 3 10 7]  -> outer pairs: [1,7], [2, 10], [5,3], [10, 10] => prints 48
[1 2 4 10 3 10 7]  -> outer pairs: [1,7], [2, 10], [4,3], [10, 10] => prints
“wrong input”
 */
const readline = require('readline-sync');
let rl = readline.questionInt("Enter a sequence of space-separated numbers: ").split(" ");

for (let i = 0; i < rl.length; i++) {
    rl[i] = parseInt(rl[i]);
}
let len = rl.length;
let sum = 0;
let check = 0;
for (let i = 0; i < len; i++) {
    if((rl[i]+rl[len-1-i]) % 2 === 0) {
        sum += rl[i] + rl[len - 1 - i];
    }else {
        check = 1;
        break;
    }
}
if(check === 1) {
    console.log("wrong input");
}else if(len%2 === 0) {
    console.log(sum/2);
}else if(len%2 === 1) {
    console.log(sum/2+rl[Math.floor(len/2)]);
}

