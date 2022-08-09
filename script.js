let ul = document.querySelector('ul');
let inputProduto = document.querySelector('.tarefa-input');
let p = document.querySelector('p');
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
		<li class="tarefa">
			<p>
			${inputProduto.value}
			</p>
		</li>
	`;

	let ultimaLi = document.querySelector('li');
	let ultimaLiString = ultimaLi.innerText;

	function validarInputRepetido() {
		if (inputProduto.value === ultimaLiString) {
			inputProduto.classList.add('erro');
			p.classList.add('input-repetido');
			p.innerHTML = "Tarefa já adicionada";
		} 
		else {
			p.classList.remove('input-repetido');
			p.innerHTML = "Adicione ou remova alguma tarefa.";

			document.querySelector('ul').insertAdjacentHTML('afterbegin', novoLi);
		}
	}
	validarInputRepetido();
	concluirTarefa();
}

function concluirTarefa() {
	let liItem = document.querySelectorAll('li');

	for (let item of liItem) {
		item.addEventListener('click', () => {
			item.classList.toggle('tarefa-concluida');
			console.log(item);
		});
	}
}

btnAddProduto.addEventListener('click', validarInput);