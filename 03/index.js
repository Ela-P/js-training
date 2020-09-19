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

const user = {
    name: "Anton",
    email: "pitbool@mail.ru",
    phone: 375291232623,
    //[id]: 1111,
};

const newUser = Object.assign({}, user);

//console.log(newUser);
