

const one = document.getElementById("one");
const two =document.getElementById("two");

const user = {
    name: "Nikita",
    email: "privet@mail.ru",
    password: "privet222.ru"
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
