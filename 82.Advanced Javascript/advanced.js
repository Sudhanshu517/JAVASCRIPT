console.log(a1);

const sum = async(a,b,c)=>{ // const and let don't support hoisting
    return a+b+c;
}

//Immediately invoke function expression(IIFE)
(async function main(){
    
    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    let [x, y, ...rest] = [4, 3, 5, 7, 8, 9, 10]
    console.log(x, y, rest)
    
    let obj ={
        m: 1,
        n: 2,
        o: 3
    }
    
    let {m, n }= obj;
    console.log(m, n)

    arr=[1, 5, 8]
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr)) //Spreading
})()

var a1 = 6;

const sleep = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
         resolve(45)   
        }, 1000)
    })
    }
    
   




