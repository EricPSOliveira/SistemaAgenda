const menu_mobile = document.querySelector('.menu_mobile');
const mobile = menu_mobile.querySelector('i');
const aside = document.querySelector('aside');




mobile.addEventListener('click', (e) => {

  if ((e.target == menu_mobile || e.target == mobile) && window.getComputedStyle(aside).display == 'none') {
    aside.style.display = 'flex'
    mobile.style.color = 'white'
    menu_mobile.style.backgroundColor = 'transparent'
    menu_mobile.style.left = '1rem'


    console.log(mobile)
  } else {
    aside.style.animation = 'idde 0.2s ease-in-out forwards'
    mobile.style.color = 'black'
    menu_mobile.style.backgroundColor = 'white'
    menu_mobile.style.left = ''
    setTimeout(() => {
      aside.style.display = 'none'
      aside.style.animation = 'side 0.2s ease-in-out forwards'
    }, 250);


    console.log(mobile, aside, e.target)
  }
})

let startX = 0;

document.addEventListener("touchstart", function (e) {
  // Captura a posição inicial do toque em X
  startX = e.touches[0].clientX;
}, false);

document.addEventListener("touchend", function (e) {
  // Captura a posição final do toque em X
  let endX = e.changedTouches[0].clientX;

  // Calcula a diferença entre o ponto inicial e final para detectar a direção
  let diffX = endX - startX;

  // Define um limite para considerar como um deslizar horizontal
  let threshold = 50;

  if (Math.abs(diffX) > threshold) {
    if (diffX > 0) {
      if (window.getComputedStyle(aside).display == 'none') {
        aside.style.display = 'flex'
        mobile.style.color = 'white'
        menu_mobile.style.backgroundColor = 'transparent'
        menu_mobile.style.left = '1rem'
      }
    } else {
      if (window.getComputedStyle(aside).display == 'flex') {
        aside.style.animation = 'idde 0.1s ease-in-out forwards'
        mobile.style.color = 'black'
        menu_mobile.style.backgroundColor = 'white'
        menu_mobile.style.left = ''
        setTimeout(() => {
          aside.style.display = 'none'
          aside.style.animation = 'side 0.1s ease-in-out forwards'
        }, 250);
      }
    }
  }
}, false);