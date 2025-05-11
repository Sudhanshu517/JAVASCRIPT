// Arrays are mutable
let arr = [1, 2, 3, 4, 5,];
arr[0]=555;

console.log(arr);
console.log(arr.length);
console.log(arr[0])
console.log(arr[3])
console.log(arr[2])
console.log(arr[1])
console.log(typeof arr);

// Strings are immutable. 
let a ="Sidos";
a[0] = "g";
console.log(a);

console.log(arr.toString());
console.log(arr.join(" and "));

// unshift 'push' ka bhai hota history, shift 'pop' ka bhai hota hai. 

let a1 = [2, 3, 4,];
let a2 = [3, 4, 5, 6];
let a3 = [7, 8, 9];

console.log(a1.concat(a2, a3));

let n = [2, 3, 67, 23, 5, 68];
// console.log(n.sort());
console.log(n.splice(1,3));
console.log(n);

m = [2, 3, 45, 6, 8];
console.log(m.slice(2,4));
console.log(m);
// Slice takes out some elements from array and forms a new array. The initial array remains same. 


 

