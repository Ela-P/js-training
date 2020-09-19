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
//console.log(newUser);

const user = {
    name: "Anton",
    email: "pitbool@mail.ru",
    phone: 375291232623,
    //[id]: 1111,
};

const newUser = Object.assign({}, user);



//Задание 3

const circle = {
    radius: 2,
    color: "red",
    calculateCircumference: function() {
         console.log(2 * Math.PI * this.radius)
    }
}

//circle.calculateCircumference();