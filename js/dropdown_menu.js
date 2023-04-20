const drop = document.getElementById('openOnClick');
const options = document.getElementById('options');

function dropdown() {
  if (options.style.display === 'block') {
    options.style.display = 'none';
  } else {
    options.style.display = 'block';
  }
}

drop.addEventListener('click', dropdown);