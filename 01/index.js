function fizzBuzz(n) {
    for (let i = 0; i <= n; i++) {
    if (!(i % 3 === 0))
        console.log("fizz");
    else if (!(i % 5 === 0))
        console.log ("Buzz");
    else (!(i % 3 & 5 === 0))
        console.log ("fizzBuzz!");
    }
}
fizzBuzz(23);

    //function toNumber(value) {
    // const num = "1235";
    //    value = Number(num);
     //   console.log(value);
    //    if (num != "1235") {
    //     console.log(null);
   // }
//}

//toNumber(jjj);