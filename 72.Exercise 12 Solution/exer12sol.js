console.log("Script initializing...");

let c = document.getElementsByClassName("box");




function GetRandomColor(){
//     formula: Math.ceil(a + Math.random()*(b-a)) .To generate a random no. between a and b
// Here, formula: Math.ceil(0 + Math.random()*(b-a))
    value1 = Math.ceil(0 + Math.random() * 255);
    value2 = Math.ceil(0 + Math.random() * 255);
    value3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${value1}, ${value2}, ${value3})`;
}


console.log(GetRandomColor);
c[0].style.color = GetRandomColor();
c[0].style.backgroundColor = GetRandomColor();