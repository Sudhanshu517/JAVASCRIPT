// Strings are immutable.

console.log("This is strings tutorial.");
let a = "HArry";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length);
let real_name = "Harry";
let friend = "Sid";
console.log("His name is "+ real_name +" and his friend name is "+ friend + "");
console.log(`His name is ${real_name} and his friend's name is ${friend}`);

let b = "Shivam";
console.log(b.toLowerCase());
console.log(b.toUpperCase());
console.log(b.length);
console.log(b.slice(1,4));
console.log(b.slice(1));

console.log(b.replace("Sh","77"));

console.log(b.concat(a, "Aishwarya","Rahul", "Priya"));

console.log(b);

// Exercise 4 solution
console.log("har\"".length);
let c = "Good";
console.log(c.toLowerCase());

let d = "Please give Rs 1000";
console.log(d.slice(15,19))
console.log(d.replace("a", "3"));
