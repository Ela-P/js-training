const arrUsers = [
    {name: "Alex", 
    company: "Google", 
    email: "alex@gmail.com", 
    phone: +375292929292, 
    balance: "$3,323", 
    isActive: false, 
    gender: "female"}, 

    {name: "Oleg", 
    company: "Amazon", 
    email: "ole@gmail.com",
    phone: +3752929255555, 
    balance: "$11,353", 
    isActive: true, 
    gender: "female"}, 

    {name: "Olesya", 
    company: "Apple", 
    email: "oles@gmail.com", 
    phone: +375295556898, 
    balance: "$55,355", 
    isActive: true, 
    gender: "Mele"}, 

    {name: "Pit",
    company: "Epam", 
    email: "pit@gmail.com",
    phone: +375292986965, 
    balance: "$15,236",
    isActive: false,
    gender: "female"}
];


function makeTable(arrUsers) {
    const table = document.createElement('table');
    for (let i = 0; i < arrUsers.length; i++) {
            let row = document.createElement("tr");

        for (let j = 0; j < arrUsers[i].length; j++) {
            let cell = document.createElement("td");
            td.innerHTML = arrUsers[i][j];
            tr.appendChild(cell);
        }

        table.appendChild(row);
    }
    return table;
}


