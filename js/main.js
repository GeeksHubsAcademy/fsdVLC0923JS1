// console.log("Hola mundo cruel");

//Soy el comentario... una única linea.

/* 

    Soy un comentario 
    que en este caso
    ocupa varias líneas.


*/

//Declaro o creo una variable

// let numero = 3;

// console.log(numero);

// numero = 5;

// console.log(numero);

// let numeroDos;

// console.log(numeroDos);

// let miPrimeraVariableBooleana = false;

// miPrimeraVariableBooleana = true;

// let variable1;

// let variable2 = null;

// let variable3 = '';

// console.log(variable1);
// console.log(variable2);
// console.log(variable3);

//Raiz cuadrada

// let numero3 = 25;

// let resultado = Math.sqrt(numero3);

// console.log(resultado);

//Incremento

// let a = 5;

// a++;

// console.log(a);

// a = a - 2;

// console.log(a);

//MODULO CUSTOM PARA V.

// let a = 10;

// let b = 15;

// let resultado = b % a;

// console.log(resultado);

//Negación unaria

// let a = 6;

// let b = "3";

// let resultado = b - a;

// console.log(resultado);

// let primero = "123";

// let segundo = "321";

// let resultado = parseInt(primero) + parseInt(segundo);

// console.log(typeof(resultado));

// let a = "3";

// let b = "5";

// let resultado = a - b;

// console.log(resultado);

// let a = 5;

// let b = 4;

// a = a + 5;
// a += 5;

// let nombre = "Ambrosio";

// if(nombre == "Toni"){
//     console.log("Hola Toni");
// } else {
//     // console.log("Hola",nombre);

//     //Interpolación
//     console.log(`Hola ${nombre}`);
// };

//Ejemplo de else if
// let ciudad = "Caracas";

// if(ciudad == "Medellin"){
//     console.log("Colombia");
// } else if (ciudad == "Valencia"){
//     console.log("España");
// } else {
//     console.log("Otro país");
// };

// let videojuego = "Dark Souls";

//MAL
// if(videojuego === "Wow"){
//     console.log("Espero que creas en otra vida");
// } else if (videojuego === "Lol"){
//     console.log("Morirás soltero");
// } else if (videojuego === "Fortnite"){
//     console.log("Ya no tienes edad");
// } else if(videojuego === "GTA"){
//     console.log("Ya te gustaría ser criminal");
// } else if(videojuego === "Dark Souls"){
//     console.log("En algo tenías que vacilar");
// } else {
//     console.log("Vas a tener éxito en la vida");
// };

//BIEN
// switch (videojuego) {

//     case "Wow":
//         console.log("Espero que creas en otra vida");
//     break;

//     case "Lol":
//         console.log("Morirás soltero");
//     break;

//     case "Fortnite":
//         console.log("Ya no tienes edad");
//     break;

//     case "GTA":
//         console.log("Ya te gustaría ser criminal");
//     break;

//     case "Dark Souls":
//     case "dark souls":
//         console.log("En algo tenías que vacilar");
//     break;

//     default:
//         console.log("Vas a tener éxito en la vida");
// }

// let marca = "Lambo";
// let motor = "V8";
// let color = "Verde lima";

// if((marca == "Lambo") && (motor == "V8") && (color == "Verde lima")){

//     console.log("Tienes un buen coche");
// }

// if(((marca == "Lambo") || (motor == "V6")) && ((color == "Verde lima") || (color == "Naranja butanero"))){

//     console.log("Tienes un buen coche");
// }

// if (color == "Verde lima") {
//   if (marca == "Lambo") {
//     if (motor == "V8") {
//       console.log("Rico");
//     }
//   }
// }


// let dia = "Lunes";

// switch (dia) {
//     case "Lunes":
//     case "Martes":
//     case "Miercoles":
//     case "Jueves":
//     case "Viernes": 
//         console.log("Entre semana");
//     break;

//     case "Sabado":
//     case "Domingo":
//         console.log("Fin de semana");
//     break;

//     default:
//         console.log("Ese dia no existe, eres tonto");
// }


// let dia = prompt("Dígame el dia que desea saber si es finde");
// dia = dia.toLowerCase();

// switch(dia){
//     case "sabado":
//     case "domingo":
//        console.log("Fin de semana!!");
//     break;

//     default:
//        console.log("A trabajar!!");
// }

let pelicula = "Wall Street DiCaprio";

let respuesta = (pelicula === "Wall Street DiCaprio") 
    ? "Si" 
    : "No";

console.log(respuesta);