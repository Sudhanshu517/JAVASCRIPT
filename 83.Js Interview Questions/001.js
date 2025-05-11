console.log("Script initializing....");


let names = [
 "Rachna","Sagar", "Purav","Sudhanshu","ShreeSinghaniya","Shree"]

 let houses = []
 
 console.log(names);
 for (let index = 0; index < names.length; index++) {
    const name = names[index];
    
    if(name.length < 6){
       houses.push("Gryffindor");
   }
   else if(name.length < 8){
       houses.push(" Hufflepuff");
   }
   else if(name.length < 12){
       houses.push("Ravenclaw");
   }
   else{
       houses.push("Slytherin")
   }
 }

console.log(houses);
