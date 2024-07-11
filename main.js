// 1
/*
let num1 = parseInt(prompt("ingrese el primero numero"))

let num2 = parseInt(prompt("ingrese el segundo numero"))

if (num1 >= num2){
   console.log("El primer numero ingresado es mayor que el segundo")
}else{
   console.log("El primer numero ingresado no es mayor que el segundo")
}
*/


// 2
/*
let num1 = parseInt(prompt("ingrese el primero numero"))

let num2 = parseInt(prompt("ingrese el segundo numero"))

if (num1 == num2){
  console.log("Ambos numeros son iguales")
}else if (num1 != num2){
  console.log("Los numeros son diferentes")
}

*/

//3
/*
let num1 = parseInt(prompt("Ingrese el primer numero"))
let num2 = parseInt(prompt("Ingrese el segundo numero"))

if (num1 > num2){
  console.log("El primer numero es mayor")
}else if (num1 < num2){    console.log("El segundo numero es mayor")
}else {console.log("Ambos numeros son iguales")
}

*/

//4
/*
let num1 = parseInt(prompt("Ingrese el primer numero"))
let num2 = parseInt(prompt("Ingrese el segundo numero"))
let num3 = parseInt(prompt("Ingrese el tercer numero"))

let menor

if (num1 <= num2 && num1 <= num3){
  menor = num1
}else if (num2 <= num1 && num2 <= num3){
 menor = num2
}else {
  menor = num3
}

console.log("El numero menor es: " +  menor)

*/

//5
/*
let name1 = prompt("Cual es el nombre del primer sujeto")
let age1 = parseInt(prompt("Cual es la edad del primer sujeto"))
let height1 = parseFloat(prompt("Cual es la estatura del primer sujeto"))

let name2 = prompt("Cual es el nombre del segundo sujeto")
let age2 = parseInt(prompt("Cual es la edad del segundo sujeto"))
let height2 = parseFloat(prompt("Cual es la estatura del segundo sujeto"))

if (age1 >= age2){
   console.log(name1 + " Es el sujeto con mayor edad y tiene " + age1)
}else {
  console.log(name2 + " Es el sujeto con mayor edad y tiene " + age2)
}

if (height1 >= height2){
  console.log(name1 + " Cuenta con mayor estatura y mide " + height1)
}else {
  console.log(name2 + " Cuenta con mayor estatura y mide " + height2)
}
*/


//6
/*
let name = prompt("Cual su nombre")
let age = parseInt(prompt("Cual su edad"))
let height = parseFloat(prompt("Cual es su altura"))
let vision = parseFloat(prompt("Cual es su nivel de vision del 1 al 10"))

    if (age >= 18 && height > 1.50 && vision >= 8) {
        console.log( name + ", Puedes conducir")
    } else {
        console.log( name + ", no estas apto para conducir")
    }


*/


//7
/*
let nombre = prompt("Ingrese su nombre:")
let pase = prompt("Ingrese el tipo de pase: ")
let poseeEntrada = prompt("¿Posee entrada?: ")

poseeEntrada = (poseeEntrada === "si")

let tuNombre = "Juan"
let entradaValida = false

if (nombre === tuNombre || pase === "vip") {
    console.log("Bienvenido " + nombre + "!")
    entradaValida = true
} else if (poseeEntrada) {
    let usarEntrada = prompt("¿Desea utilizar su entrada?")
    if (usarEntrada === "si") {
        console.log("Bienvenido " + nombre + "!")
        entradaValida = true
    }
}

if (!entradaValida) {
    let deseaComprar = prompt("¿Desea comprar una entrada?")
    if (deseaComprar === "si") {
        let dineroDisponible = parseFloat(prompt("Ingrese la cantidad de dinero disponible:"))
        if (dineroDisponible >= 1000) {
            console.log("Compra realizada con éxito. Bienvenido " + nombre + "!")
        } else {
            console.log("Lo siento, no tienes suficiente dinero para comprar una entrada.")
        }
    } else {
        console.log("Gracias, hasta luego " + nombre + ".")
    }
}
*/

