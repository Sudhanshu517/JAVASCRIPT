class User{
    constructor(name){
        this.name = name
    }

    get name(){
        return this._name
    }

    set name(value){
        if (value.length < 4){
            console.log("Name is too short.")
        }
    }
}

let a = new User("Sidos");
let b = new User("Hathi");

a.name = "";


console.log(a);
console.log(b);
