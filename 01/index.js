//задание 1 -50/50

//function fizzBuzz(n) {
// for (let i = 0; i <= n; i++) {
// if (!(i % 3 === 0))
//     console.log("fizz");
// else if (!(i % 5 === 0))
//     console.log ("Buzz");
// else (!(i % 3 & 5 === 0))
//     console.log ("fizzBuzz!");
// }
//}
//fizzBuzz(23);


//задание 2- 50/50

//function toNumber(value) {
    //const num = "1235";
    //const number = +num;
    //console.log(value);
    
  //      return num != "1235" ? null : 0
    
//}

//toNumber(12548468546854);




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

//function isPalindrom(word) {
 //const len = word.length;
//if (len == null || len == 0) {
  // return false;
 //}
 // return true;
    
//}
//isPalindrom("madam");

//function isPalindrom(word) {
//  word = word.toLowerCase().replace(/\s/g,'');
  //return word === word.split('').reverse().join('');
//}
//isPalindrom("madam");

function isPalindrom(word) {
  const len = Math.floor(word.lenght / 2);
  for (let i = 0; 1 < len; i++)
  if (word[i] !== word[word.lenght - i -1]) {
    return false;
  }
  return true;
}
isPalindrom("Alex");


//5 задание 

function quadraticEquation(a, b, c) {
  let discr = (a, b, c) => b * b - 4 * a * c;
  let d = discr(a, b, c);
  if (d < 0) return [d];
  let x1 = (-b + Math.sqrt(d)) / (2 * a),
      x2 = (-b - Math.sqrt(d)) / (2 * a);
      return [d, x1, x2];
}
quadraticEquation(0, 0, 0);

