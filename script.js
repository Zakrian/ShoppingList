const main = document.querySelector('.main'),
  list = document.querySelector('.list'),
  btnReset = document.querySelector('.btn-reset'),
  btnAdd = document.querySelector('.btn-add'),
  liDelete = document.querySelectorAll('.delete'),
  input = document.querySelector('.input'),
  modal = document.querySelector('.modal');

function addShop() {
  let h2 = document.createElement('h2');
  h2.innerHTML = '- ' + input.value;

  h2.addEventListener('click', function () {
    h2.classList.toggle('delete');
  });

  if (input.value !== '') {
    list.insertAdjacentElement('beforeend', h2);
  }
  input.value = '';
  addDotsIfItemSoLong();

}

function deleteAll() {
  list.innerHTML = '';
}

function deleteMark() {
  let markedItem = document.querySelectorAll('.delete');

  markedItem.forEach(item => {
    item.remove();
  });
}

function addDotsIfItemSoLong() {
  let h2 = document.querySelectorAll('h2');

  h2.forEach(item => {
    if (item.innerHTML.length > 20) {
      item.innerHTML = `${item.innerHTML.slice(0, 20)}...`;
    }
  });
}

btnAdd.addEventListener('click', addShop);
input.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    addShop();
  }
});

btnReset.addEventListener('click', function (e) {
  modal.classList.toggle('modalOpen');
});

modal.addEventListener('click', (e) => {
  let target = e.target;

  if (target && target.classList.contains('deleteAll')) {
    deleteAll();
  } else if (target && target.classList.contains('deleteMark')) {
    deleteMark();
  }
});