//ЗАДАЧА 1 Пользователь вводит 2 числа, вывести квадрат каждого числа.
// let number1 =  Number(prompt("enter"));
// let sum = number1 * number1;
// alert(sum);

// //Дано значение (пользователь вводит) в Фаренгейтах, вывести это же значение в Цельсии.

//  let Farengait = Number(prompt()); // 155
//  let C = (Farengait-32)*5/9;
// alert("C " + C) ;

//Дано число x. Выведите x, 2x, 3x, 4x и 5x, разделенных тремя дефисами, как показано ниже.

// let x = Number(prompt());
// alert(x + "---" + x*2 + "---" + x*3 + "---" + x*4 + "---" + x*5)

//Напишите программу, которая запрашивает у пользователя вес в килограммах и 
//конвертирует его в фунты. В килограмме 2,2 фунта.

// let Kilo =  Number(prompt());
// let Funt = Kilo * 2.2;
// alert(Funt);

// *5 Напишите программу, которая просит пользователя ввести три числа 
// (используйте три отдельных оператора ввода). Создайте переменные с именами
//  total и average, которые содержат сумму и среднее значение 
// трех чисел, и распечатайте значения total и average.

// let x = Number(prompt());
// let y = Number(prompt());
// let z = Number(prompt());
// let total = x + y+ z;
// alert(total);
// let average = (x + y + z)/3;
// alert(average);

// Пользователь вводит число (цена за обед) и программа должна расчитать процент 
// за обслуживание (15%) и добавить этот процент к итоговому счету. 
// Надо вывести итоговый счет.

// let PriceofLunch = Number(prompt());
// let PriceofService = (PriceforLunch/100)*15;
// let TotalPrice = PriceforLunch + PriceforService;
// alert(TotalPrice);


//задачи на Strings

// Попросить пользователя ввести имя и вывести alert с сообщением 
// “Здравствуйте, {имя}!!! Мы рады видеть вас”. Где вместо {имя} будет введенное имя.

// let userName = prompt("Введите свое имя");
// alert('~Здравствуйте, ${userName} !!! Мы рады вас видеть');

// Попросить пользователя ввести наименование города и вывести 
//из скольких букв оно состоит.

// let userCity = prompt('Введите свой город');
// console.log(userCity);
// userCity.length;

// Пользователь вводит предложение, надо вывести предложение где 
//все буквы заглавные.

// 3 Задачки на if (условния)
// Даны 3 целых числа. Вывести наибольшее из них. 

// let a = prompt("Введите первое число:");
// let b = prompt("Введите второе число:");
// let c = prompt("Введите третье число:");
// let max;
// if (a < b) min = a;
// if (a > b) max = a; 
// if (c > max) max = c;
// alert(max);

// Даны 3 вещественных числа a,b,c. Существует ли треугольник со сторонами a,b,c.

// let a=6;
// let b=4;
// let c=9;

// if (a < b+c & b < a+c & c < a+b){
//     console.log("Треугольник существует")}
//     else
//     {console.log("Треугольник не существует")
// }


// Дано 3 целых числа. Вывести их в порядке возрастания. 

// let a=5;
// let b=4;
// let c=7;

// if (a > b){
//     if ( a < c ){
//         if (b < c){
//             console.log(a, b, c)
//         }
//         else{
//             console.log(a, c, b)
//      }
//    }
// }

// if(b < a){
//     if(b < c){
//         if(a > c){
//             console.log(b, c, a)   
//         }
//         else{
//             console.log(b, a, c)
//       }
        
//     }
// }

// if(c < a){
//     if (c < b){
//         if (a > b){
//             console.log( c, b, a)
//         }
//         else{
//             console.log(c, a, b)
//         }
//     }
// }


// // Дано целое число. Верно ли, что оно делится на 5 и на 7? 

// let number = 35;
// if (number%5 == 0 & number%7 == 0){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }


// Даны два целых числа. Верно ли, что они заканчиваются на одну и ту же цифру?

// let number1 = 44;
// let number2 = 284;
// let str1=String(number1);
// let str2=String(number2);
// console.log(str1[0]);
// let result1 = str1[str1.length-1];
// console.log(str1[str1.length-1]);
// let result2 = str2[str2.length-1];
// if (+result1 == +result2){
//     console.log("true")
// }
// else{
//     console.log("false")
// }


// Дано четырехзначное число. Верно ли, 
// что сумма двух крайних цифр равна сумме двух средних?

// let number = 1256;
// let str=String(number);
// console.log(str);
// let result = +str[str.length-1] + +str[0];
// let result1= +str[str.length-2] + +str[1];
// if (result == result1){
//     console.log("true")
// }
// else{
//     console.log("false")
// }


// Дано 5 целых чисел. Вывести наибольшее из них.

// var number = [3, 5, 7, 2, 8];
// var m=Math.max(...number);
// console.log(m)

// Расширение задачи 
// “Пользователь вводит свое имя и число (место буквы).
// Надо вывести какая буква находится под этим номером (числом).”
// Если пользователь вводит число больше чем количество букв в имени 
// или вводит отрицательное число, выводить ссобщение что буквы под таким 
// числом в имени нет.

//let words = prompt("Введите предложение");
// let placeofSymbol = prompt("Место буквы");
// let place = parseInt(placeofSymbol);
// let neededSymbol = words[place];
// let needed = words[parseInt(placeofSymbol)];
// alert(neededSymbol);

