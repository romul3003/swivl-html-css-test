const marker = document.getElementById('marker')
const nav = document.getElementById('nav')

const setIndicator = event => {
  const { target } = event

  if (!target.classList.contains('navigation__link')) {
    return
  }

  marker.style.left = target.offsetLeft + 'px'
  marker.style.width = target.offsetWidth + 'px'
}

nav.addEventListener('mouseover', setIndicator)
