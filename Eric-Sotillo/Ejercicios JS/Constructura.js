
/*persona = function (name, age){
    console.log(this);
    this.name = name;
    this.age = age;
    this.yearOfBirth = function() {
        return console.log(2023-this.age);
    }
}

let robert = new persona ("robert",40);
console.log(robert)
robert.yearOfBirth()*/


class persona {
    constructor (name,age){
        this.name = name;
        this.age= age;
    }
    get yearOfBirth(){
        return 2023 - this.age
    }
}


class persona {
    constructor (name,age){
        this.name = name;
        this.age= age;
    }
    get yearOfBirth(){
        let year = 2023 - this.age;
        //console.log(year);
        return year;
    }
}

let some = new persona ("Mono",25);
console.log(some);
some.yearOfBirth

class Profe extends persona { //extends para definir el padre de la class prof
    get yearOfBirth(){
        let year = super.yearOfBirth-1; //el super es que busca a la class que es su padre
        //console.log(year);
        return year;
    }
}

let prof = new Profe ("mario",45);
console.log(prof);
console.log(prof.yearOfBirth);