// 4 Задачки на Loops (циклы)

// Для вывода используйте только console.log по умолчанию.

// Пользователь вводит предложение. Вывести каждый символ из предложения 
// отдельно в каждой строке.

// let String1 = 'Здравствуйте рады вас видеть';
// for (let i=0; i<String1.length; i++){
//     console.log(String1[i])
// }
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// for (let i=0; i<4; i++) {
//  console.log(numbers[i])
// }
// console.log(String[0])
// console.log(String[1])
// console.log(String[2])
// console.log(String[3])
// for (let i=0; i<String.length; i++){
//     console.log(String[i]);
// }
// console.log("-----------------------")
// for (let i=0; i<4; i++){
//     console.log(String[i]);
// }
// console.log("-----------------------")
// console.log(String.length)


// console.log("-----------------------")
// for (let i=0; i<4; i++){
//     console.log(st[i]);
// }

//Дано целое положительное число N. 
//Найти сумму квадратов всех натуральных чисел от 0 до N.

// let numberStr = prompt("Введите число");
// let number = parseInt(numberStr);
// let sumofNumbers = 0;

// for (let i=0; i<=number; i++){
//     let umnojennoeNaDva = i*2;
//     console.log(umnojennoeNaDva);
// }

// alert("Сумма чисел" + sumofNumbers);


// let numberStr = prompt("Введите число");
// let number = parseInt(numberStr);
// let sumofNumbers = 0;

// for (let i=1; i<=number; i++){
//     let factorial = 1;
//     for (let j=1; j<=i; j++);
//     factorial = factorial*j;

//     console.log("factorial of " + i +" is: ""+factorial)
//     sumofNumbers += factorial

// }
// alert("Сумма чисел" + sumofNumbers);


// let numberStr = prompt("Введите число");
// let number = parseInt(numberStr);
// let sumofNumbers = 0;

// console.log("N is: + numberStr")
// for (let i=1; i<=number; i++){
//     let multipletoTwo = 1;
//     for (let j=1; j<=i; j++);
//     factorial = factorial*j;

//     console.log("factorial of " + i +" is: ""+factorial)
//     sumofNumbers += factorial

// }

// alert("Сумма чисел" + sumofNumbers);



// Дано целое число N. Вычислить с точностью 2 знака после запятой.
// Где n!

// Последовательность Фибоначчи определяется следующим образом: 
// первые два члена последовательности равны 1, а каждый следующий равен сумме 
// двух предыдущих. Т.е. числами Фибоначчи являются 1,1,2,3,5,8,13,… . 
// Вводится номер N. Определить N-е по порядку число Фибоначчи. 


// Пользователь вводит произвольное число N. Далее программа просит 
// ввести N раз числа на каждый ввод, выводится alert с сообщением 
// что число четное (если делится на 2 без остатка) или нечетное.

// let numberStr = prompt("Введите число");
// for (let i = 0; i <numberStr.length; i++) {
//     if (i % 2 == 0) {
//       alert( "Число четное" );
//     }
//     else{
//         alert( "Число нечетное" );  
//     }
// }

//5 Задачки на Nested Loops (вложенные циклы)

// Задача на сортировку массива чисел. Нельзя использовать готовые функции, 
//напишите программу которая сортирует массив.
// Ввод: [6, 45, 2, 8, 7, 10, 0]

// let numbers = [6, 45, 2, 8, 7, 10, 0];
// numbers.sort(function(a, b){
//     return a - b;
// });
// console.log(numbers);


// // //ЗАДАЧА 3 ( Nested Loops )
// let multilineString = [
//   "If the stars should appear one night in",
//   "a thousand years,  how would  men  believe",
//   "and  adore,  and  preserve  for  many  generations",
//   "the remembrance of the city of God?",
//   "EMERSON",

//   "Aton 77, director of Saro  University, thrust  out a  belligerent lower",
//   "lip and glared at the young newspaperman in a hot fury.",
//   "Theremon 762 took that  fury in his  stride. In his earlier  days, when",
//   "his  now widely syndicated column was  only a mad idea  in a cub  reporter's",
//   "mind,  he  had  specialized  in 'impossible'  interviews.  It  had  cost him",
//   "bruises, black  eyes, and broken bones; but it had given him an ample supply",
//   "of coolness and self-confidence. So he  lowered the outthrust  hand that had",
// ];

// // Посчитаем артикли "a", "an", "the" в каждой строке
// let charATotalCounter = 0;
// for (let i = 0; i < multilineString.length; i++) {
//   console.log(multilineString[i]);
//   let charACounter = 0;
//   let currentString = multilineString[i];

//   for (let j = 0; j < currentString.length; j++) {
//     if ((currentString[j].toLowerCase() == "a", "an", "the")) {
//       charACounter++;
//       charATotalCounter++;
//     }
//   }

//   // Результаты на каждую строку
//   console.log('Артиклей "a", "an", "the",  в строке всего: ' + charACounter);
// }
// console.log("Артиклей 'a', 'an', 'the', всего: " + charATotalCounter);

// let number = [4, 6, 5];
// let min = number[0];
// for (let i=0; i<number.length; i++){
//     console.log(number[i])
//     if (min > number[i+1]){
//         min = number[i+1] 
//     }
// }