let lista = document.getElementsByClassName('.container-lista');
let inputProduto = document.querySelector('.tarefa-input');
let liItem = document.querySelectorAll('.tarefa');
let p = document.querySelector('p')			

const btnAddProduto = document.getElementById('btn');

function validarInput() {
  if (inputProduto.value.trim().length > 0) {
    inputProduto.classList.remove('erro');
    novoProduto()
  } else {
    inputProduto.classList.add('erro');
  }
}

function novoProduto() {
	let novoLi = `
	<li class="item">
			${inputProduto.value}
	</li>
	`;
		
	let ultimaLi = document.querySelector('li');
	let ultimaLiString = ultimaLi.innerText;
	
	function validarInputRepetido() {
		if (inputProduto.value === ultimaLiString) {
			inputProduto.classList.add('erro');
			p.classList.add('input-repetido');
			p.innerHTML = "Item já adicionado";
		} 
		else {
			p.classList.remove('input-repetido');
			p.innerHTML = "Adicione ou remova alguma tarefa.";

			document.querySelector('ul').insertAdjacentHTML('afterbegin', novoLi);
		}
	}
	validarInputRepetido();
}

btnAddProduto.addEventListener('click', validarInput);