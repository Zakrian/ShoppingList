const main = document.querySelector('.main');
const list = document.querySelector('.list');
const btnReset = document.querySelector('.btn-reset');
const btnAdd = document.querySelector('.btn-add');
const liDelete = document.querySelectorAll('.delete');
const input = document.querySelector('.input');
let modal = document.querySelector('.modal');
const deleteAllList = document.querySelector('.deleteAll');
const deleteMarkList = document.querySelector('.deleteMark');

function addShop() {
  let h2 = document.createElement('h2');
  h2.innerHTML = '- ' + input.value;

  h2.addEventListener('click', function() {
    h2.classList.toggle('delete');
  });

  if(input.value !== '') {
    list.insertAdjacentElement('beforeend', h2);
  }
  input.value = '';
}

btnAdd.addEventListener('click', addShop);
input.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    addShop();
  }
});

btnReset.addEventListener('click', function(e) {
  modal.classList.toggle('modalOpen');
});


function deleteAll() {
  deleteAllList.addEventListener('click', function() {
    list.innerHTML = '';
  });
}

function deleteMark() {
  let removeEl = document.querySelectorAll('.delete');
  deleteMarkList.addEventListener('click', function() {
    removeEl.value = '';
  });
}