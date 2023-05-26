class OtherArray {
    constructor(...args){
        if (args.length === 1 && typeof args[0] == 'number'){
            this
        }
    }
    get data () {
        return Object.keys(this)
            .filter((key) => !isNaN(key))
            .map((key) => this[key]);
    }
    map(callback){
        let result = [];
        for (let item of this.data){
            result.push(callback(item));
        }
        return result;
    }
    /*push(newElement) {
        this[this.length] = newElement;
        this.length++;
    }*/
}

let arr = new OtherArray ([1,2,3]);
