class Users{
    name;
    surname;
    age;

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
}
// создали экземпляр класса Users
let userSam = new Users("Sam", "Smith", 30);
// Выводим данные Sam
userSam.printInfo();

// создали экземпляр класса Users Marty
let userMarty = new Users("Marty", "Shields", 30);
// Выводим данные Marty
userMarty.printInfo();
userMarty.changeNames("Martinson", "Snowman");
userMarty.printInfo();
