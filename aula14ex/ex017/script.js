

gerarTabuada = () => {
	const numero = document.getElementById('numero').value;
	const tabuada = document.getElementById('tabuada');
	tabuada.innerHTML = ''
	
	if(numero.length == 0) {
			alert('erro! sem numero')
	}else{
		for(let c = 1 ; c <= 10 ; c++){
				tabuada.options.add(new Option(`${numero} X ${c} = ${c * numero}`, c));
		}
	}
}
