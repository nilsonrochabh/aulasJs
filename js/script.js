
// var nome = "Nilson";
// var idade= 35;
// var numero1;
// var numero2;
// var primeiroNome;


// numero1=10;
// numero2=30;

// var soma,multiplicacao,divisao,subitrair;

// soma= numero1+numero2;
// multiplica=numero1*numero2;
// divisao=numero1/numero2;
// subitrair=numero1-numero2;

// //imprimindo na tela
// alert(" Meu Nome é " +nome+" Minha idade é "+ idade);
// //alert(numero1);
// //alert(numero2);

// alert("A soma é "+soma+
// 	   " A Multiplicação "+multiplica+
// 	   " A Divisão é "+divisao+
// 	   " A subitrair "+subitrair);





// primeiroNome = prompt("qual o seu nome?");
// alert(primeiroNome);

/*
function mudaCor1(){
	var xbolinha = document.getElementById('azul');
	xbolinha.style.background="green";
}

function voltarCor1(){
	var xbolinha=document.getElementById('azul');
	xbolinha.style.background="yellow";
}*/	






// function desafio(){
// 	var v1 = +document.getElementById('primeiro').value;
// 	var v2= +document.getElementById('segundo').value;
// 	var v3 = +document.getElementById('terceiro').value;
	
// 	var soma = v1+v2+v3;
// 	res =96;
// 	if(v1==v2){
// 		alert('Os numeros tem que ser diferentes :)');
// 		location.reload();
// 	}else if(v2==v3){
// 		alert('Os numeros tem que ser diferentes :)');
// 		location.reload();
// 	}
// 	else if(v3==v1){
// 		alert('Os numeros tem que ser diferentes :)');
// 		location.reload();

// 	}else if(soma == res){
// 		alert("parabens vc passou no desafio :)");
// 		location.reload();
		
// 	}else if(soma !=res){
// 		alert("A soma dos elementos é difente do resultado \nTente novamente :(");
// 		location.reload();
// 	}

// }









// function mudaCor2(){
// 	var cor1=document.getElementById('amarelo');
// 	cor1.style.background="purple";

// }

// function voltarCor2(){
// 	var cor1=document.getElementById('amarelo');
// 	cor1.style.background="blue";
// }




// function mudaCor3(){
// 	var cor1=document.getElementById('vermelho');
// 	cor1.style.background="#38B8AE";
// }

// function voltarCor3(){
// 	var cor1=document.getElementById('vermelho');
// 	cor1.style.background="red";
// }
// function mudaCor4(){
// 	var cor1=document.getElementById('preto');
// 	cor1.style.background="pink";
// }

// function voltarCor4(){
// 	var cor1=document.getElementById('preto');
// 	cor1.style.background="black";
// }


// function mudarImagem(){
// 	document.getElementById("img1").src="img/sol.jpg";
// }

function nuvem1(){
	var nuvem1 = document.getElementById('nuvem1');
	nuvem1.src='img/nuvemFundo.png';
}
function voltar1(){
	var nuvem1 = document.getElementById('nuvem1');
	nuvem1.src='img/nuvem.png';
}
function nuvem2(){
	var nuvem1 = document.getElementById('nuvem2');
	nuvem1.src='img/nuvemFundo2.png';
}

function voltar2(){
	var nuvem1 = document.getElementById('nuvem2');
	nuvem1.src='img/nuvem.png';
}
function nuvem3(){
	var nuvem1 = document.getElementById('nuvem3');
	nuvem1.src='img/nuvemFundo3.png';
}


function voltar3(){
	var nuvem1 = document.getElementById('nuvem3');
	nuvem1.src='img/nuvem.png';
}

function randomica(){
	var randomica = document.getElementById('inputValor');
	randomica.innerHTML = Math.floor(Math.random() * 1000);
}