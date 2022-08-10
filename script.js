let ul = document.querySelector('ul');
let inputProduto = document.querySelector('.tarefa-input');
let p = document.querySelector('p');
const btnAddProduto = document.getElementById('btn');

function validarInput() {
  if (inputProduto.value.trim().length > 0) {
    inputProduto.classList.remove('erro');
    adicionarTarefa()
  } else {
    inputProduto.classList.add('erro');
  }
}

function adicionarTarefa() {
	let novoLi = `
		<li class="tarefa">
			<p>${inputProduto.value}</p>
		</li>
	`;

	let span = `
	<span class="material-symbols-outlined">
		delete
	</span>
	`;	

	let ultimaLi = document.querySelector('li p');
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
			document.querySelector('.tarefa').insertAdjacentHTML('beforeend', span);
		}

	}
	
	validarInputRepetido();
	concluirTarefa();
	deletarTarefa();
	atualizarLocalStorage();
}

function concluirTarefa() {
	let liTarefas = document.querySelectorAll('li p');
	let i = 0;

	for (let item of liTarefas) {
		item.addEventListener('click', () => {
			if (item.innerText === liTarefas[i].innerText) {
				item.classList.toggle('tarefa-concluida');
			}
		});
	}
	
	atualizarLocalStorage();
}

function deletarTarefa() {
		const deleteItem = document.querySelectorAll('span');
		let itemLi = document.querySelector('li');
		let i = 0;

		for (let item of deleteItem) {
			item.addEventListener('click', () => {
				if (item.innerText === deleteItem[i].innerText) {
					itemLi.remove();
				}
			});
		}
	
	atualizarLocalStorage();
}

function atualizarLocalStorage() {
	let liTarefas = document.querySelectorAll('li p');

	const localStorageTarefas = [...liTarefas].map((tarefa) => {
		const conteudo = tarefa.innerText;
		const isConcluido = tarefa.classList.contains('tarefa-concluida');

		return {description: conteudo, isCompleted: isConcluido};
		
	});
	localStorage.setItem('liTarefas', JSON.stringify(localStorageTarefas));
}

// function atualizarTarefasPeloLocalStorage() {
// 	const tarefasDoLocalStorage = JSON.parse(localStorage.getItem('liTarefas'));

// 	console.log({tarefasDoLocalStorage});
// 	document.querySelector('li p').insertAdjacentHTML('afterbegin', tarefasDoLocalStorage) ;

// 	for (const tarefa of tarefasDoLocalStorage) {
// 		let novoLi = `
// 		<li class="tarefa">
// 			<p>${inputProduto.value}</p>
// 		</li>
// 	`;

// 	let span = `
// 	<span class="material-symbols-outlined">
// 		delete
// 	</span>
// 	`;	

// 	if (tarefa.isCompleted) tarefa.classList.add('tarefa-concluida')

// 	p.classList.remove('input-repetido');
// 	p.innerHTML = "Adicione ou remova alguma tarefa.";	
// 	document.querySelector('ul').insertAdjacentHTML('afterbegin', novoLi);	
// 	document.querySelector('.tarefa').insertAdjacentHTML('beforeend', span);
// }

// }
// atualizarTarefasPeloLocalStorage();

btnAddProduto.addEventListener('click', validarInput);
