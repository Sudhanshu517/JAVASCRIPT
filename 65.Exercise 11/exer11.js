// let arr = [1, 2, 3, 4, 5, 6];

// const fact=(a,b)=>{
// return a*b;
// }
// console.log(arr.reduce(fact));
// or you can do 
// let.   ...reduce((a,b)=>{
//     return a*b;
// })

//By using factorial

//Shortcut to form an array.
// let numb=6;
// let arr = Array.from(Array(numb+1).keys());
// console.log(arr);

let c= 1;

const fact=(num) => {
    for (let index = 1; index<=num; index++) {
         c = c * index;
        // console.log(c);
    }
    // console.log(c);
    return c;
    
}
let num = prompt("Enter a number")
alert("The answer is "+ (fact(num)) + " ");
// alert(`The answer is `(fact(num))` `) has error,check plz 

    
