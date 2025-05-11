let arr = [10, 23, 44, 50, 68, 70, 8];
//  arr[0] = prompt("Enter the first element");
//  arr[1] = prompt("Enter the second element");
//  arr[2] = prompt("Enter the third element");
//  arr[3] = prompt("Enter the fourth element");
//  arr[4] = prompt("Enter the fifth element");
//  arr[5] = prompt("Enter the sixth element");
//  console.log(arr); 

// let a = prompt("Enter an element");
// while(a!=0){
//      a = prompt("Enter an element");
//      console.log(arr.unshift(a));

//  };
//  console.log(arr);


// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if(element%10==0){
// console.log(element);
//     }

//     }

// let new_arr = arr.map((e)=>{
// return e**2;
// })
// console.log(arr_new);
console.log(arr);


let new_arr = arr.map((e)=>{
    return e**2;
});
console.log(new_arr);

arr1=[1, 2, 3, 4, 5, ,6, 7, 8, 9, 10];

// const fact=(a,b)=>{
// return a*b;
// }
// arr2.reduce(fact);

const fact =(a,b)=>{
    return a*b;
}
console.log(arr1.reduce(fact));


