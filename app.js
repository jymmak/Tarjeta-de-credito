do{
	var creditCard = prompt("Ingrese el número de su tarjeta");
	//Se  crea una variable llamada creditCard cuyo valor será el número de la tarjeta de crédito que el usuario ingrese mediante un prompt.

	if(creditCard!== "" && creditCard !== " "){
		isValidCard(creditCard);
	}else{
		alert("Ingrese un número válido, por favor.");
	}
} while (creditCard === "" || creditCard=== " ");  //Mientras el campo esté vacío el prompt le vuelve a pedir al usuario que ingrese un número de tarjeta de credito.

function isValidCard(numbersCard){     //Esta función verificará si los números de la tarjeta de crédito son válidos al Algoritmo de Luhn.
	var arr = [];
	var size = numbersCard.length;      // Nos da el tamaño en número de caracteres.
	var lastPosition = size - 1;        // Nos da la última posición.
	var sumtotal = 0;
	for(var i = lastPosition ; i >= 0 ; i--){
		arr.push(parseInt(numbersCard[i]));    // Guarda impar.
	}
	for(var j = 1 ; j <= arr.length ; j++){
		if((j % 2) === 0){
			var number = arr[j-1] * 2;                //Guarda par
			if (number >= 10){                       // En caso que multiplicacion sea mayor igual a 10.
				number = number.toString();
				var digitOne = parseInt(number[0]);    // 0 y 1 porque es imposible.
				var digitTwo = parseInt(number[1]);    // Que number sera un número.
				arr[j-1] = digitOne + digitTwo;        // De más dígitos.
			}else{
			  arr[j-1] = number;
			}
		}
	}
	for(var k = 0 ; k < arr.length ; k++){
		sumtotal = sumtotal + arr[k];               // Sumatoria de todos los numeros de la tarjeta.
	}
	if (sumtotal % 10 === 0){
		return alert("El número de su tarjeta es válido");
	}
	else if(sumtotal % 10 !== 0){
		alert("Lo sentimos, el número de su tarjeta no es válido");
	}
}

isValidCard();                                //Llamando a la funcion.
