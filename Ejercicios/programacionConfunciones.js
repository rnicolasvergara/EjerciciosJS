
  function calculadora (numero1, numero2, operacion) {
        
    for (let i = 0; i <= numero1; i++){

        if (operacion === "suma"){
            console.log(numero1+numero2)
        } else if (operacion === "resta"){
          console.log(numero1-numero2)
        } else if (operacion === "multiplicacion"){
          console.log(numero1*numero2)
        } else if (operacion === "division"){
          console.log(numero1/numero2)
        }
    }
}

calculadora (10, 20, "suma")
calculadora (30, 10, "resta")
calculadora (4, 8, "multiplicacion")
calculadora (30, 10, "division")