//8
/*
let numeroIncognita = 7
let numeroIngresado
let intentos = 3

numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10:"))

if (numeroIngresado === numeroIncognita) {
    console.log("¡Ganaste, has adivinado el número!");
} else if (numeroIngresado > numeroIncognita) {
    console.log("El número ingresado es mayor, vuelve a intentarlo.");
} else if (numeroIngresado < numeroIncognita) {
    console.log("El número ingresado es menor, vuelve a intentarlo.");
}

if (numeroIngresado !== numeroIncognita) {
    numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10:"));

    if (numeroIngresado === numeroIncognita) {
        console.log("¡Ganaste, has adivinado el número!");
    } else if (numeroIngresado > numeroIncognita) {
        console.log("El número ingresado es mayor, vuelve a intentarlo.");
    } else if (numeroIngresado < numeroIncognita) {
        console.log("El número ingresado es menor, vuelve a intentarlo.");
    }
}

if (numeroIngresado !== numeroIncognita) {
    numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10:"));

    if (numeroIngresado === numeroIncognita) {
        console.log("¡Ganaste, has adivinado el número!");
    } else if (numeroIngresado > numeroIncognita) {
        console.log("El número ingresado es mayor, vuelve a intentarlo.");
    } else if (numeroIngresado < numeroIncognita) {
        console.log("El número ingresado es menor, vuelve a intentarlo.");
    }

    if (numeroIngresado !== numeroIncognita) {
        console.log("Lo siento, no has adivinado el número. El número era: " + numeroIncognita);
    }
}
*/

//9
/*
let edad = parseInt(prompt("Ingrese su edad:"));

    if (edad <= 12) {
        console.log("Eres un infante.");
    } else if (edad <= 18) {
        console.log("Eres un adolescente.");
    } else if (edad <= 45) {
        console.log("Eres un mayor joven.");
    } else if (edad <= 100) {
        console.log("Eres un anciano.");
    } else {
        console.log("¿Realmente tienes más de 100 años?");
    }
*/



//10
/*
let jugador1 = prompt("Jugador 1, ingrese piedra, papel o tijeras:");
let jugador2 = prompt("Jugador 2, ingrese piedra, papel o tijeras:");

if (
    (jugador1 !== "piedra" && jugador1 !== "papel" && jugador1 !== "tijeras") ||
    (jugador2 !== "piedra" && jugador2 !== "papel" && jugador2 !== "tijeras")
) {
    console.log("Uno de los jugadores ha hecho trampa.");
} else {
    if (jugador1 === jugador2) {
        console.log("¡Es un empate!");
    } else if (
        (jugador1 === "piedra" && jugador2 === "tijeras") ||
        (jugador1 === "papel" && jugador2 === "piedra") ||
        (jugador1 === "tijeras" && jugador2 === "papel")
    ) {
        console.log("¡Jugador 1 ha ganado!");
    } else {
        console.log("¡Jugador 2 ha ganado!");
    }
}
*/

//11
/*
let color = prompt("Ingrese un color:");

switch (color) {
    case "blanco":
    case "negro":
        console.log("Falta de color.");
        break;
    case "verde":
        console.log("El color de la naturaleza.");
        break;
    case "azul":
        console.log("El color del agua.");
        break;
    case "amarillo":
        console.log("El color del sol.");
        break;
    case "rojo":
        console.log("El color del fuego.");
        break;
    case "marron":
        console.log("El color de la tierra.");
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado.");
        break;
}
*/

12//
/*
let valor1 = parseFloat(prompt("Ingrese el primer valor numérico:"));
let valor2 = parseFloat(prompt("Ingrese el segundo valor numérico:"));

let operacion = prompt("Ingrese la operación (suma, resta, multiplicación, división):").toLowerCase();

let resultado;
let mensaje = ""

switch (operacion) {
    case "suma":
        resultado = valor1 + valor2;
        mensaje = "El resultado de la suma es: " + resultado;
        break;
    case "resta":
        resultado = valor1 - valor2;
        mensaje = "El resultado de la resta es: " + resultado;
        break;
    case "multiplicación":
    case "multiplicacion":
        resultado = valor1 * valor2;
        mensaje = "El resultado de la multiplicación es: " + resultado;
        break;
    case "división":
    case "division":
        if (valor2 !== 0) {
            resultado = valor1 / valor2;
            mensaje = "El resultado de la división es: " + resultado;
        } else {
            mensaje = "ERROR: División por cero no es posible.";
        }
        break;
    default:
        mensaje = "Operación no válida. Por favor, ingrese suma, resta, multiplicación o división.";
        break;
}

console.log(mensaje);
*/

//13
/*
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let dniNumero = prompt("Ingrese su número de DNI:");
let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA):");

console.log("Datos ingresados:");
console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
console.log("Número de DNI: " + dniNumero);
console.log("Fecha de nacimiento: " + fechaNacimiento);

let confirmacion = confirm("¿Los datos ingresados son correctos?");

if (confirmacion) {
    let dni = {
        nombre: nombre,
        apellido: apellido,
        dniNumero: dniNumero,
        fechaNacimiento: fechaNacimiento
    };

    console.log("Registro exitoso:");
    console.table(dni);
} else {
    console.log("Vuelva a intentarlo en 1 mes.");
}
*/
