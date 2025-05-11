console.log("Hello I am conditional tutorial")

let age = 3;
let grace = 2;

if((age+grace)>18){
    console.log("You can drive");
}
else{
    console.log("You can't drive.")
}

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);

age+=grace;
console.log(age);

age = 1;
if(age!=18){
    console.log("You can drive.")
}
else{
    console.log("You can't")
}

// I am a
// multiline
// comment
age = 0;
if(age==18){
    console.log("You can try")
}
else if(age==0){
console.log("Are you kidding?")
}
else{
    console.log("Go away")
}
let a =5;
let b=6;
let c=a>b?(a-b):(b-a);
console.log(c);
