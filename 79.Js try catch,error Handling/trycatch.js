let a = prompt("Enter first number");

let b = prompt("Enter second number:")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed.")
}

let sum = parseInt(a) + parseInt(b);



function main(){
    let x = 5;
try {
    console.log("The sum is", sum*x);
    return true;
} catch (error) {
    console.log("Error aa gya bhai..")
    return false
//     alert(error.name)
//     alert(error.message)
//     alert(error.stack)
 }
finally{
    console.log("files are being closed and db is being closed")

}
}

let c = main();


// try {
//     setTimeout(()=>{
//         console.log("I am timeout")
//     }, 5000)
// } catch (error) {
//     console.log("I am error.")
// }


