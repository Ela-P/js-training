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



