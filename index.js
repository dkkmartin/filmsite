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

function randomAnimation() {
  const randomInt = Math.floor(Math.random() * 4) + 1
  if (randomInt === 1) {
    const animationIn = 'animate__fadeInDown'
    const animationOut = 'animate__fadeOutDown'
    return {animationIn, animationOut}
  }
  if (randomInt === 2) {
    const animationIn = 'animate__fadeInRight'
    const animationOut = 'animate__fadeOutLeft'
    return {animationIn, animationOut}
  }
  if (randomInt === 3) {
    const animationIn = 'animate__fadeInLeft'
    const animationOut = 'animate__fadeOutRight'
    return {animationIn, animationOut}
  }
  if (randomInt === 4) {
    const animationIn = 'animate__fadeInUp'
    const animationOut = 'animate__fadeOutUp'
    return {animationIn, animationOut}
  }
}

menuBtn.addEventListener('click', () => {
  const animation = randomAnimation()
  modalMenu.style.display = 'flex'
  footer.style.display = 'none'
  modalMenu.classList.add(animation.animationIn)
  delay(1000).then(() => {
    modalMenu.classList.remove(animation.animationIn)
  })
  
})

modalClose.addEventListener('click', () => {
  const animation = randomAnimation()
  modalMenu.classList.add(animation.animationOut)
  delay(1000).then(() => {
    modalMenu.style.display = 'none'
    modalMenu.classList.remove(animation.animationOut)
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
      bigImgSrc.setAttribute('src', 'assets/img/parasite-big1.jpg')
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