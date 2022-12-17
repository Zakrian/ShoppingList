const inner = document.querySelector('.inner'),
  form = document.querySelector('.form'),
  itemsList = document.querySelector('.list'),
  items = JSON.parse(localStorage.getItem('items')) || [];

function toggleMakOnItem(target) {
  const items = document.querySelectorAll('.list-item');
  items.forEach((item) => {
    if (item === target) {
      item.classList.toggle('mark-on');
    }
  });
}

function addItem(e) {
  e.preventDefault();
  const value = e.target.item.value;
  const item = {
    text: value,
    checked: false
  };

  if (value === '') return;

  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
  displayItems(items, itemsList);
  form.reset();
}
function displayItems(arr, list) {
  list.innerHTML = arr.map((item, i) => {
    return `
      <li class="list-item">
        <input type="checkbox" name="checkbox-${i}" class="list-item-checkbox visually-hidden" id="checkbox-${i}" data-index="${i}" ${item.checked ? 'checked' : ''}>
        <label for="checkbox-${i}" class="list-item-label">${item.text}</label>
      </li>
    `;
  }).join('');
}
function toggleClick(e) {
  if (!e.target.matches('input')) return;
  const element = e.target.dataset.index;
  items[element].checked = !items[element].checked;
  localStorage.setItem('items', JSON.stringify(items));
  displayItems(items, itemsList);
  console.log(items[element].checked);
}

function deleteItems() {
  localStorage.clear();
  itemsList.innerHTML = '';
  items.length = 0;
}

form.addEventListener('submit', addItem);
inner.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('btn-reset')) {
    deleteItems();
  }

  if (target.classList.contains('list-item')) {
    toggleMakOnItem(target);
  }

});
itemsList.addEventListener('click', toggleClick);
displayItems(items, itemsList);
