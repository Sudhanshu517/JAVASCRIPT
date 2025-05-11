console.log("Sidos")

let boxes = document.getElementsByClassName("box");
console.log(boxes);
// boxes[2].style.backgroundColor= "red";

document.getElementById("red").style.backgroundColor = "red";

// Query selects the first box with .box class 
// document.querySelector(".box").style.backgroundColor = "green";

//it will not work .style is for single element
console.log(document.querySelectorAll(".box"));
// document.querySelectorAll(".box").style.backgroundColor = "green";// this is wrong

//have to select each element and then apply style to it.
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})



