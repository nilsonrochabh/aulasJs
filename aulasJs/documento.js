
function calcularIMC(){
	var form = document.getElementById('form');
	var kilos = +form.kilos.value;
	var metros = +form.metros.value;
	var centrimetros = +form.centrimetros.value;

				//calculando os centimentros da pessoa
	var altura = (metros * 100 + centrimetros)/100;

	var imc = kilos /(altura * altura);

	form.imc.value=imc.toFixed(2); 

}