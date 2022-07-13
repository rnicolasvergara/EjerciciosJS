//let i = prompt("ingresa un numero");
//for (i; i < 10; i++) {
  //  console.log("1 +", i, "=", 1 + i);
  //}



  function numerosParesoImpares (numero, parOimpar) {

    for (let i = 0; i <= numero; i++){

      if ( parOimpar === "par" && i % 2 === 0){
        console.log(i)
      } else  if (parOimpar === "impar" && i % 2 !==0 ){
        console.log(i)
      }
    }
  }


  numerosParesoImpares(10,"par")
  numerosParesoImpares(10, "impar")
  //numerosParesoImpares(100, "impar")
  