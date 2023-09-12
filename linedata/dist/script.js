const searchInput = document.getElementById('searchInput');
const list = document.getElementById('list');
const items = list.getElementsByTagName('li');

searchInput.addEventListener('input', function () {
  const searchValue = searchInput.value.toLowerCase();

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(searchValue)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
});