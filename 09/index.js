const arrUsers = [
    {
        name: "Alex",
        company: "Google",
        email: "alex@gmail.com",
        phone: +375292929292,
        balance: "$130,323",
        isActive: false,
        gender: "female"
    },

    {
        name: "Oleg",
        company: "Amazon",
        email: "ole@gmail.com",
        phone: +3752929255555,
        balance: "$11,353",
        isActive: true,
        gender: "female"
    },

    {
        name: "Olesya",
        company: "Apple",
        email: "oles@gmail.com",
        phone: +375295556898,
        balance: "$55,355",
        isActive: true,
        gender: "Mele"
    },

    {
        name: "Pit",
        company: "Epam",
        email: "pit@gmail.com",
        phone: +375292986965,
        balance: "$15,236",
        isActive: false,
        gender: "female"
    },

    {
        name: "Kolya",
        company: "Odopod",
        email: "K.ol@gmail.com",
        phone: +375292523696,
        balance: "$19,237",
        isActive: false,
        gender: "female"
    },

    {
        name: "Vika",
        company: "Blammo",
        email: "V.blam@gmail.com",
        phone: +375291236361,
        balance: "$15,346",
        isActive: false,
        gender: "Mele"
    },
];


function makeTable(arrUsers) {
    const table = document.createElement('table');
    for (let i = 0; i < arrUsers.length; i++) {
        const row = document.createElement("tr");
        //const currentUser = arrUsers[i];

        const { name, company, email, phone, balance } = arrUsers[i];

        for (const value of [name, company, email, phone, balance]) {
            const cell = document.createElement("td");
            cell.innerHTML = value;

            row.appendChild(cell);
        }

        table.appendChild(row);
        const tdDelete = document.createElement('td');
        tdDelete.innerHTML = '<button id="delBut">Delete</button>';
        row.appendChild(tdDelete);
    }
    return document.body.appendChild(table);
}

makeTable(arrUsers);

//console.log([arrUsers]);
//console.log(arrUsers);

const button = document.getElementById('delBut');
 button.addEventListener("click", removeFormArr);

 function removeFormArr() {
  for (const i = arrUsers.length; i--;) {
    if (arrUsers[i] === val) {
      arrUsers.splice(i, 1);
    }
}
}