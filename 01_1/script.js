// Условные операции if, else
// Ввод данных
let userAge = prompt("Введите свой возраст");
console.log(typeof(userAge));

userAge = parseInt(userAge); // присвоение
console.log(typeof(userAge));

let discountHolderStr = prompt("Введите есть ли у вас дисконт (да/нет)");
let discountHolder = false;


// Вычисления
if (discountHolderStr.toLowerCase() == "да") // два == это сравнение
{ 
    discountHolder = true;
}

if (discountHolderStr.toLowerCase() == "нет"){
    discountHolder = false;
}
// toLowerCase() это функция которая приводит все в маленькие буквы
// Вывод результатов
alert("Вам " +  userAge + " лет." );
if(discountHolder){
    alert("У вас есть дисконтная карта");
} else {
    alert("У вас нет дисконтной карты");
}
