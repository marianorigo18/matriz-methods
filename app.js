const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits2 = ["pera", "manzana", "banana", "sandia"];

const arrayMethods = [
    {   
        a_id: 1,
        b_name: 'toString()',
        c_func: 'convertir',
        d_desc: {
            carac1: 'convierte el array en una cadena de texto',
            carac2: 'lo separa por coma',
        },
        e_array: 'const fruits = ["Banana", "Orange", "Apple", "Mango"];',
        f_sintx: 'console.log(fruits.toString());',
        g_resp: 'Banana,Orange,ApplemMango'
    },
    {
        a_id: 2,
        b_name: 'join()',
        c_func: 'convertir',
        d_desc: {
            carac1: 'convierte un array en cadena de texto',
            carac2: 'lo separa por lo que le especifiquemos',
        },
        e_array: 'const fruits = ["Banana", "Orange", "Apple", "Mango"];',
        f_sintx: 'console.log(fruits.join("/*"));',
        g_resp: 'Banana/*Orange/*Applem/*Mango' 
    },
    {
        a_id: 3,
        b_name: 'pop()',
        c_func: 'eliminar',
        d_desc: 
        {
            carac1: 'Elimina la ultima posicion del array',
            carac2: 'retorna el ELEMENTO eliminado ej: mango'
        },
        e_array: 'const fruits = ["Banana", "Orange", "Apple", "Mango"];',
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
    {
        id: 10,
        name: 'concat()',
        func: 'concatenar',
        desc: 
        {
            carac1: 'crea un NUEVO array concatenando matrices existentes',
            carac2: 'puede concatenar varias matrices a la vez como argumento',
        },
        sintx: 'const todasLasFrutas = fruit.concat(fruit2) // [frutas, frutas, frutas]'
    },
    {
        id: 1,
        name: 'splice()',
        func: 'agregar eliminar',
        desc: 
        {
            carac1: 'tiene un primer parametro que le especificamos de que posicion en adelante queremos agregar nuevos elementos a una matriz',
            carac2: 'recibe un 2do parametro que le especificamos cuantas posiciones debe aliminar',
            carac3: 'devuelve una matriz con los elementos eliminados',
            carac4: 'elimina elementos de la matriz sin deja posiciones vacias',
            carac4: 'si queremos solamente eliminar devemos especificar la posicion y luego la cantidad de posiciones',
        },
        sintx: 'const fruits = ["Banana", "Orange", "Apple", "Mango"]; fruits.splice(2, 2, "Lemon", "Kiwi");'
    },
    {
        id: 1,
        name: 'slice()',
        func: 'cortar',
        desc: 
        {
            carac1: 'este metodo corta el array en la posicion que le especcifiquemos',
            carac2: 'devuelve un nuevo array con lo que queda de posiciones',
        },
        array: 'const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];',
        sintx: 'const citrus = fruits.slice(1);',
        resp: 'Orange,Lemon,Apple,Mango'
    },
]

console.log(arrayMethods);
console.log(fruits.pop()); 
console.log(fruits.push("kiwi")); 
console.log(fruits.shift()); 
console.log(fruits.unshift("lemon")); 
console.log(fruits.length)
delete fruits[0];
const todasLasFrutas = fruits.concat(fruits2)
console.log(todasLasFrutas)