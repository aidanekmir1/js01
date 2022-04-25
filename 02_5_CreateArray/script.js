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

// Сначала создаем пустой массив куда будем складывать пользователей
let users = [];

for (let i = 0; i< 10; i++){
    let randomName = 'SomeName' + i;
    let randomSurname = 'SomeSurname' + i;
    let randomAge = 18 + i;
    // Создаем пользователя который будет существовать только в текущем цикле
    let user = new Users(randomName, randomSurname, randomAge);

    // Чтобы добавить элемент в массив используем функцию push() - это обычная функция массивов
    // Подбробнее https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
    // Как и у console есть свои готовые функции типа log() и в итоге console.log()
    // Так и у массивов есть свои готовые функции
    users.push(user);
}

// Выводим весь массивы
console.log(users);
