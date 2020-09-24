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

for (let i = 0; i < myArray.length; i++) {
    const li = document.createElement('li');
 if (i % 2 === 0) {
    li.className = "even";
    li.style.background = "green";
    li.innerText = myArray[i];
} else {
    li.className = "odd";
    li.style.background = "blue";
    li.innerText = myArray[i];
}
    ol.append(li); 
}

document.body.append(ol);
//console.log(ol);
//console.log(myArray);


//Задание 3


function showMessage() {
    const newDiv = document.createElement("div");
    newDiv.className = "message";
    newDiv.innerText = "Привет, я message";
    newDiv.style.background = "grey";
    newDiv.style.top = "100px";
    newDiv.style.paddingLeft = "50px";

}
  document.body.append(newDiv)

showMessage();