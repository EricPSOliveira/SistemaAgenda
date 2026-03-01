const creater = document.querySelector('.creater');


const crate = document.querySelector('.crate');

crate.addEventListener('mousedown', (e) => {
  const alvo = e.target;
  const children = crate.querySelector('p')





  if (alvo == crate || alvo == children) {
    creater.style.display = 'flex'

  }
})



creater.addEventListener('mousedown', (e) => {
  const alvo = e.target

  if (alvo === creater) {
    creater.style.display = 'none'
  }
})




// filter



const filer = document.querySelector('.filer');
const other = filer.querySelector('p')

const fillter = document.querySelector('.filtter')

const filtter_mob = document.querySelector('.filtter_mob');
const filtter_mob_childs = filtter_mob.querySelectorAll('div');

filer.addEventListener('click', (e) => {
  console.log(window.getComputedStyle(filtter_mob).display)

  if (window.matchMedia('(max-width: 900px)').matches) {


    if (window.getComputedStyle(filtter_mob).display == 'none') {
      filtter_mob.style.display = 'flex'
      setTimeout(() => {
        filtter_mob_childs.forEach((here) => {
          here.style.display = 'flex'
        })
      }, 510);

    } else {

      filtter_mob.style.animation = 'here_oposite 0.5s ease-in-out forwards';
      filtter_mob_childs.forEach((here) => {
        here.style.animation = 'opcinfo_oposite 0.2s ease-in-out forwards';
      })

      setTimeout(() => {
        console.log('Escondendo o menu');
        filtter_mob.style.display = 'none';
        console.log(filtter_mob);
        filtter_mob_childs.forEach((here) => {
          here.style.display = 'none';
        })
        filtter_mob.style.animation = 'here 0.5s ease-in-out forwards';
        filtter_mob_childs.forEach((here) => {
          here.style.animation = 'opcinfo 0.2s ease-in-out forwards';
        })

      }, 510);
    }
    console.log(window.getComputedStyle(filtter_mob).display)

  } else {
    const alvo = e.target;



    if (alvo === filer || alvo === other && window.getComputedStyle(fillter).display == 'none') {
      fillter.style.display = 'flex'
      setTimeout(() => {
        fillter.style.opacity = '1'
      }, 200);
    } else {
      fillter.style.display = 'none'
      fillter.style.opacity = '0'
    }
  }
})

fillter.addEventListener("mouseleave", () => {
  if (window.matchMedia('(max-width: 900px)').matches) {

  } else {



    fillter.style.display = 'none'
    fillter.style.opacity = '0'
  }
})
let timer; // Armazena a referência do temporizador

filer.addEventListener("mouseenter", () => {

  if (window.matchMedia('(max-width: 900px)').matches) {

  } else {


    // Inicia o temporizador que espera 1 segundo
    timer = setTimeout(() => {
      fillter.style.display = 'flex';
      fillter.style.opacity = '1';
    }, 1000);
  }// Espera 1 segundo (1000 ms)
});

filer.addEventListener("mouseleave", () => {
  // Limpa o temporizador caso o mouse saia antes de 1 segundo

  if (window.matchMedia('(max-width: 900px)').matches) {

  } else {
    clearTimeout(timer);
  }

});



//search


const pesquisar = document.querySelector('.pesquisar')
const pesquisar_I = pesquisar.querySelector('#menu_search')
const search = document.querySelector('.search')
const new_result = document.querySelector('.results')
const S_toolw = document.querySelector('.S_tool')


pesquisar_I.addEventListener('click', (e) => {
  console.log(e.target)
  if ((e.target == pesquisar || e.target == pesquisar_I || e.target == new_result) && window.getComputedStyle(search).display == 'none') {
    search.style.display = 'flex'
  } else {
    search.style.display = 'none'
    new_result.innerHTML = ''
    S_toolw.value = ''
  }
})
new_result.addEventListener('click', (e) => {
  console.log(e.target)
  if ((e.target == new_result) && window.getComputedStyle(search).display == 'none') {
    search.style.display = 'flex'
  } else {
    search.style.display = 'none'
    results.style.display = 'none'
    new_result.innerHTML = ''
     S_toolw.value = ''
  }
})
search.addEventListener('mousedown', (e) => {
  if (e.target == search) {
    search.style.display = 'none'
    results.style.display = 'none'
    results.innerHTML = ''
  }
})



//quit


const quit = document.querySelector('.quit')
const verlay = quit.querySelector('p')

quit.addEventListener('mousedown', (e) => {
  let dominio = window.location.origin;
  let hear = window.location.pathname
  let constante = dominio + hear.replace('index.php', 'login/login.php')
  let novaUrl = constante
  console.log(novaUrl)

  console.log(dominio, hear, novaUrl)
  if (e.target == quit || e.target == verlay) {
    window.location.href = novaUrl
    console.log(novaUrl)

  }
})