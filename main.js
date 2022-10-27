const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
  },
  keyboard: true
})


function openMenu() {
  document.body.classList.add('menu-expandido')
}

function closeMenu() {
  document.body.classList.remove('menu-expandido')
}

const images = setInterval(function time() {
  let largura = window.screen.width;
  let img = document.body.querySelector('.img-1');
  let img2 = document.body.querySelector('.img-2');
  let img3 = document.body.querySelector('.img-3');
  
  if (largura < 768) img = img.setAttribute('src', './assets/Instagram post - 3.png');
  if (largura >= 768) img = img.setAttribute('src', './assets/banner1.png')

  if (largura < 768) img2 = img2.setAttribute('src', './assets/Instagram post - 1.png');
  if (largura >= 768) img2 = img2.setAttribute('src', './assets/banner2.png')

  if (largura < 768) img3 = img3.setAttribute('src', './assets/Instagram post - 2.png');
  if (largura >= 768) img3 = img3.setAttribute('src', './assets/banner3.png')
})
