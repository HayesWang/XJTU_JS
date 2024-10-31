/*
1. Array Overlap
Take two arrays (you can use the ones in the example below) and write a program
that prints an array that contains only the elements of the two lists that are equal and
in the same position without duplication.
e.g.,
a = [5, 3, 5, 44, 4, 55, 4]
b = [5, 4, 55, 4, 4, 55, 4, 55, 9, 10, 11]
prints 5 4 55
 */

a = [5, 3, 5, 44, 4, 55, 4];
b = [5, 4, 55, 4, 4, 55, 4, 55, 9, 10, 11];
result = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
        result.push(a[i]);
    }
}
result_without_duplicates = new Set(result);
for (let i of result_without_duplicates) {
    console.log(i);
}