console.log("I am a tutorial on loops.")

let a=1;
for (let i = 0; i < 100; i++) {
    console.log(a+i);
    
}

let obj = {
    name: "Sid",
    role: "Programmer",
    company:"Codewithsid"

}

for (const key in obj) {
    
        const element = obj[key];
      console.log(key,element);
    
}
for (const c of "Sidos") {
    console.log(c);
}

let i=0;
while(i<6){
    console.log(i)
    i++;
}

let j=5;
do {
    console.log(j);
    j++;
} while (j<6);