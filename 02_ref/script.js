let numbers = [12, 1, 5, 45, 78];

for (let counter = 0; counter < numbers.length; counter++){
    console.log(numbers[counter] * 2);
}


/*
// Nested loops
let names = [
    ["John", "Black"],
    ["Sofia", "Pendragon"],
    ["Tom", "Riddle"]
]

for (let rows = 0; rows< names.length; rows++){
    console.log(names[rows]);
    for (let cols = 0; cols<names[rows].length; cols++){
        console.log(names[rows][cols])
    }
}

*/


/*
let user = {
    name: "Tom",
    age: 55,
    surname: "Riddle"
}

function updateSurname(temporaryUser, newSurname){
    temporaryUser.surname = newSurname;
}

updateSurname(user, "Slytherin");
console.log(user);
*/

// class Users{
//     constructor(name, age, surname){
//         this.name = name,
//         this.age = age,
//         this.surname = surname
//     }

//     getAllInfo(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.surname);
//     }
// }

// let newUs = new Users("Abraxas", 25, "Malfoy")
// newUs.getAllInfo()