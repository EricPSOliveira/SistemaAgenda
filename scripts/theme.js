const deletear = document.querySelectorAll('.delete')
const inside_content_all = document.querySelectorAll('.inside_content')

const create_i = document.querySelector('.crate').querySelector('i')
const filter_i = document.querySelector('.filer').querySelector('i')
const pesquisar_i = document.querySelector('.pesquisar').querySelector('i')

const create_p = document.querySelector('.crate').querySelector('p')
const filter_p = document.querySelector('.filer').querySelector('p')
const sair_p = document.querySelector('.quit').querySelector('p')

const bodies = document.querySelector('body')




const light = document.querySelector('.light')
const dark = document.querySelector('.dark')
const light_icon = light.querySelector('i')
const dark_icon = dark.querySelector('i')

document.addEventListener('click', (e) => {
  if (e.target == light || e.target == light_icon) {
    light.style.display = 'none'

    dark_icon.style.color = 'white'
    dark.style.display = 'flex'

    // create_i.style.color = 'rgb(154, 144, 195)'
    // filter_i.style.color = 'rgb(154, 144, 195)'

    // pesquisar_i.style.color = 'rgb(154, 144, 195)'
    // create_p.style.color = 'rgb(154, 144, 195)'
    // filter_p.style.color = 'rgb(154, 144, 195)'
    // sair_p.style.color = 'rgb(154, 144, 195)'

    inside_content_all.forEach(e =>{
      e.style.backgroundColor = 'rgb(154, 144, 195)'
    })
    deletear.forEach(e=>{
      e.style.backgroundColor = 'rgb(154, 144, 195)'
    })

    bodies.style.backgroundImage = 'linear-gradient(135deg, rgba(65,53,4,1) 1%, rgba(2,0,36,1) 45%, rgba(16,6,34,1) 100%)'


  } else if (e.target == dark || e.target == dark_icon) {
    dark.style.display = 'none'
    light.style.display = 'flex'

    create_i.style.color = 'white'
    filter_i.style.color = 'white'

    pesquisar_i.style.color = 'white'
    create_p.style.color = 'white'
    filter_p.style.color = 'white'
    sair_p.style.color = 'white'
    inside_content_all.forEach(e =>{
      e.style.backgroundColor = 'white'
    })
    deletear.forEach(e=>{
      e.style.backgroundColor = 'white'
    })


    bodies.style.backgroundImage = 'linear-gradient(135deg,rgba(226, 20, 175, 1) 1%,rgb(93, 91, 128) 47%,rgba(93, 29, 208, 1) 100%)'
  }
})