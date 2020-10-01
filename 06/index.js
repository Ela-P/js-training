// обращение 

const form = document.forms.register;
const btn = document.getElementById("btn");

//console.log(form);


// объект 
const formHelper = {
    login: {
        value: "",
        valid: false,
    },
    name: {
        value: "",
        valid: false,
    },
    age: {
        value: "",
        valid: false,
    },
    email: {
        value: "",
        valid: false,
    },
    city: {
        value: "",
        valid: false,
    },
    password: {
        value: "",
        valid: false,
    },
    repeatPassword: {
        value: "",
        valid: false,
    },
};

// слушатели:
//на форму-> передает из импутов в хелпер value & name
form.addEventListener("input", (event) => {
    const value = event.target.value;
    const name = event.target.name;
  
    formHelper[name] = value;
})

//на кнопку
form.addEventListener("submit", (event) => {
    event.preventDefault();


 //console.log(formHelper);
})


