// Задание 0
//sayHello('Victor');
//sayHello('Mark');


function sayHello(name) {
    if (name === "Mark") {
        alert(`Hi, Mark`)
    }
    else {
        alert(`Hello, ${name}`)
    }
}


// Задание 1 
//console.log(min(2, 5));
//console.log(min(3, -1));
//console.log(min(1, 1));

function min(a, b) {
    return a < b ? a : b;
}


//Задание 2

//function pow(x, n) {
// let x = 
// let n = 
 // if (n < 1) {
  //alert(`n- только натуральное число`);
//} else {
 // alert(pow(x, n));

//}
//}
  
//pow(3, 3);


//Задание 3
//console.log(isEven(2));
//console.log(isEven(5));

function isEven(n) {
    return n % 2 ? false : true;
}



//Задание 4 - не разобралась 
//function deleteChars(str) 



//Задание 5
    
function convertFloor(floor) {
    for (let i = -14; i <= floor; i++) {
        if (i === 1 && i === -1) {
            console.log(0)
        } else if (i === 13 && i === -13) {
            console.log(12)
        }
    }
}
//console.log(convertFloor(-1)); // -1

//console.log(convertFloor(2)); // 3

//console.log(convertFloor(2)); // 3

//console.log(convertFloor(0)); // 1

//console.log(convertFloor(12)); // 13

//console.log(convertFloor(14)); // 14