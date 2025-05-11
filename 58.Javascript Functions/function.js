function nice(name) {
console.log("Hey " + name +" you are nice!");
console.log("Hey " + name +" you are well!");
console.log("Hey " + name +" you are nice beard!");
console.log("Hey " + name +" you are nice bike!");
    }
    nice("Honey");


// console.log("Hey Sid you are nice!");
// console.log("Hey Sid you are well!");
// console.log("Hey Sid you are nice beard!");
// console.log("Hey Sid you are nice bike!");

// function sum(a,b) {
//     console.log(a+b);
// }
// sum(3,5);

function sum(a, b, c=3){
    console.log(a,b,c);
    return a + b + c;
}
result1 = sum(3);
result2 = sum(3, 15);
result3 = sum(13, 5, 2);
console.log("The sum of these numbers is: ",result1);
console.log("The sum of these numbers is: ",result2);
console.log("The sum of these numbers is: ",result3);

const func1 = (x)=>{
    // This way you can make func a constant and can also pass a function into another function.
    console.log("I am an arrow function",x);
}

func1(33);
func1(34);
func1(67);