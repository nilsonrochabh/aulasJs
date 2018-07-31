
function calcularIMC(){
	var form = document.getElementById('formulario');
	var kilos = +form.kilos.value;
	var metros = +form.metro.value;
	
	var centimetros = +form.centimetros.value;

				//calculando os centimentros da pessoa
	var altura = (metros * 100 + centimetros)/100;

	var imc = kilos /(altura * altura);

	form.imc.value=imc.toFixed(2); 


	if(imc<18.5){

		var element = document.getElementById("div1");
   		 element.innerHTML=("<p> VC esta Muito Magro</p>");

	}

}


function ligar() {
	var lamp = document.getElementById("lamp");
        if( lamp.src=="img/lapon.jpeg" )
              lamp.src='img/lapoff.png';
        else
              lamp.src='img/lapon.jpeg';
}
