console.log("Script initializing");

rand = Math.random()
console.log(rand);
let c = document.body.firstElementChild;
let d = document.querySelector(".container");

if (rand < 0.33){
   
    d.children[0].style.color = "blue";
    d.children[0].style.backgroundColor = "yellow";
    }
else if(rand > 0.33 && rand < 0.67){
    d.children[0].style.color = "pink";
    d.children[0].style.backgroundColor = "violet";
}
else{
    c.children[0].style.color = "blue";
    c.children[0].style.backgroundColor = "green";
}

rand = Math.random()
console.log(rand);
if (rand < 0.33){
   
    d.children[1].style.color = "yellow";
    d.children[1].style.backgroundColor = "blue";
    }
else if(rand > 0.33 && rand < 0.67){
    d.children[1].style.color = "violet";
    d.children[1].style.backgroundColor = "pink";
}
else{
    c.children[1].style.color = "green";
    c.children[1].style.backgroundColor = "violet";
}

rand = Math.random()
console.log(rand);
if (rand < 0.33){
   
    d.children[2].style.color = "blue";
    d.children[2].style.backgroundColor = "aqua";
    }
else if(rand > 0.33 && rand < 0.67){
    d.children[2].style.color = "pink";
    d.children[2].style.backgroundColor = "violet";
}
else{
    c.children[2].style.color = "brown";
    c.children[2].style.backgroundColor = "yellow";
}

rand = Math.random()
console.log(rand);
if (rand < 0.33){
   
    d.children[3].style.color = "blueviolet";
    d.children[3].style.backgroundColor = "yellowgreen";
    }
else if(rand > 0.33 && rand < 0.67){
    d.children[3].style.color = "pink";
    d.children[3].style.backgroundColor = "crimson";
}
else{
    c.children[3].style.color = "yellow";
    c.children[3].style.backgroundColor = "chocolate";
}

rand = Math.random()
console.log(rand);
if (rand < 0.33){
   
    d.children[4].style.color = "blue";
    d.children[4].style.backgroundColor = "cyan";
    }
else if(rand > 0.33 && rand < 0.67){
    d.children[4].style.color = "crimson";
    d.children[4].style.backgroundColor = "darkblue";
}
else{
    c.children[4].style.color = "chocolate";
    c.children[4].style.backgroundColor = "orange";
}


