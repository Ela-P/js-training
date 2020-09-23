//Задание 1 

const p = document.createElement("p");
p.className = "text";
p.innerText = "Это всего лишь текст";

document.body.append(p);
//console.log(p);

const div = document.createElement("div");
div.className = "alert";
div.innerText = "А это сообщение об ошибке";
div.style.background = "red";
div.style.color = "white";
div.style.padding = "20px";

document.body.append(div);
//console.log(div);


//Задание 2

const myArray = new Array("Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
"Sergey", "Ivan", "Alan"); 
const ol = document.createElement("ol");
for(let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.append(i); 
} if (i % 2 === 0) {
    li.className = "even";
} else {
    li.className = "odd";
}



//document.body.append(ol);
//console.log(ol);
//console.log(myArray);

