function calcularIMC(){
	var form = document.getElementById('formulario');
	var kilos = +form.kilos.value;
	var metros = +form.metro.value;
	
	var centimetros = +form.centimetros.value;

	//calculando os centimentros da pessoa
	var altura = (metros * 100 + centimetros)/100;

	var imc = kilos /(altura * altura);

	form.imc.value=imc.toFixed(2); 


	if(imc < 18.5){
		var elemento = document.getElementById("div1");
   		elemento.innerHTML="<p class='magro'> VC esta Muito Magro</p>";
   	}
	else if(imc>18.5 && imc < 25){
		var elemento = document.getElementById("div1");
   		 elemento.innerHTML=("<p class='ideal'> VC esta com o peso ideal</p>");
	}
	else if(imc>25 && imc < 30){
		var elemento = document.getElementById("div1");
   		 elemento.innerHTML=("<p class='levemente'> VC esta com o peso levemente gordo</p>");
	}
	else if(imc>30 && imc < 40){
		var elemento = document.getElementById("div1");
   		 elemento.innerHTML=("<p id='obeso1'> VC esta obesidade 1</p>");
	}else if(imc> 40){
		var elemento = document.getElementById("div1");
   		 elemento.innerHTML=("<p id='obeso'> VC esta com obediade Morbida</p>");
	}

}