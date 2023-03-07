const header = document.querySelector('.header__index')
const logo = document.querySelector('.main__container')
const footer = document.querySelector('.footer__index')

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}



window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 481px)').matches) {
    header.style.display = 'none'
    logo.style.display = 'none'
    footer.style.display = 'none'
    delay(1500).then(() => {
      header.style.display = 'flex'
      header.classList.add('animate__fadeIn')
    })
    
    delay(500).then(() => {
      logo.style.display = 'block'
      logo.classList.add('animate__fadeInUp')
    })
    
    delay(1500).then(() => {
      footer.style.display = 'flex'
      footer.classList.add('animate__fadeIn')
    })
  }
})

