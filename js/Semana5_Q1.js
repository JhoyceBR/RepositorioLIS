function createList(){ // função da primeira lista
	let quantidade = document.getElementById('qtdListOne').value; // pega valor

	let quantidade2 = parseInt(quantidade, 10); // transforma para base decimal para a iteração
	for (var i = 1; i <= quantidade2; i++) {
		var node = document.createElement("li");
		var textNode = document.createTextNode("Text "+ i);
		node.appendChild(textNode);
		document.getElementById("lista1").appendChild(node);
	}

}


function createList2(){ // função da segunda lista
	let quantidade = document.getElementById('qtdListTwo').value;
	let mensagem = document.getElementById('itemList').value;

	let quantidade2 = parseInt(quantidade, 10);
	for (var i = 1; i <= quantidade2; i++) {
		var node = document.createElement("li");
		var textNode = document.createTextNode(mensagem + " " + i); // concatena com espaço no meio
		node.appendChild(textNode);
		document.getElementById("lista2").appendChild(node);
	}

}
