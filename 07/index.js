//прототип 2

function Modal() {
      this.show = function() {
        console.log(`show ${this.name}`)
    }
    this.hide = function() {
        console.log(`hide ${this.name}`)
    }
}

function Warning(name, message) {
    this.name = name;
    this.message = message;
}

Warning.prototype = new Modal();

//function Success(name, message) {
  /// this.name = new 
//}


//const alex = new Warning("Alex", "hello");



//прототип 3


let obj = {
    bingoBall: 2,
    bingo() {
    if (this.bingo === this.bingo) {
        console.log("Bingo!")
    }
}
};

let obj2 = {
    bingeBall: 5,
    __proto__: obj,
};

//obj.bingo();
//obj2.bingo();


//классы

class Anouncer {
    present() {
        console.log(`Hello, I am ${this.type} and I have size ${this.size}`);
    }
}

class Figure extends Anouncer {
    constructor(size, someNumber) {
        super(someNumber);
        this.size = size;
    }
}

class Circle extends Figure{
    constructor(type,someNumber) {
        super(someNumber);
        this.type = type;
    }
    getArea() {
        console.log(this.size * this.size);
    }
}

class Square extends Figure {
    constructor(type,size) {
        super(size) 
        this.type = type;
    }
    getArea() {
        console.log(this.size * this.size);
    }
}

//const bla = new Square("piy", 5);
////console.log(bla);
//bla.getArea();

//const ugu = new Circle("pif-paf", 31);
///console.log(ugu);
//ugu.getArea();