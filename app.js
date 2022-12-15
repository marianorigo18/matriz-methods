const fruits = ["Banana", "Orange", "Apple", "Mango"];

const arrayMethods = [
    {   
        id: 1,
        name: 'toString()',
        func: 'convertir',
        desc: {
            carac1: 'convierte el array en una cadena de texto',
            carac2: 'lo separa por coma',
        }
    },
    {
        id: 2,
        name: 'join()',
        func: 'convertir',
        desc: {
            carac1: 'convierte un array en cadena de texto',
            carac2: 'lo separa por lo que le especifiquemos',
        }
    },
    {
        id: 3,
        name: 'pop()',
        func: 'eliminar',
        desc: 
        {
            carac1: 'Elimina la ultima posicion del array',
            carac2: 'retorna el ELEMENTO eliminado ej: mango'
        }
    },
    {
        id: 4,
        name: 'push()',
        func: 'agregar',
        desc: 
        {
            carac1: 'agrega un nuevo elemento al final del array',
            carac2: 'devuelve la nueva longitud del array, ej: 4'
        }
    },
    {
        id: 5,
        name: 'shift()',
        func: 'eliminar',
        desc: 
        {
            carac1: 'Elimina el primer elemento de la matriz',
            carac2: 'cambia a los demas elementos a un indice mas bajo',
            carac3: 'retorna el ELEMENTO eliminado'
        }
    },
    {
        id: 6,
        name: 'unshift()',
        func: 'agregar',
        desc: 
        {
            carac1: 'Agrega un nuevo elemento al principio del array',
            carac2: 'desplaza los elementos antiguos',
            carac3: 'devuelve la nueva longitud de la matriz'
        }
    },
    {
        id: 9,
        name: 'lenght',
        func: 'agregar',
        desc: 
        {
            carac1: 'retorna la longitud del array',
            carac2: 'se puede agregar elemento al final del array',
        }
    },
    {
        id: 9,
        name: 'lenght',
        func: 'agregar',
        desc: 
        {
            carac1: 'retorna la longitud del array',
            carac2: 'se puede agregar elemento al final del array',
        }
    },
    {
        id: 10,
        name: 'delete',
        func: 'eliminar',
        desc: 
        {
            carac1: 'alimina la posicion que le especifiquemos',
            carac2: 'delete fruit[0]',
        },
        warning: 'Las posiciones de el array mediante el operador de javascript delete. Usando delete quedaran undefined los agujeros de la matriz, dejando como resultado esto [, apple, kiwi], utiliza pop() o shift() en su lugar',
    },
]


console.log(fruits.toString()); 
console.log(fruits.join("/*")); 
console.log(fruits.pop()); 
console.log(fruits.push("kiwi")); 
console.log(fruits.shift()); 
console.log(fruits.unshift()); 
console.log(fruits.length)
delete fruits[0];
console.log(fruits)