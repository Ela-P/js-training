//Из презентации
//Задание 1 

const car = {
    name: "Audi",
    doors: 3,
};
for (let key in car) {
    // alert(key);
    //  alert(car[key])
}



// Задание 2 
const id = Symbol(111);

const user = {
    name: "Anton",
    email: "pitbool@mail.ru",
    phone: 375291232623,
    [id]: 111
};

const newUser = Object.assign({}, user);

//console.log(newUser);

//Задание 3

const circle = {
    radius: 2,
    color: "red",
    calculateCircumference: function () {
        console.log(2 * Math.PI * this.radius)
    }
}

//circle.calculateCircumference();


//Задание 4
//message.getMessage();
//message.showMessage();

const message = {
    text: "Hi",
    getMessage() {
        alert(message.text = `I am message!`)
    },
    showMessage() {
        alert(this.text)
    }
}


//Задание 5

const rectangle = {
    hight: 20,
    width: 10,
    getArea() {
        console.log(this.hight * this.width)
    }
}

//console.log(rectangle.hight);
//console.log(rectangle.width);
//console.log(rectangle.getArea());


// Задание 6
//console.log(isEmpty(obj));

const obj = {
    name: 20,
};

function isEmpty(obj) {
    for (let key in obj) {
    return false;
}
    return true;
}


//Задание 1 из телеграм 
    
