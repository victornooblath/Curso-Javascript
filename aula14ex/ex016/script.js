/*
*No desafio tem 3 campos: inicio,Fim e Passo 
    *eu insiro um numero em inicio(em qual numero começa a contar), insiro o numero de fim(onde vai parar de contar) e insiro o numero de passos(quanto de incr)
    *quando clico no botão contar, ele faz o calculo alterando o footer, ele quer mostrando os números em sequência com emojis
    *se o campo de inicio e fim for nulo, mostre uma msg de erro que é impossivel
    *se o campo de passo for 0, o programa assume como 1

*/

function contar() {
	//Getting the input data
	let inicio = document.getElementById('inicio');
	let fim = document.getElementById('fim');
	let passo = document.getElementById('passo');
	let msg = document.getElementById('msg');

	//verifying if any field is null
	if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
		window.alert('error, falta dados')
		msg.innerHTML = 'Impossivel contar!'
	}else {
		msg.innerHTML = 'Contando: '
		//parsing the input data to number
		let i = Number(inicio.value)
		let f = Number(fim.value)
		let p = Number(passo.value)
		if (p <= 0) {
			window.alert('passo invalido! considerando passo = 1')
			p = 1
		}
		//progressive countdown
		if(i < f) {
			for(let c = i ; c <= f ; c += p){
				msg.innerHTML += `${c} \u{1F449}`
			}
		//regressive countdown
		}else {
			for(let c = i ; c >= f ; c -= p){
				msg.innerHTML += `${c} \u{1F449}`
			}
		}
		msg.innerHTML += `\u{1F3C1}`
	}	
}