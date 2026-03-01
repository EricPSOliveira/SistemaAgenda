
cel_input.addEventListener('input', (e) => {

  let valor = e.target.value.replace(/\D/g, '');
  console.log(valor.length)


  if (valor.length >= 11) {
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3'); // (00) 00000-0000
} else if (valor.length >= 7) {
    valor = valor.replace(/^(\d{2})(\d{4})(\d{1,4})$/, '($1) $2-$3'); // (00) 0000-0000
} else if (valor.length >= 3) {
    valor = valor.replace(/^(\d{2})(\d{1,4})$/, '($1) $2'); // (00) 0000
} else if (valor.length > 0) {
    valor = valor.replace(/^(\d{2})$/, '($1)'); // (00)
}

  console.log(valor)

  cel_input.value = valor
  

})

edit_cel.addEventListener('input', (e) => {

  let valor = e.target.value.replace(/\D/g, '');
  console.log(valor.length)


  if (valor.length >= 11) {
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3'); // (00) 00000-0000
} else if (valor.length >= 7) {
    valor = valor.replace(/^(\d{2})(\d{4})(\d{1,4})$/, '($1) $2-$3'); // (00) 0000-0000
} else if (valor.length >= 3) {
    valor = valor.replace(/^(\d{2})(\d{1,4})$/, '($1) $2'); // (00) 0000
} else if (valor.length > 0) {
    valor = valor.replace(/^(\d{2})$/, '($1)'); // (00)
}

  console.log(valor)

  edit_cel.value = valor
  

})


