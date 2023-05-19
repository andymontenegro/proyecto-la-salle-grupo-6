class Filterable {
    constructor (data){
        this.data = data;        
    }

    filtros = new Set(); //creamos una variable para guardar los filtros que se van añadiendo
//Set es 
    addFilter(filtro){
        this.filtros.add(filtro);
    }

    removeFilter(filtro){;
        this.filtros.delete(filtro);
    }

    clearFilter(){
        this.filtros.clear();
    }

    run(){
        return this.data.filter(persons => [...this.filtros].every(filtro => filtro(persons)));
    }
}


let persons = [{name: "eric", age: 52 }, {name: "Jack", age: 60 },{name: "mono", age: 13 }];
let list = new Filterable(persons);
let ageUp50 = p => p.age > 50;
list.addFilter(ageUp50);
console.log(list.run());
let nameJack = p => p.name == "Jack";
list.addFilter(nameJack);
console.log(list.run());
list.removeFilter(nameJack);
console.log(list.run());
list.clearFilter();
console.log(list.run());