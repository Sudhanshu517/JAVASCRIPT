let arr = [1, 3, 5, 7, 9, 11];
// let new_arr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     new_arr.push(element**2);

    
// }


let new_arr = arr.map((e)=>{
return e**2;
})
console.log(new_arr);
const greaterthanseven = (e)=>{
    if(e>7){
        return true;
    }
    return false;
}

console.log(new_arr.filter(greaterthanseven));
let arr2 = [1, 2, 3, 4, 5, 6];

const red =(a, b)=>{
    return a=b;
}
console.log(arr2.reduce(red));

console.log(Array.from("Sidos"));

