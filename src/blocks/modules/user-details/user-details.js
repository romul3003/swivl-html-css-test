const userMenuBtn = document.getElementById('userMenuBtn')
const userMenu = document.getElementById('userMenu')

userMenuBtn.addEventListener('click', event => {
  userMenu.classList.toggle('user-details__menu_opened')
})
