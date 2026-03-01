const limbo = document.querySelector('.limbo')
const limbo_p = limbo.querySelector('p')
const limbo_i = limbo.querySelector('i')

const container_sector = document.querySelector('.container_sector')
const container_limbo = document.querySelector('.container_limbo')


limbo.addEventListener('click', (e) => {
  const alvo = e.target

  console.log(window.getComputedStyle(container_sector).display)

  if ((alvo == limbo || alvo == limbo_p || alvo == limbo_i) && window.getComputedStyle(container_sector).display == 'block') {
    if (window.matchMedia('(max-width: 900px)').matches) {
      aside.style.animation = 'idde 0.2s ease-in-out forwards'
      mobile.style.color = 'black'
      menu_mobile.style.backgroundColor = 'white'
      menu_mobile.style.left = ''
      setTimeout(() => {
        aside.style.display = 'none'
        aside.style.animation = 'side 0.2s ease-in-out forwards'
      }, 250);
      container_sector.style.display = 'none'
      container_limbo.style.display = 'block'
      limbo_p.innerHTML = 'Voltar'
    } else {
      container_sector.style.display = 'none'
      container_limbo.style.display = 'block'
      limbo_p.innerHTML = 'Voltar'
    }
  } else {
    if (window.matchMedia('(max-width: 900px)').matches) {
      aside.style.animation = 'idde 0.2s ease-in-out forwards'
      mobile.style.color = 'black'
      menu_mobile.style.backgroundColor = 'white'
      menu_mobile.style.left = ''
      setTimeout(() => {
        aside.style.display = 'none'
        aside.style.animation = 'side 0.2s ease-in-out forwards'
      }, 250);
      container_sector.style.display = 'block'
      container_limbo.style.display = 'none'
      limbo_p.innerHTML = 'Limbo'
      window.location.search = '';
    } else {
      container_sector.style.display = 'block'
      container_limbo.style.display = 'none'
      limbo_p.innerHTML = 'Limbo'
      window.location.search = '';
    }
  }
})

window.addEventListener('load', () => {
  if (window.location.search == '?sucess') {
    container_sector.style.display = 'none'
    container_limbo.style.display = 'block'
    limbo_p.innerHTML = 'Voltar'
  } else {
    console.log(window.location.search)
  }
})