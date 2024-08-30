const form = document.querySelector('form')

 form.addEventListener('submit', (e) => {
event.preventDefault()

const height = parseFloat(document.querySelector('#height').value)
const weight = parseFloat(document.querySelector('#weight').value)
const result = document.querySelector('#result')

if(height < 0 || isNaN(height) || height === ""){
    result.innerHTML = 'please give a valid height';
} else if (weight < 0 || isNaN(weight) || weight === ""){
    result.innerHTML = 'please give a valid weight';
}else{
   const bmi = (weight / ((height*height)/10000)).toFixed(2)
   result.innerHTML = `<span>${bmi}</span>`;
}

});
