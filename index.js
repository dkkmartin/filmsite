const menuBtn = document.querySelector('.burger__icon')
const modalMenu = document.querySelector('.menu__modal')
const modalClose = document.querySelector('.modal__close')
const footer = document.querySelector('.footer')
const overlay = document.querySelector('.overlay')
const bigImg = document.querySelector('.big__image')
const bigImgSrc = document.querySelector('.big__image__src')
const bigImgPara = document.querySelector('.big__image__para')
const thumbnails = Array.from(document.querySelectorAll('.gallery__image'))

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

overlay.addEventListener('click', e => {
  if (e.target == overlay) {
    overlay.style.display = 'none'
    bigImg.style.display = 'none'
    bigImgSrc.src = ''
    bigImgPara.textContent = ''
  }
})

thumbnails.forEach(picture => {
  picture.addEventListener('click', () => {
    overlay.style.display = 'block'
    bigImg.style.display = 'block'
    if (picture.src.includes('thumb1')) {
      bigImgSrc.setAttribute('src', '/assets/img/parasite-big1.jpg')
      bigImgPara.textContent = picture.getAttribute('alt')
    }

    if (picture.src.includes('thumb2')) {
      bigImgSrc.setAttribute('src', 'assets/img/parasite-big2.webp')
      bigImgPara.textContent = picture.getAttribute('alt')
    }

    if (picture.src.includes('thumb3')) {
      bigImgSrc.setAttribute('src', 'assets/img/parasite-big3.jpeg')
      bigImgPara.textContent = picture.getAttribute('alt')
    }
  })
});