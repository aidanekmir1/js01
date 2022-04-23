//  Циклы
/*
Цикл 1
counter = 0

Цикл 2
counter = 1

Цикл 3
counter = 2

Цикл 4
counter = 3

Цикл 5
counter = 4
*/
// for (let counter = 0; counter <5; counter++){
//     console.log(counter);
// }


// let counter = 0 создает счетчик counter с изначальным значением 0
// counter < 5 цикл будет работать пока counter меньше 5
// counter ++ увеличиваем счетчик на 1

// ++ это инкремент
// -- декремент
// == сравнение
// = присваивание

// вывести квадрат чисел от 1 до 5
// for (let counter = 0; counter <5; counter++){
//     console.log((counter+1)**2);
// }

let stringVal = "Merim";
let razmerString = stringVal.length;

console.log(stringVal[3]); // получение буквы по индексу 0 в переменной stringVal

for (let counter = 0; counter < razmerString; counter++)
{
    console.log(stringVal[counter]);
}

// Ctrl+K Ctrl+C = comment
// Ctrl+K Ctrl+U = uncomment
// Ctrl+/ = comment and uncomment