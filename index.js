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

thumbnails.forEach(picture => {
  picture.addEventListener('click', () => {
    overlay.style.display = 'block'
    bigImg.style.display = 'block'
    let whereAmI = picture.src.slice(42, 48)
    console.log(whereAmI)
    if (whereAmI === 'thumb1') {
      bigImgSrc.setAttribute('src', '/assets/img/parasite-big1.jpg')
      bigImgPara.textContent = picture.getAttribute('alt')

    }

    if (whereAmI === 'thumb2') {
      bigImgSrc.setAttribute('src', 'assets/img/parasite-big2.webp')
      bigImgPara.textContent = picture.getAttribute('alt')
    }

    if (whereAmI === 'thumb3') {
      bigImgSrc.setAttribute('src', 'assets/img/parasite-big3.jpeg')
      bigImgPara.textContent = picture.getAttribute('alt')
    }
  })

  overlay.addEventListener('click', e => {
    if (e.target == overlay) {
      overlay.style.display = 'none'
      bigImg.style.display = 'none'
    }
  })
});