const fruits = ["lemon", "Banana", "Orange", "Apple", "Mango"];
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
        f_sintx: 'console.log(fruits.pop());',
        g_resp: 'Mango'
    },
    {
        a_id: 4,
        b_name: 'push()',
        c_func: 'agregar',
        d_desc: 
        {
            carac1: 'agrega un nuevo elemento al final del array',
            carac2: 'devuelve la nueva longitud del array, ej: 4'
        },
        e_array: 'const fruits = ["Banana", "Orange", "Apple", "Mango"];',
        f_sintx: 'console.log(fruits.push("kiwi"));',
        g_resp: '5'

         
    },
    {
        a_id: 5,
        b_name: 'shift()',
        c_func: 'eliminar',
        d_desc: 
        {
            carac1: 'Elimina el primer elemento de la matriz',
            carac2: 'cambia a los demas elementos a un indice mas bajo',
            carac3: 'retorna el ELEMENTO eliminado'
        },
        e_array: 'const fruits = ["Banana", "Orange", "Apple", "Mango"];',
        f_sintx: 'console.log(fruits.shift());',
        g_resp: 'Banana'
    },
    {
        a_id: 6,
        b_name: 'unshift()',
        c_func: 'agregar',
        d_desc: 
        {
            carac1: 'Agrega un nuevo elemento al principio del array',
            carac2: 'desplaza los elementos antiguos',
            carac3: 'devuelve la nueva longitud de la matriz'
        },
        e_array: 'const fruits = ["Banana", "Orange", "Apple", "Mango"];',
        f_sintx: 'console.log(fruits.unshift("lemon"));',
        g_resp: '4',
        h_array_after: '["lemon", "Banana", "Orange", "Apple", "Mango"];'
    },
    {
        a_id: 7,
        b_name: 'lenght',
        c_func: 'agregar',
        d_desc: 
        {
            carac1: 'retorna la longitud del array',
            carac2: 'lenght empieza a contar desde el 1',
            carac3: 'se puede agregar elemento al final del array de esta manera: fruits[fruits.length] = "Kiwi";',
        },
        e_array: 'const fruits = ["Banana", "Orange", "Apple", "Mango"];',
        f_sintx: 'console.log(fruits.lenght);',
        g_resp: '4'
    },
    {
        a_id: 8,
        b_name: 'delete',
        c_func: 'eliminar',
        d_desc: 
        {
            carac1: 'alimina la posicion que le especifiquemos',
            carac2: 'Las posiciones de el array mediante el operador de javascript delete. Usando delete quedaran undefined los agujeros de la matriz, dejando como resultado esto [, apple, kiwi], utiliza pop() o shift() en su lugar',
        },
        e_array: 'const fruits = ["Banana", "Orange", "Apple", "Mango"];',
        f_sintx: 'delete fruit[0]',
        g_resp: '[, "Orange", "Apple", "Mango"];'

    },
    {
        a_id: 9,
        b_name: 'concat()',
        c_func: 'concatenar',
        d_desc: 
        {
            carac1: 'crea un NUEVO array concatenando matrices existentes',
            carac2: 'puede concatenar varias matrices a la vez como argumento',
        },
        e_array1: 'const fruits = ["lemon", "Banana", "Orange", "Apple", "Mango"];',
        e_array2: 'const saludos = ["hello", "hi", "good morning"]',
        f_sintx: 'console.log(fruits.concat(saludos))',
        g_resp: '["lemon", "Banana", "Orange", "Apple", "Mango", "hello", "hi", "good morning"];'
    },
    {
        a_id: 10,
        b_name: 'splice()',
        c_func: 'agregar eliminar',
        d_desc: 
        {
            carac1: 'tiene un primer parametro que le especificamos de que posicion en adelante queremos agregar nuevos elementos a una matriz que empieza desde 0',
            carac2: 'recibe un 2do parametro que le especificamos cuantas posiciones debe aliminar',
            carac3: 'devuelve una nueva matriz',
            carac4: 'elimina elementos de la matriz sin deja posiciones vacias',
            carac4: 'si queremos solamente eliminar devemos especificar la posicion y luego la cantidad de posiciones',
        },
        e_array: 'const fruits = ["lemon", "Banana", "Orange", "Apple", "Mango"];',
        f_sintx: 'console.log(fruits.splice(3,0, "Kiwi"))',
        g_resp: '["lemon", "Banana", "Orange", "Kiwi","Apple", "Mango"]'
    },
    {
        a_id: 11,
        b_name: 'slice()',
        c_func: 'cortar',
        d_desc: 
        {
            carac1: 'este metodo corta el array en la posicion que le especcifiquemos',
            carac2: 'devuelve un nuevo array con lo que hemos cortado',
        },
        e_array: 'const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];',
        f_sintx: 'console.log(fruits.slice(0,2))',
        g_resp: '["Banana", "Orange"]',
    },
    {
        a_id: 12,
        b_name: 'sort()',
        c_func: 'ordenar',
        d_desc: 
        {
            carac1: 'ordena alfabeticamente',
        },
        e_array: 'const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];',
        f_sintx: 'console.log(fruits.sort(0,2))',
        g_resp: '["Apple", "Banana", "Mango", "Orange", "Lemon"];',
    },
]
