function calcularPatrimonioDespachado() {

	var num3 = document.getElementById('num3').value;
	var num4 = document.getElementById('num4').value;

	var resultadoIII = parseFloat(num3).toFixed(2) / parseInt(num4) - parseFloat(num3);
	document.getElementById('resultadoIII').value = Math.abs(resultadoIII).toFixed(2).replace(".",",");
}

function calcularPatrimonioAtivo() {

	var valor = document.querySelector("#valor").value;
	var vida = document.querySelector("#vida").value;

	var resultado = parseFloat(valor).toFixed(2) / parseInt(vida) - parseFloat(valor);

	document.getElementById('resultado').value = Math.abs(resultado).toFixed(2).replace(".",",");
};

function calcularPatrimonioDesuso() {

	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;

	var resultadoII = parseFloat(num1).toFixed(2) / parseInt(num2) - parseFloat(num1);
	document.getElementById('resultadoII').value = Math.abs(resultadoII).toFixed(2).replace(".",",")
};