console.log('This is promises');


let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    console.log(a);
    if(a < 0.5){
        reject("Not any random number was supporting you.");
    }
    else{
    setTimeout(()=>{
        console.log("Yes I am done.");
        resolve("Harry");
    },3000);

}
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    console.log(a);
    if(a < 0.5){
        reject("Not any random number was supporting you 2.");
    }
    else{
    setTimeout(()=>{
        console.log("Yes I am done 2.");
        resolve("Harry 2");
    },3000);

}
})


// prom1.then((a)=>{    
//     //  If network request successful
//     console.log(a);
//     // If network request not successful. Try showing it not as a error. 
// }).catch((err)=>{
//     console.log(err);
// })

// let p3 = Promise.all([prom1, prom2]);
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

// let p4 = Promise.allSettled([prom1, prom2]);
// p4.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

// let p5 = Promise.race([prom1, prom2]);
// p5.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

let p6 = Promise.any([prom1, prom2]);
p6.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

// promise.all: all promises resolved not rejected.
//promise.allsettled: all promises settled, not necessary they are resolved.