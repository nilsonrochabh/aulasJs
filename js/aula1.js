/*conceitos fundamentais :
 Programação Orientada a objeto 
 Funciona somente em browser 
 linguagem interpletada  - não compilar
 Browser - Forcene referencia para js acessar os elementos
 com js podemos acessar todos os elementos, ou melhor, os objetos para acessar 
 o que é objetos ? 
 	é formando por PROPRIEDADES E 	METODOS 
 	Ojeto pessoa 
 		Tem atributos 
 		Ex.
 		Altura 
 		Peso
 		Profissão
 	Ações / Metodos ou funções 
 		Andar();
 		Dormir();
 		Trabalhar();
Acessando os objetos.
Pessoa.altura;
Pessoa.andar();

em Js tem 3 formar de acessar os objetos 

Objetos Internos da linguagem (String, Date, number)
Objetos do Navegador ou browser (window, document)
document é a pagina que esta na janela 
objeto personalisado
	são criados pelos programadores 

	Objeto window no browser sempre será o objeto raiz


	Manupuladores de Eventos, faz a interatividade da pagina.
	um dos atributos que temos é o 
	onlick();
	click é o evento e o onclick(); é quando for clicado
	onmouserover();

	Sem ação do humando 
	onload('carregado!');

**/




var nome  = window.prompt('qual seu nome?');
alert(nome);