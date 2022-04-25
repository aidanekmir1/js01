//  Objects

const user = {
    name: "Sam",
    surname: "Smith",
    age:30,
    address: {
        country: "UK",
        city:"London",
        street: "Some street"
    }
}

const user1 = {
    name: "Maria",
    surname: "Mukhina",
    age:30,
    address: {
        country: "Kyrgyzstan",
        city:"Bishkek",
        street: "Chuy ave"
    }
}

const user2 = {
    name: "Maria",
    surname: "Mukhina",
    age:30,
    bloodgroup: 3,
    address: {
        country: "Kyrgyzstan",
        city:"Bishkek",
        street: "Chuy ave"
    }
}

function changeAddress(currentUser, newCountry, newCity, newStreet){
    currentUser.address.city = newCity;
    currentUser.address.country = newCountry;
    currentUser.address.street = newStreet;
}

function printInfo(currentUser){
    console.log("Начало вывода информации-------------------------");
    console.log(currentUser.name);
    console.log(currentUser.surname);
    console.log(currentUser.age);
    console.log(currentUser.address.country);
    console.log(currentUser.address.city);
    console.log(currentUser.address.street);
    console.log("Конец вывода информации+++++++++++++++++++++++++");
}
// Действия ниже идут
printInfo(user);

user.name = "Rob";

printInfo(user);

changeAddress(user, "Kyrgyzstan", "Bishkek", "Chuy");
printInfo(user);

changeAddress(user, "Kyrgyzstan", "Osh", "Chuy");
printInfo(user);


changeAddress(user1, "Kyrgyzstan", "Cholpon-ata", "NovayaUlica");
printInfo(user1);


changeAddress(user2, "Kyrgyzstan", "Cholpon-ata", "NovayaUlica");
printInfo(user2);
