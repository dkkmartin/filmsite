const menuBtn = document.querySelector('.burger__icon')
const modalMenu = document.querySelector('.menu__modal')
const modalClose = document.querySelector('.modal__close')
const footer = document.querySelector('.footer')

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

menuBtn.addEventListener('click', () => {
  modalMenu.style.display = 'flex'
  footer.style.display = 'none'
})

modalClose.addEventListener('click', () => {
  modalMenu.classList.add('animate__animated')
  modalMenu.classList.add('animate__fadeOutDown')
  delay(1000).then(() => {
    modalMenu.style.display = 'none'
    modalMenu.classList.remove('animate__fadeOutDown')
  })
})