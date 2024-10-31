/*
4. Partial Sums
Take an array the array l of numbers (bound it to a variable], and write a program that prints
res l
of the partial sums of computed in the following way.
The first element of res l
is the first element of
The second element of res
is the summation from the second to the third
element of
l
The third element of res
is the summation from the fourth to the sixth element of
l
The fourth element of res
is the summation from the seventh to the tenth
element of and so on...
l
If the summation could not be completed because summation.
l
ends just truncate the
e.g.,
l= res =
[1, 5, 6] , [1, 11]
l= res =
[1, 5, 6, 1, 1, 1, 2, 2, 2, 2] , [1, 11, 3, 8]
[1, 4, 9, 16,
l= res =
[1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6] , 11]
 */

const readline = require('readline-sync');
let rl = readline.question("Enter a sequence of space-separated numbers: ").split(" ");
rl = rl.map(Number);
res=[];
let ctr=0;
for(let i=0;i<rl.length;i+=ctr) {
    //console.log(i);
    let sum=0;
    ctr++;
    for(let j=i;j<i+ctr;j++) {
        if(j<rl.length) {
            sum+=rl[j];
        }
    }
    res.push(sum);
}
console.log(res);