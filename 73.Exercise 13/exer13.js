let a = document.querySelector(".views");

if(a>=(parseInt(100000))){
a.replaceWith("K");
}
else if(a>=100000000){
    a.append("M");
}
else{
    
    a.replaceWith("B");
}

var i = 0;

function duplicate() {
    var original = document.getElementById('duplicater' + i);
    var clone = original.cloneNode(true); // "deep" clone
   clone.id = "duplicater" + ++i; // there can only be one element with an ID
    clone.onclick = duplicate; // event handlers are not cloned
    original.parentNode.appendChild(clone);
}

b = document.querySelector(".button");

b.addEventListener("dblclick",()=>{
    duplicate();

})

 