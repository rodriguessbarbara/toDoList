let lista = document.getElementsByClassName('.container-lista');
let inputProduto = document.querySelector('.tarefa-input');
let liItem = document.querySelectorAll('.tarefa');
const btnAddProduto = document.getElementById('btn');

function validarInput() {
  if (inputProduto.value.trim().length > 0) {
    inputProduto.classList.remove('erro');
  } else {
    inputProduto.classList.add('erro');
  }
}

btnAddProduto.addEventListener('click', validarInput);