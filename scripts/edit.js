const Edit = document.querySelector('.Edit')
const sister = document.querySelector('.edit');



const edit_icon = Edit.querySelector('i');


document.addEventListener('click', (e)=>{
  if(e.target.closest('.Edit')){
    console.log(e.target.querySelector('input').value)

    const tel = e.target.closest('.Edit').previousElementSibling.querySelector('p').textContent
    const proc = e.target.closest('.Edit').previousElementSibling.previousElementSibling.querySelector('p').textContent
    const data = e.target.closest('.Edit').previousElementSibling.previousElementSibling.previousElementSibling.querySelector('p').textContent
    const price = e.target.closest('.Edit').previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.querySelector('p').textContent

    const [dia, mes, ano] = data.split('/');
    const dataReformatada = `${ano}-${mes}-${dia}`;


    const name = e.target.closest('.Edit').previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.querySelector('p').textContent
    const ider = e.target.querySelector('input').value 


    let data_item = typeof(data);
    console.log(data_item)



    let edit_name = document.querySelector('.edit_name')
    let edit_data = document.querySelector('.edit_data')


    let edit_proc = document.querySelector('.edit_proc')
    let edit_cel = document.querySelector('.edit_cel')
    let edit_price = document.querySelector('.edit_price')
    let id = document.querySelector('.id')

    console.log(tel, proc, data, name, ider)

    if(window.getComputedStyle(sister).display == 'none'){
      sister.style.display = 'flex' 
      edit_name.value = name
      edit_data.value = dataReformatada
      edit_proc.value = proc
      edit_price.value = price
      edit_cel.value = tel
      id.value = ider
      

    } else{
      sister.style.display = 'none'
      edit_name.value = ''
      edit_data.value = ''
      edit_proc.value = ''
      edit_cel.value = ''
      edit_price.value = ''
      id.value = ''
    }
    
  }
})


document.querySelector('.edit').addEventListener('mousedown',(e)=>{
  if (e.target == document.querySelector('.edit')) {
   document.querySelector('.edit').style.display = 'none'
  }
})


// const edit_form = document.querySelector('.edit_form')

// edit_form.addEventListener('submit',(e)=>{
//     e.preventDefault();


    
// })