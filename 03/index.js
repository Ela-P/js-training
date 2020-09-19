//Задание 1 

const car = {
    name: "Audi",
    doors: 3
};
for (let key in car) {
    alert(key);
    alert(car[key])
}