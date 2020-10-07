

//класс присвоения

const INVALID_CLASS = "invalid";


const registerform = document.forms.register;
const btn = document.getElementById("btn");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");


const btnReg = document.getElementById("btnReg");
const btnLog = document.getElementById("btnLog");

const loginEmail = document.getElementById("loginInput");
const loginPassword = document.getElementById("passwordInput");


//setLoginFormActive();

function setLoginFormActive() {
    loginForm.style.display = "block"; 
    registerForm.style.display = "none"; 
    btnLog.classList.add("active-btn"); 
    btnReg.classList.remove("active-btn"); 
  
    setDisabledButtonState();
}

function setRegisterFormActive() {
    loginForm.style.display = "none"; 
    registerForm.style.display = "block"; 
    btnLog.classList.remove("active-btn");
    btnReg.classList.add("active-btn"); 
    btn.disabled = !formHelper.checkFormValid();
}

//login 
btnLog.addEventListener("click", setLoginFormActive);

btnReg.addEventListener("click", setRegisterFormActive);


function setDisabledButtonState() {
    if (loginEmail.value === "" || loginPassword.value === "") {
        btnLog.disabled = true;
    } else {
        btnLog.disabled = false;
    }
}

















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
registerform.addEventListener("input", (event) => {
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

registerform.addEventListener("submit", (event) => {
    event.preventDefault();


 //console.log(formHelper);
});


