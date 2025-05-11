



let random = Math.random();
console.log(random);

let a = prompt("Enter first number")
let c = prompt("Enter operator")
let b = prompt("Enter second number")

let obj = {
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"*"

}

if(random > 0.1){
    if(c== "*")
{console.log(a*b)};
    if(c=="+")
    {console.log(a+b)};
    if(c=="-")
    {console.log(a-b)};
    if(c=="/")
    {console.log(a/b)};


    }

else {
    c=obj[c];
    if(c== "*")
        {console.log(a*b)};
            if(c=="+")
            {console.log(a+b)};
            if(c=="-")
            {console.log(a-b)};
            if(c=="/")
            {console.log(a/b)};
}
