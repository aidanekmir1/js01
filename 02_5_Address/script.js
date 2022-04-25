// Создали отдельно класс Адрес
class Address{
    constructor(country, city, street){
        this.country = country;
        this.city = city;
        this.street = street;
    }
}

class Users{
    name;
    surname;
    age;
    address = new Address;

    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    printInfo() {
        console.log(this.name);
        console.log(this.surname);
        console.log(this.age);
    }

    changeNames(name, surname){
        this.name = name;
        this.surname = surname;
    }

    setAddress(country, city, street){
        this.address.country = country;
        this.address.city = city;
        this.address.street = street;
    }

    printAddressInfo() {
        console.log(this.address.country);
        console.log(this.address.city);
        console.log(this.address.street);
    }
}


// создали экземпляр класса Users
let userSam = new Users("Sam", "Smith", 30);
// Выводим данные Sam
userSam.printInfo();

userSam.setAddress("UK", "London", "Street 1");
userSam.printAddressInfo();

console.log(userSam);
