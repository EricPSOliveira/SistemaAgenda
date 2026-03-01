const submitter = document.querySelector('.submitter')
const submitterID = document.querySelector('#submitter')

const elementor = document.querySelector('.elementor')
const results = document.querySelector('.results')


submitterID.addEventListener('click', (e) => {


  if (e.target == submitterID || e.target == submitter) {
    if (results && results.querySelector('.elementor')) {
      results.style.display = 'block'
    } else {
      results.style.display = 'none'

    }
  }

})




// const button_form = document.querySelector('.submitter')
// const form = document.querySelector('.search_tool2')




// form.addEventListener('submit', async (e) => {
//   e.preventDefault;


//   const form_data = new FormData(form);

//   const resposta = await fetch('index.php', {
//     method: 'GET',
//     body: form_data
//   }).then(Response =>
//     Response.json
//   ).then(data => data)
// console.log(resposta)


// })




// button_form.addEventListener('click', async (e) => {


// })



// const input_form = document.querySelector('.S_tool')

// button_form.addEventListener('click', (e)=>{
//   const url = window.location.origin;

//   const complete = window.location.pathname + '?search=' + input_form.value

//   window.location.href = complete
//   console.log(url, complete)
// })



const form = document.querySelector('.search_tool2');
const inputForm = document.querySelector('.S_tool');
const resultsContainer = document.querySelector('.results');

form.addEventListener('input', async (e) => {
  e.preventDefault(); // Corrigido para que o preventDefault realmente funcione

  const searchValue = inputForm.value.trim();

  if (searchValue) {
    try {
      const response = await fetch(`index.php?search=${encodeURIComponent(searchValue)}`, {
        method: 'GET'
      });

      if (response.ok) {

        const html = await response.text();

        let resultados = document.querySelector('.results');






        // Atualiza o conteúdo de .results com os elementos retornados pelo PHP
        resultsContainer.innerHTML = html
        let continua = resultados.querySelectorAll('.elementor');


        results.innerHTML = '';

        continua.forEach((e) => {
          results.appendChild(e)
        })

        results.style.display = 'block'


        console.log(html)
        console.log(continua)
      } else {
        console.error('Erro na requisição', response.status);
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição', error);
    }
  }
});