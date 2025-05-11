// let obj= {
//     a: 1,
//     b: "Harry"
// }

// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps:true
// };

// rabbit.__proto__ = animal; //sets rabbit.[[prototype]]= animal.

class Animal{
constructor(name){
    this.name= name;
    console.log("Object is running...")
}

eats(){
    console.log("Kha rha hoon...")
}

jumps(){
    console.log("Kood rha hoon...")
}
}

let a = new Animal("bunny");
console.log(a);

class Lion extends Animal
{
    constructor(name){
        super(name)
        this.name= name;
        console.log("Object is running and it is a lion...")
    }

    eats(){
        super.eats();
        console.log("Kha rhaa hoon roar...")
    }
    
}

let l = new Lion("Shera");
console.log(l);


