const name = 'Pete';
const surname = 'Grid';
let age = 26;

alert(`Hello, world! Встречай, JS! Я ${name} ${surname}, и мне ${age}. Рад встрече!`)

const user = {
    name: 'Misha',
    height: 175,
    age: 33,
    badhabits: 'no',
    namefriends: `'Alex', 'Roma', 'Ihar', 'Ivan', 'Oleg'`,
};
//console.log(user.height);

user.canSingSongs = 'yes';

delete user.namefriends;

console.log(user);
