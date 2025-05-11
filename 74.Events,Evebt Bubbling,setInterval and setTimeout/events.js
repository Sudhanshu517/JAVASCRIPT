let button = document.getElementById("btn")

// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
// above link is for different events list.

button.addEventListener("dblclick", ()=>{
   document.querySelector(".box").innerHTML = "  <b>Yay you were clicked </b>Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{
   alert("Don't hack us by right click please.");

})

document.addEventListener("keydown", (e)=>{
console.log(e, e.key, e.keyCode);
})