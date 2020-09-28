

const one = document.getElementById("one");
const two = document.getElementById("two");

const user = {
    name: "Nikita",
    email: "111@ma.ru",
    password: "111"
}


one.addEventListener("input", (event) => {
    const isValid = event.target.value === user.email;

    if (!isValid) {
        event.target.classList.add("invalid");
    } else {
        event.target.classList.remove("invalid");
    }
});

two.addEventListener("input", (event) => {
    const isValid = event.target.value === user.password;

    if (!isValid) {
        event.target.classList.add("invalid");
    } else {
        event.target.classList.remove("invalid");
    }
});


one & two.addEventListener("input", function () {
    if ((one.value === !user.name) || (two.value === !user.password)) {
        const div = document.createElement("div");
        div.innerText = `Вы ввели не верный пароль!`;
        document.body.append(div);
    } else {
        const divNew = document.createElement("div");
        divNew.innerText = `Hello, I  am ${user.name}`;
        document.body.append(divNew);
    }

});


