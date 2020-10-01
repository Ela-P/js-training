// обращение 

const form = document.forms.register;
const btn = document.getElementById("btn");

//console.log(form);

//класс присвоения

const INVALID_CLASS = "invalid";


// объект c валидацией
const formHelper = {
    login: {
        value: "",
        valid: false,
        checkValidation() {
            this.login.valid = this.login.value !== "";
        }
    },
    name: {
        value: "",
        valid: false,
        checkValidation() {
            this.name.valid = this.name.value !== "";
        },
    },
    age: {
        value: "",
        valid: false,
        checkValidation() {
            const regex = /^[0-9][A-Za-z0-9 -]*$/g;
            this.age.valid = this.age.value !== "";
        },
    },
    email: {
        value: "",
        valid: false,
        checkValidation() {
            const regex =/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/g;
            this.email.valid = regex.test(this.email.value);
        },
    },
    city: {
        value: "",
        valid: false,
        checkValidation() {
            this.city.valid = this.city.value !== "";
        },
    },
    password: {
        value: "",
        valid: false,
        checkValidation() {
            this.password.valid = this.password.value !== "";
        },
    },
    repeatPassword: {
        value: "",
        valid: false,
        checkValidation() {
            this.repeatPassword.valid = 
            this.password.value === this.repeatPassword.value;
        },
    },
    checkFormValid() { 
        for (const key in this){
            if (typeof this[key] !== "function" && this[key].valid === false) {
                return false;
            }
        } 
        return true;
    },
};

// слушатели:
//на форму-> передает из импутов в хелпер value & name
form.addEventListener("input", (event) => {
    const value = event.target.value;
    const name = event.target.name;
  
    formHelper[name].value = value;
    const bindValid = formHelper[name].checkValidation.bind(formHelper);
    bindValid(); // валидность формы

    btn.disabled = !formHelper.checkFormValid(); //(не) приводит кнопку к активности

    classInvalidAdd (event.target, formHelper[name].valid); //(не) добавление класса валидности
});


// Присвоения класса валидации

function classInvalidAdd(domNode, isValid) {
    if (isValid) {
        domNode.classList.remove(INVALID_CLASS)
    } else {
        domNode.classList.add(INVALID_CLASS)
    }
}

//Деф на кнопку

form.addEventListener("submit", (event) => {
    event.preventDefault();


 //console.log(formHelper);
});


