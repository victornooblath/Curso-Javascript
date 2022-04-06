const numero = document.getElementById('numero');
const tabuada = document.getElementById('tabuada');
const msg = document.getElementById('msg');
// tabuada.innerHTML = ''
let lista = []

inLista = (n, l) =>{
	if(l.indexOf(Number(n)) != -1) {
		return true
	} else {
		return false
	}
}

isNumber = (n) => {
	if(Number(n) >= 1 && Number(n) <= 100) {
		return true
	}else {
		return false
	}
}

analisarNum = () => {
	if(isNumber(numero.value) && !inLista(numero.value, lista)) {
		lista.push(Number(numero.value))
		tabuada.options.add(new Option(`${numero.value} foi addicionado`))		
	}else{
		alert('erro! num invalido ou ja esta na lista')
	}
}

finalizar = () => {
	let total = lista.length
	let maior = lista[total - 1]
	let menor = lista.sort()[0]
	let soma = lista.reduce((a,b)=> a + b, 0)
	let media = soma / total
	msg.innerHTML = `<p>A ordem é ${lista.sort()}<br>Temos ${lista.length} valores cadastrados<br>Onde o maior é ${maior} e o menor é ${menor}<br>A soma é ${soma} <br>A média é ${media}</p>`
}

