let matrix = [
    [1, 0, 5],
    [4, 5, 3],
    [9, 7, 4],
    [7, 8, 9]
]

console.log(matrix[2][0]);
console.log("SEPARATOR");

for(let etaj = 0; etaj < matrix.length; etaj++){
    console.log("Шаг " + " = " + etaj + " -- Цикл ВНЕШНИЙ");
    
    for(let kvartiry = 0; 
        kvartiry < matrix[etaj].length; kvartiry++){
        console.log("Шаг " +" = " + kvartiry + "-- Цикл ВНУТРЕННИЙ");

        console.log(matrix[etaj][kvartiry])
    }
}