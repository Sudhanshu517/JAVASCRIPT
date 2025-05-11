console.log("Script loading....")

const fn=()=>{
  console.log("Nothing");
}

const callback=(arg)=>{
console.log(arg);
fn();
}

const loadScript=(src, callback)=>{
let ac = document.createElement('script');
ac.onload = callback("Sidos", fn());
document.head.append(ac);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

console.log('');

