const userMenuBtn = document.getElementById('userMenuBtn')
const userMenu = document.getElementById('userMenu')

let isOpen = false

userMenuBtn.addEventListener('click', toggle)

function toggle() {
  if (isOpen) close()
  else open();
}

function open() {
  userMenu.classList.add('user-details__menu_opened')
  document.addEventListener('click', onDocumentClick)
  isOpen = true
}

function close() {
  userMenu.classList.remove('user-details__menu_opened');
  document.removeEventListener('click', onDocumentClick);
  isOpen = false;
}

function onDocumentClick(event) {
  if (!userMenu.contains(event.target) && !userMenuBtn.contains(event.target)) {
    close()
  }
}
