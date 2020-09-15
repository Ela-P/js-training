//задание 1 

function fizzBuzz(n) {
for (let i = 1; i <= n; i++) {
 if (i % 3 === 0 && i % 5 === 0) {
  console.log("fizzBuzz!")
} else if (i % 3 === 0) {
  console.log ("fizz" )
 } else if (i % 5 === 0) {
  console.log ("Buzz")
 } else {
   console.log(i)
 }
}
}

//fizzBuzz(10);


//задание 2

function toNumber(value) {
const num = +value;
if (isNaN(value)) {
      return null;
} else {
  return num;
}
}
//console.log(toNumber('1555'));

//console.log(toNumber('Number'));





//задание 3- не знаю как правильно сделать

//function createUser(name, age, height, weight) {
//    let person = { 
     //   name: string, 
     //   weight: number, 
     //   age: number, 
     //   height: number, 
     //   skills: {

     //   }


    //const string = +name;
    //const num = Number(age);
   // const nume = Number(height);
   // const numb = Number(weight);
   // console.log(typeof name);
   // console.log(typeof age);
   // console.log(typeof height);
   // console.log(typeof weight);
    

    
 //   if (numb < 100) {
  //      return true;
   // }
//}
//createUser("кот-обормот", 22, 150, 60);

  
//задание 4

function isPalindrom(word) {
  let reverseUserWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseUserWord += word[i]; 
  } if (reverseUserWord == word) {
      return true;
    } else {
      return false;
    }
  }

console.log(isPalindrom("madam"));
console.log(isPalindrom("Alex"));





//5 задание 

//function quadraticEquation(a, b, c) {
 // let discr = (a, b, c) => b * b - 4 * a * c;
 // let d = discr(a, b, c);
 // if (d < 0) return [d];
  //let x1 = (-b + Math.sqrt(d)) / (2 * a),
  //    x2 = (-b - Math.sqrt(d)) / (2 * a);
  //    return [d, x1, x2];
//
//}
