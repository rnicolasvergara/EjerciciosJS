

let numero = prompt("Ingresa un numero del 1 al 15"); 
const numeros = [" 1 ", " 4 ", " 7 ", " 8 ", " 13 ", " 10 "]
if (numero === "4"){
    alert("Elegiste el numero:  " +numero)
    alert("tu numero esta en el array: " +numeros)
} else if (numero != "4"){
    numeros.push(numero);
    alert("Se agrego tu numero al array");
    alert(numeros);
}

