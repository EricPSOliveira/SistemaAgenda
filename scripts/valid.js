const name_input = document.querySelector('.name_input');
const data_input = document.querySelector('.data_input');
const proc_input = document.querySelector('.proc_input');
const cel_input = document.querySelector('.cel_input');
const father_name = name_input.parentElement;
const father_data = data_input.parentElement;
const father_proc = proc_input.parentElement;
const father_cel = cel_input.parentElement;

name_input.addEventListener('input', () =>{
  if(name_input.value !== ''){
    father_name.classList.add('valid');
  } else if(name_input.value == ''){
    father_name.classList.remove('valid')
  }
})
data_input.addEventListener('input', () =>{
  if(data_input.value !== ''){
    father_data.classList.add('valid');
  } else if(data_input.value == ''){
    father_data.classList.remove('valid')
  }
})
proc_input.addEventListener('input', () =>{
  if(proc_input.value !== ''){
    father_proc.classList.add('valid');
  } else if(proc_input.value == ''){
    father_proc.classList.remove('valid')
  }
})
cel_input.addEventListener('input', () =>{
  if(cel_input.value !== ''){
    father_cel.classList.add('valid');
  } else if(cel_input.value == ''){
    father_cel.classList.remove('valid')
  }
})








