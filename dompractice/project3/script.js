const from = document.querySelector('form')

const btn =  document.querySelector('button')

btn.addEventListener('click', function(){
    from.dispatchEvent(new Event('submit'))
})

from.addEventListener('submit', function(e){
e.preventDefault();


const height =  parseInt(document.querySelector('#height').value)
const weight =  parseInt(document.querySelector('#weight').value)

const result = document.querySelector('.result')

if(!height || height < 0 || isNaN(height)){

    result.innerHTML =  `invaild value of height`
}

else if(!weight || weight < 0 || isNaN(weight)){

    result.innerHTML =  `invaild value of weight`
}

else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);


    result.innerHTML = `<span>${bmi}</span>`
}





})
