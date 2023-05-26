class NotanArray {
    *[Symbol.iterator]() {

        yield 4 //es como un return, no es una variable. Devuelve esta y continua
        yield 5
        yield 68
    }
}

/*let noSoyunArray = 3;*/// al pasarle algo que no es iterable, no funciona

let noSoyunArray = new NotanArray();

for (let i of noSoyunArray){
    console.log(i);
}// al pasarle algo que no es iterable, no funciona

