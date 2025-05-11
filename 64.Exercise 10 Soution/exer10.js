let first, second, third;

let random = Math.random();
console.log(random);
if(random < 0.33){
    first = "Crazy";
}
else if(0.67 > random  && random > 0.33){
    first = "Amazing";
}
else{
    first = "Fire";
}

 random = Math.random();
 console.log(random);
if(random < 0.33){
    second = "Engine";
}
else if(0.67 > random > 0.33){
    second = "Foods";
}
else{
    second = "Garments";
}

random = Math.random();
console.log(random);
if(random < 0.33){
    third = "Bros";
}
else if(0.67 > random > 0.33){
    third = "Limited";
}
else{
    third = "Hub";
}



console.log(first.concat(second, third));