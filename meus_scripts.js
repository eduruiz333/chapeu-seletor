// ALGORITMOS //
// contar quantos inputs tem;
// verificar se o atributo checked é == true;
// se sim, verificar qual é o valor (a, b, c ou d);
// de acordo com a verificação, somar +1 à variável correspondente;
// a variável com maior valor será a casa de destino;
// em caso de empate, a mensagem será para refazer o teste.
/* ============================================================================================================ */

// TERCEIRA VERSÃO FUNCIONAL DO CÓDIGO (finalizado em 12/01/2016)
function verificaChecks(){
	voto = [0, 0, 0, 0];
	var aChk = document.getElementsByTagName("input");
	for(var i=0; i<aChk.length;i++){
		if(aChk[i].checked==true){
			switch(aChk[i].value){
				case "A": voto[0] = voto[0] +1;
					break;
				case "B":  voto[1] = voto[1] +1;
					break;
				case "C":  voto[2] = voto[2] +1;
					break;
				case "D":  voto[3] = voto[3] +1;
					break;
			}
		}
	}
	mensagem();
}
function mensagem(){
	var intro = "SUA CASA É... "
	var casa = ["GRIFINÓRIA", "SONSERINA", "CORVINAL", "LUFA-LUFA"];
	var fim = "!!"
	if(voto[0]  > voto[1] && voto[0] > voto[2] && voto[0] > voto[3]){resultado = intro + casa[0] + fim;}
	else if (voto[1] > voto[0] && voto[1] > voto[2] && voto[1] > voto[3]){resultado = intro + casa[1] + fim;}
	else if (voto[2] > voto[0] && voto[2] > voto[1] && voto[2] > voto[3]){resultado = intro + casa[2] + fim;}
	else if (voto[3] > voto[0] && voto[3] > voto[1] && voto[3] > voto[2]){resultado = intro + casa[3] + fim;}
	else{resultado = "Hmmm... Percebo que você está confuso e com dúvidas... <br />volte outra hora e repense suas respostas.";}
	result();
}
// FIM - TERCEIRA VERSÃO FUNCIONAL DO CÓDIGO
/* ============================================================================================================ */
// SEGUNDA VERSÃO FUNCIONAL DO CÓDIGO (finalizado em 12/01/2016)
/* function verificaChecks(){
	a=0, b=0, c=0, d=0;
	var aChk = document.getElementsByTagName("input");
	for(var i=0; i<aChk.length;i++){
		if(aChk[i].checked==true){
			switch(aChk[i].value){
				case "A": a = a+1;
					break;
				case "B": b = b+1;
					break;
				case "C": c = c+1;
					break;
				case "D": d = d+1;
					break;
			}
		}
	}
	mensagem();
}
function mensagem(){
	var intro = "SUA CASA É... "
	var casa = ["GRIFINÓRIA", "SONSERINA", "CORVINAL", "LUFA-LUFA"];
	var fim = "!!"
	if(a > b && a > c && a > d){
		resultado = intro + casa[0] + fim;
	}
	else if (b > a && b > c && b > d){
		resultado = intro + casa[1] + fim;
	}
	else if (c > a && c > b && c > d){
		resultado = intro + casa[2] + fim;
	}
	else if (d > a && d > b && d > c){
		resultado = intro + casa[3] + fim;
	}
	else{
		resultado = "Hmmm... Percebo que você está confuso e com dúvidas... <br />volte outra hora e repense suas respostas.";
	}
	result();
} */
// FIM - SEGUNDA VERSÃO FUNCIONAL DO CÓDIGO 
/* ============================================================================================================ */
// PRIMEIRA VERSÃO FUNCIONAL DO CÓDIGO (finalizado em 11/01/2016)
/* function voto()
	{
		a=0, b=0, c=0, d=0;
		casa=null;
		var c1=document.getElementById("vermelho").checked;
		var c2=document.getElementById("preto").checked;
		var c3=document.getElementById("azul").checked;
		var c4=document.getElementById("verde").checked;
		
		var a1=document.getElementById("mamiferos").checked;
		var a2=document.getElementById("repteis").checked;
		var a3=document.getElementById("aves").checked;
		var a4=document.getElementById("insetos").checked;
		 
		var e1=document.getElementById("fogo").checked;
		var e2=document.getElementById("agua").checked;
		var e3=document.getElementById("ar").checked;
		var e4=document.getElementById("terra").checked;
		 
		var m1=document.getElementById("metais").checked;
		var m2=document.getElementById("ossos").checked;
		var m3=document.getElementById("penas").checked;
		var m4=document.getElementById("ervas").checked;
		
		if(c1==true){a=a+1}
		if(a1==true){a=a+1}
		if(e1==true){a=a+1}
		if(m1==true){a=a+1}
		
		if(c2==true){b=b+1}
		if(a2==true){b=b+1}
		if(e2==true){b=b+1}
		if(m2==true){b=b+1}
		
		if(c3==true){c=c+1}
		if(a3==true){c=c+1}
		if(e3==true){c=c+1}
		if(m3==true){c=c+1}
		
		if(c4==true){d=d+1}
		if(a4==true){d=d+1}
		if(e4==true){d=d+1}
		if(m4==true){d=d+1}
		
		mensagem();
	}
function mensagem()
	{
		intro = "SUA CASA É... "
		if(a > b && a > c && a > d){
			casa = intro + "GRIFINÓRIA!!";
		}
		else if (b > a && b > c && b > d){
			casa = intro + "SONSERINA!!";
		}
		else if (c > a && c > b && c > d){
			casa = intro + "CORVINAL!!";
		}
		else if (d > a && d > b && d > c){
			casa = intro + "LUFA-LUFA!!";
		}
		else{
			casa = "Hmmm... Percebo que você está confuso e com dúvidas... <br />volte outra hora e repense suas respostas.";
		}
		result();
	} */
// FIM - PRIMEIRA VERSÃO FUNCIONAL DO CÓDIGO	
/* ============================================================================================================ */
// ESTUDO DE FUNÇÃO PARA VERIFICAÇÃO E CONTAGEM DE ITENS CHECADOS
/* function verificaChecks() {
	var aChk = document.getElementsByName("cor"); 
	for (var i=0;i<aChk.length;i++){ 
		if (aChk[i].checked == true){ 
			// CheckBox Marcado... Faça alguma coisa... Ex:
			alert(aChk[i].value + " marcado.");
		}  else {
			alert(aChk[i].value + " não marcado.");
		}
	}
} */
// FIM - ESTUDO DE FUNÇÃO PARA VERIFICAÇÃO E CONTAGEM DE ITENS CHECADOS
/* ============================================================================================================ */




